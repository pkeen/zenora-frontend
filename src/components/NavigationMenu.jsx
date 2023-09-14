import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import StyledLink from "./Typography/StyledLink";
import { UserContext } from "../App/App";

const NavigationMenu = () => {
	const theme = useTheme();

	const [user, setUser] = useContext(UserContext);

	return (
		<div
			css={{
				display: "none",
				a: {
					marginRight: "1rem",
				},
				[theme.breakpoints.sm.higher]: {
					// olnly show larger than xs
					display: "flex",
					flexGrow: "1",
				},
			}}
		>

            <StyledLink to="/courses">Courses</StyledLink>

			{user && <StyledLink to="/my-courses">My Courses</StyledLink>}
			{user && (
				<StyledLink to="/courses/create">Create Course</StyledLink>
			)}
		</div>
	);
};

export default NavigationMenu;
