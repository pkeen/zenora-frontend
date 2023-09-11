import React from "react";
import { Link } from "react-router-dom";
import StyledLink from "../Typography/StyledLink";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./NavBar.css";
import { DarkMode } from "@mui/icons-material";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import { css } from "@emotion/react";

const NavBar = ({ user }) => {
	return (
		<nav
			// className="nav-bar"
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '1rem'
			}}
		>
			<StyledLink to="/">Courses</StyledLink>
			{/* <Link to="/">Courses</Link> */}

			<StyledLink to="/my-courses">My Courses</StyledLink>
			<StyledLink to="/courses/create">Create Course</StyledLink>
			<ThemeSelector />
			{user && <LogOutButton />}
		</nav>
	);
};

export default NavBar;
