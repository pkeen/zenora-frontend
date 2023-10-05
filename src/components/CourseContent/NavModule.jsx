import React, { useState } from "react";
import NavModuleSlot from "./NavModuleSlot";

const NavModule = ({ module, handleSelectContent }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
        setIsOpen(!isOpen);
        handleSelectContent(module.id, "module");
    }

	return (
		<div>
			<button onClick={handleClick}>{module.title}</button>
			{module.ModuleSlots && isOpen && (
				<div>
					{module.ModuleSlots.map((moduleSlot) => (
						<NavModuleSlot
							slot={moduleSlot}
							handleSelectContent={handleSelectContent}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default NavModule;
