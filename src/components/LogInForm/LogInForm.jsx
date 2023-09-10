import React, { useState } from "react";
import * as userService from "../../utils/users-service";
import { Link , useNavigate} from "react-router-dom";


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
			setError(err.message)
		}
	};

	return (
		<form onSubmit={handleSubmit}>
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
			<button type="submit">Log In</button>
			<p className="error-message">{error}</p>
            <Link to='/'>New here? Sign up</Link>
		</form>
	);
};

export default LogInForm;
