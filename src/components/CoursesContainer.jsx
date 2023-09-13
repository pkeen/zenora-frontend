import React from "react";
import { css } from "@emotion/react";

const CoursesContainer = ({ children, className }) => {
	const breakpoints = [576, 768, 992, 1200];

	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

	return (
		<div
			css={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
				gap: '2vw',
                
				[mq[0]]: {
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
