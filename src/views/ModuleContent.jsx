import React from 'react';

const ModuleContent = ({module}) => {
    return (
		<div>
			<h1>{module.title}</h1>
			<p>{module.text}</p>
		</div>
	);
}

export default ModuleContent;
