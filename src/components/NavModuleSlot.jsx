import React from "react";
import NavLesson from "./NavLesson";

const NavModuleSlot = ({slot, handleSelectContent}) => {
	return (
		<div
			css={{
				paddingLeft: "1rem",
			}}
		>
			<NavLesson
				lesson={slot.Lesson}
				handleSelectContent={handleSelectContent}
			/>
		</div>
	);
};

export default NavModuleSlot;
