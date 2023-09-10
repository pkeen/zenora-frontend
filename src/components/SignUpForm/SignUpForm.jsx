import React, { useState } from "react";
import * as userService from "../../utils/users-service";
import { Link } from "react-router-dom";

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
			setError(err.message)
		}
	};

	const disabled = userData.password !== userData.confirmPassword;

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				name="name"
				id="name"
				value={userData.name}
				onChange={handleChange}
			/>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				value={userData.email}
				onChange={handleChange}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				value={userData.password}
				onChange={handleChange}
			/>
			<label htmlFor="confirmPassword">Confirm Password</label>
			<input
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				value={userData.confirmPassword}
				onChange={handleChange}
			/>
			<button type="submit" disabled={disabled}>
				Sign Up
			</button>
			<p className="error-message">{error}</p>
			<Link to="/login">Already have an account? Log in here</Link>
		</form>
	);
};

export default SignUpForm;
