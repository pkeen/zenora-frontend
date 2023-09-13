import React from "react";
import StyledLink from "../Typography/StyledLink";
import LogOutButton from "../LogOutButton/LogOutButton";
import LogInNavButton from "../LogInNavButton";
import SignUpNavButton from "../SignUpNavButton";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import Logo from "../Logo";
import { css } from "@emotion/react";

const NavBar = ({ user }) => {
	return (
		<nav
			css={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "1rem",
			}}
		>	
			{/* <div css={{
				border: '1px solid blue',
				display: 'flex'
			}}> */}
			<Logo />
			<div css={css`
				display: flex;
				div {
					margin-right: 1rem;
				}
			`}>
				<StyledLink to="/courses">Courses</StyledLink>
			</div>
			{/* <Link to="/">Courses</Link> */}

			{user && <StyledLink to="/my-courses">My Courses</StyledLink>}
			{user && <StyledLink to="/courses/create">Create Course</StyledLink>}
			<div css={css`
				display: flex;
				align-items: center;
				div {
					margin-left: .75rem;
				}

			`}>
				<ThemeSelector />
				{!user && <LogInNavButton />}
				{!user && <SignUpNavButton/>}
				{user && <LogOutButton />}
			</div>
		</nav>
	);
};

export default NavBar;
