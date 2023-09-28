import React, { useContext } from "react";
import CourseSlot from "./CourseSlot";
import Typography from "../Typography/Typography";
import { useTheme } from "@emotion/react";
import ThemeContext from "../../themes/ThemeContext";

const CourseSlotList = ({ courseSlots }) => {
	const currentTheme = useTheme();

	const { theme } = useContext(ThemeContext);

	return (
		<div
			css={{
				textAlign: "left",
				// margin: "1rem",
				padding: "0.5rem",
				border: `1px solid ${
					theme === "light"
						? currentTheme.colors.grey[400]
						: currentTheme.colors.grey[700]
				}`,
				borderRadius: '1rem'
			}}
		>
			<Typography variant="h5" css={{
				textDecoration: 'underline'
			}}>Course Contents</Typography>
			{courseSlots.map((slot, idx) => (
				<CourseSlot slot={slot} key={idx} idx={idx+1} />
			))}
		</div>
	);
};

export default CourseSlotList;
