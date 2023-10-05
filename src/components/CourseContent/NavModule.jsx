import React, { useState } from "react";
import NavModuleSlot from "./NavModuleSlot";
import NavButton from "./NavButton";

const NavModule = ({ module, handleSelectContent }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
        setIsOpen(!isOpen);
        handleSelectContent(module.id, "module");
    }

	return (
		<div>
			<NavButton handleClick={handleClick} variant="module">{module.title}</NavButton>
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
