import React from "react";
import { useTheme } from "@emotion/react";

const CourseDetailDiv = ({ children }) => {
	const theme = useTheme();


	return (
		<div
			css={{
				display: 'grid',
				gap: '1rem',
				// borderRadius: "20px",
				margin: "2rem 0",
				// display: "flex",
				// flexDirection: "column",
				// transition: "transform 0.3s ease",
				// "&:hover": {
				// 	transform: "scale(1.05)",
				// },
				[theme.breakpoints.sm]: {
					gridTemplateColumns: '1fr 1fr',
					margin: "3rem 0"
				}
			}}
		>
			{children}
		</div>
	);
};

export default CourseDetailDiv;
