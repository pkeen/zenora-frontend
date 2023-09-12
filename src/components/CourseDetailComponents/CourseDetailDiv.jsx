import React from "react";

const CourseDetailDiv = ({ children }) => {
	return (
		<div
			css={{
				// border: "1px solid white",
				borderRadius: "20px",
				margin: "2rem",
				display: "flex",
				flexDirection: "column",
				// transition: "transform 0.3s ease",
				// "&:hover": {
				// 	transform: "scale(1.05)",
				// },
			}}
		>
			{children}
		</div>
	);
};

export default CourseDetailDiv;
