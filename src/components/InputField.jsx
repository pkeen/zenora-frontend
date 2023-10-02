import React from "react";

const InputField = ({ type, name, id, value, onChange, label}) => {
	return (
		<div css={{
			display: 'flex',
			flexDirection: 'column'
		}}>
			<label htmlFor={id} css={{
				textAlign: 'left'
			}}>{label || name}</label>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				css={{
					margin: '.25rem 0',
					padding: '.5rem',
					borderRadius: '.5rem',
					border: '1px solid grey'
				}}
			></input>
		</div>
	);
};

export default InputField;
