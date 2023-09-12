import React from "react";
import { useTheme } from "@emotion/react";

const Button = ({
	children,
	onClick,
	className,
	type = "button",
	variant = "primary",
    size = "md"
}) => {
	const theme = useTheme();

	let css = {
		padding: "1rem",
		borderRadius: "3rem",
		border: "none",
		outline: "none",
		WebkitAppearance: "none",
		MozAppearance: "none",
		appearance: "none",
		transition: "background-color .3s ease",
		backgroundColor: theme.colors.grey[500],
		color: theme.colors.grey[50],
		fontWeight: "700",
		"&:hover": {
			backgroundColor: theme.colors.grey[600],
		},
		"&:active": {
			backgroundColor: theme.colors.grey[700],
		},
	};

	switch (variant) {
		case "ghost":
			const extraCss = {
				backgroundColor: "transparent",
				border: `1px solid ${theme.colors.grey[500]}`,
				color: theme.colors.grey[500],
				transition: "border 1.8 ease",
				"&:hover": {
					borderColor: theme.colors.grey[400],
				},
			};
			css = { ...css, ...extraCss };
            break;
	}

    switch (size) {
        case "sm": {
            const extraCss = {
                padding: '.5rem .75rem'
            }
            css = {...css, ...extraCss}
        }
    }

	return (
		<div>
			<button
				css={css}
				className={className}
				type={type}
				onClick={onClick}
			>
				{children}{" "}
			</button>
		</div>
	);
};

export default Button;
