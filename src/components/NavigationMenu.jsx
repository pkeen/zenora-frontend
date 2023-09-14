import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import StyledLink from "./Typography/StyledLink";
import { UserContext } from "../App/App";

const NavigationMenu = ({ className }) => {
	const theme = useTheme();

	const [user, setUser] = useContext(UserContext);

	return (
		<div className={className}>
			<StyledLink to="/courses">Courses</StyledLink>
			{user && <StyledLink to="/my-courses">My Courses</StyledLink>}
			{user && (
				<StyledLink to="/courses/create">Create Course</StyledLink>
			)}
		</div>
	);
};

export default NavigationMenu;
