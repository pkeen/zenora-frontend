import React from "react";
import { useTheme } from "@emotion/react";

const CoursesContainer = ({ children, className }) => {
	const theme = useTheme();

	return (
		<div
			css={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
				gap: "2vw",

				[theme.breakpoints.sm.higher]: {
					gridTemplateColumns:
						"repeat(auto-fill, minmax(300px, 1fr))",
				},
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export default CoursesContainer;
