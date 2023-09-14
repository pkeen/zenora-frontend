import React, { useState, useEffect } from "react";
import { Menu } from "@mui/icons-material";
import IconButton from "./IconButton";
import { useTheme } from "@emotion/react";
import NavigationMenu from "./NavigationMenu";

const Hamburger = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	// useEffect(() => {
	// 	const display = open ? "flex" : "none";
	// 	console.log(display)
	// 	css = {
	// 		display: display
	// 	}
	// 	console.log(css);
	// }, [open]);
	

	const hamburgerCss = {
		transition: "background-color 0.3s ease", // Corrected transition value
		[theme.breakpoints.sm.higher]: {
			display: "none",
		},
	};

	const menuCss = {
		display: open ? "flex" : "none",
		position: "absolute",
		border: "1px solid red",
		top: "60px",
		right: ".5rem",
		flexDirection: "column",
	};

	const handleClick = () => {
		setOpen((prev) => !prev);
		console.log(open)
	}

	// console.log(open ? "flex" : "none")

	// css = {menuCss}

	return (
		<div css={hamburgerCss}>
			<IconButton
				variant="ghost"
				size="sm"
				css={hamburgerCss}
				onClick={handleClick}
			>
				<Menu />
			</IconButton>
			<div css={menuCss} key={open ? "open" : "closed"}>
				<NavigationMenu
					css={{
						display: "flex",
						flexDirection: "column",
						textAlign: "right",
						// justifyContent: "space-between",
						alignItems: "right",
						padding: "1rem 0",
						'& > a': {
							paddingBottom: '.5rem'
						}
					}}
				/>
				<p>Light mode</p>
			</div>
		</div>
	);
};

export default Hamburger;
