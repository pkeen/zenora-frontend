import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";

const NavBar = ({ user }) => {
	return (
		<nav>
			<Link to="/">Courses</Link>
			<Link to="/my-courses">My Courses</Link>
			{user && <LogOutButton />}
		</nav>
	);
};

export default NavBar;
