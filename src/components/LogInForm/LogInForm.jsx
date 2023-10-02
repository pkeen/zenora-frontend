import React, { useState } from "react";
import * as userService from "../../utils/users-service";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import InputField from "../InputField";

const LogInForm = ({ setUser }) => {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState(""); // used to display an error message e.g email already exists, passwords do not match
	const navigate = useNavigate();

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
			const user = await userService.logIn(userData);
			// ^ will resolve to user object contained in token
			setUser(user);
			navigate("/");
		} catch (err) {
			console.log(err);
			setError(err.message);
		}
	};

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
			<h1 css={{ gridColumn: "span 2" }}>Log in</h1>
			{/* <label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				value={userData.email}
				onChange={handleChange}
			/> */}
			<InputField
				type="email"
				name="email"
				id="email"
				value={userData.email}
				onChange={handleChange}
				label="Email"
			/>
			<InputField
				type="password"
				name="password"
				id="password"
				value={userData.password}
				onChange={handleChange}
				label="Password"
			/>
			{/* <label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				value={userData.password}
				onChange={handleChange}
			/> */}
			<div
				css={{
					gridColumn: "span 2",
				}}
			>
				<Button type="submit" size="md">
					Log In
				</Button>
			</div>
			<p className="error-message" css={{ gridColumn: "span 2" }}>
				{error}
			</p>
			<div css={{ gridColumn: "span 2" }}>
				<Link to="/">New here? Sign up</Link>
			</div>
		</form>
	);
};

export default LogInForm;
