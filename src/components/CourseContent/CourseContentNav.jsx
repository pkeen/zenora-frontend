import React from "react";
import { useTheme } from "@emotion/react";
import CourseContentNavSlot from "./CourseContentNavSlot";

const CourseContentNav = ({ courseSlots, className, handleSelectContent }) => {
	const theme = useTheme();
	
	const css = {
		width: "300px",
		backgroundColor: theme.components.navPanel.backgroundColor,
		color: theme.components.navPanel.color,
	};

	return (
		<div className={className} css={css}>
			{courseSlots.map((slot) => (
				<CourseContentNavSlot
					slot={slot}
					handleSelectContent={handleSelectContent}
				/>
			))}
		</div>
	);
};

export default CourseContentNav;
