import React from "react";
import NavLesson from "./NavLesson";
import NavModule from "./NavModule";

const CourseContentNavSlot = ({ slot, handleSelectContent }) => {
	return (
		<div>
			{slot.Module ? (
				<NavModule
					module={slot.Module}
					handleSelectContent={handleSelectContent}
				/>
			) : (
				<NavLesson
					lesson={slot.Lesson}
					handleSelectContent={handleSelectContent}
				/>
			)}
		</div>
	);
};

export default CourseContentNavSlot;
