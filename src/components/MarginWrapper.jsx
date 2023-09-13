import React from "react";
import { useTheme } from "@emotion/react";

const MarginWrapper = ({ children }) => {
	const theme = useTheme();

	return (
		<div
			css={{
				margin: "0 1rem",
				[theme.breakpoints.sm]: {
					margin: "0 2rem",
				},
				[theme.breakpoints.md]: {
					margin: "0 4rem",
				},
				[theme.breakpoints.lg]: {
					margin: "0 7rem",
				},
				[theme.breakpoints.xl]: {
					margin: "0 9rem",
				},
			}}
		>
			
				{children}
		</div>
	);
};

export default MarginWrapper;
