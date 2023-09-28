import React from "react";
import Typography from "../Typography/Typography";
import ModuleSlot from "./ModuleSlot";

const Module = ({ module, idx }) => {
	return (
		<>
			<Typography variant="h3">
				{idx} Module: {module.title}
			</Typography>
			{module.ModuleSlots.map((moduleSlot, idx) => {
				return <ModuleSlot slot={moduleSlot} key={idx} idx={idx + 1} />;
			})}
		</>
	);
};

export default Module;
