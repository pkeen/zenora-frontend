import React, { useState , useEffect } from "react";
import StyledLink from "../Typography/StyledLink";
import LogOutButton from "../LogOutButton/LogOutButton";
import LogInNavButton from "../LogInNavButton";
import SignUpNavButton from "../SignUpNavButton";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import Logo from "../Logo";
import NavigationMenu from "../NavigationMenu";
import { css } from "@emotion/react";
import Hamburger from "../Hamburger";
import { useTheme } from "@emotion/react";

const NavBar = ({ user }) => {
	const [isMobile, setIsMobile] = useState();
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const opacity =
				currentScrollY < window.innerHeight
					? 1
					: 0.5;
			setOpacity(opacity);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const theme = useTheme();

	const hideSmallCss = {
		[theme.breakpoints.sm.lower]: {
			display: 'none'
		}
	};

	return (
		<nav
			css={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "1rem 0",
				position: "sticky",
				top: 0,
				zIndex: 1000, // Ensure the navbar stays above other content
				backgroundColor: `rgba(255, 255, 255, ${opacity})`,
			}}
		>
			<div
				css={{
					display: "flex",
					alignItems: "center",
					div: {
						marginRight: "1rem",
					},
				}}
			>
				<Logo />
				<NavigationMenu css={hideSmallCss} />
			</div>

			{/**
			 * Hamburger or Button Row at sm +
			 */}

			<div
				css={css`
					display: flex;
					align-items: center;
					div {
						margin-left: 0.75rem;
					}
				`}
			>
				<ThemeSelector css={hideSmallCss} />
				{!user && <LogInNavButton css={hideSmallCss} />}
				{!user && <SignUpNavButton css={hideSmallCss} />}
				{user && <LogOutButton css={hideSmallCss} />}
				<Hamburger />
			</div>
		</nav>
	);
};

export default NavBar;
