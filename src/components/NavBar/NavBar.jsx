import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import './NavBar.css'

const NavBar = ({ user }) => {
	return (
		<nav className="nav-bar">
			<Link to="/">Courses</Link>
			<Link to="/my-courses">My Courses</Link>
			<Link to="/courses/create">Create Course</Link>
			{user && <LogOutButton />}
		</nav>
	);
};

export default NavBar;
