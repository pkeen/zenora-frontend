import React from "react";

const ModuleContent = ({ module }) => {
	const css = {
		flex: "1",
	};
	return (
		<div css={css}>
			<h2>{module.title}</h2>
			<p>{module.text}</p>
		</div>
	);
};

export default ModuleContent;
