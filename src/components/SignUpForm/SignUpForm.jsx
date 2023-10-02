import React, { useState } from "react";
import * as userService from "../../utils/users-service";
import { Link } from "react-router-dom";
import Button from "../Button";
import InputField from "../InputField";

const SignUpForm = ({ setUser }) => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState(""); // used to display an error message e.g email already exists, passwords do not match

	const handleChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { name, email, password } = userData;
			const formData = { name, email, password };
			// ^ destructure into formData without confirmPassword
			const user = await userService.signUp(formData);
			// ^ will resolve to user object contained in token
			setUser(user);
		} catch (err) {
			console.log(err);
			setError(err.message);
		}
	};

	const disabled = userData.password !== userData.confirmPassword;

	return (
		<form
			onSubmit={handleSubmit}
			css={{
				display: "flex",
				flexDirection: "column",
				width: "400px",
				textAlign: "center",
			}}
		>
			<h1 css={{ gridColumn: "span 2" }}>Sign up</h1>
			{/* <label htmlFor="name">Name</label> */}
			<InputField
				type="text"
				name="name"
				id="name"
				value={userData.name}
				onChange={handleChange}
				label="Name"
			/>
			{/* <input
				type="text"
				name="name"
				id="name"
				value={userData.name}
				onChange={handleChange}
			/> */}
			{/* <label htmlFor="email">Email</label> */}
			<InputField
				type="email"
				name="email"
				id="email"
				value={userData.email}
				onChange={handleChange}
				label="Email"
			/>
			{/* <input
				type="email"
				name="email"
				id="email"
				value={userData.email}
				onChange={handleChange}
			/> */}
			{/* <label htmlFor="password">Password</label> */}
			<InputField
				type="password"
				name="password"
				id="password"
				value={userData.password}
				onChange={handleChange}
				label="Password"
			/>
			{/* <input
				type="password"
				name="password"
				id="password"
				value={userData.password}
				onChange={handleChange}
			/> */}
			{/* <label htmlFor="confirmPassword">Confirm Password</label> */}
			<InputField
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				value={userData.confirmPassword}
				onChange={handleChange}
				label="Confirm Password"
			/>
			{/* <input
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				value={userData.confirmPassword}
				onChange={handleChange}
			/> */}
			<div
				css={{
					gridColumn: "span 2",
				}}
			>
				<Button type="submit" disabled={disabled}>
					Sign Up
				</Button>
			</div>
			<div
				css={{
					gridColumn: "span 2",
				}}
			>
				<p className="error-message">{error}</p>
			</div>
			<div
				css={{
					gridColumn: "span 2",
				}}
			>
				<Link to="/login">Already have an account? Log in here</Link>
			</div>
		</form>
	);
};

export default SignUpForm;
