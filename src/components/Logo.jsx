import React from "react";
import { Spa } from "@mui/icons-material";
import { SpaTwoTone } from "@mui/icons-material";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Logo = () => {
	const theme = useTheme();

	return (
		<div>
			<SpaTwoTone
				fontSize="large"
				sx={{}}
				css={{
					color: theme.colors.grey[500],
				}}
			/>
		</div>
	);
};

export default Logo;
