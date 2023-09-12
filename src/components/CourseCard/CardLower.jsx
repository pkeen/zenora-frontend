import React from "react";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import ThemeContext from "../../themes/ThemeContext";
import { CheckOutlined } from "@mui/icons-material";

const CardLower = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	const currentTheme = useTheme();

	return (
		<div
			css={{
				backgroundColor:
					theme === "dark"
						? currentTheme.colors.grey[800]
						: currentTheme.colors.grey[300],
				transition: 'background-color 0.5s',
				borderBottomRightRadius: "20px",
				borderBottomLeftRadius: "20px",
			}}
		>
			{children}
		</div>
	);
};

export default CardLower;
