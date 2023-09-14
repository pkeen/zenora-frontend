import React from "react";
import { Menu } from "@mui/icons-material";
import IconButton from "./IconButton";
import { useTheme } from "@emotion/react";

const Hamburger = () => {
	const theme = useTheme();

	const css = {
        [theme.breakpoints.sm.higher]: {
            display: 'none'
        }
    };
	return (
		<IconButton variant="ghost" size="sm" css={css}>
			<Menu />
		</IconButton>
	);
};

export default Hamburger;
