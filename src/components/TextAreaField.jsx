import React from "react";

const TextAreaField = ({ name, id, value, onChange, label }) => {
	return (
		<div
			css={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<label
				htmlFor={id}
				css={{
					textAlign: "left",
				}}
			>
				{label || name}
			</label>
			<textarea
				name={name}
				id={id}
				value={value}
				onChange={onChange}
                rows="3"
				css={{
					margin: ".25rem 0",
					padding: ".5rem",
					borderRadius: ".5rem",
					border: "1px solid grey",
				}}
			></textarea>
		</div>
	);
};

export default TextAreaField;
