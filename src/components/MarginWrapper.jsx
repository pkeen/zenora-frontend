import React from "react";
import { useTheme } from "@emotion/react";

const MarginWrapper = ({ children }) => {
	const theme = useTheme();

	return (
		<div
			css={{
				// border: '1px solid red', 
				margin: "0 1rem",
				[theme.breakpoints.sm.higher]: {
					margin: "0 2rem",
				},
				[theme.breakpoints.md.higher]: {
					margin: "0 10%",
				},
				[theme.breakpoints.lg.higher]: {
					margin: "0 15%",
				},
				// [theme.breakpoints.xl.higher]: {
				// 	margin: "0 9rem",
				// },
				minHeight: '100%',
				flex: '1',
				display: "flex",
				flexDirection: "column",
				justifyContent: "start",
				border: '1px solid green', 
				// flex: '1'
			}}
		>
			
				{children}
		</div>
	);
};

export default MarginWrapper;
