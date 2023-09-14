import { greyPalette } from "./color-palette";
import { zenCreamPalette } from "./color-palette";
import defaultTheme from "./default-theme";

export default {
	...defaultTheme, // spread in default theme
	// textColor: "#213547",
	
	textColor: greyPalette[900],
	backgroundColor: greyPalette[50],
	paragraphColor: greyPalette[600],
	// colors: {
	// 	grey: {
	// 		50: "#FAFAFA",
	// 		100: "#F5F5F5",
	// 		200: "#EEEEEE",
	// 		300: "#E0E0E0",
	// 		400: "#BDBDBD",
	// 		500: "#9E9E9E",
	// 		600: "#757575",
	// 		700: "#616161",
	// 		800: "#424242",
	// 		900: "#212121",
	// 	},
	// },
	typography: {
		h1: {
			fontSize: "1.75rem",
			fontWeight: 800,
			color: greyPalette[900],
			margin: "1rem 0",
		},
		h2: {
			fontSize: "1.5rem",
			fontWeight: 700,
			color: greyPalette[800],
			margin: ".75rem 0",
		},
		h3: {
			fontSize: "1.25rem",
			fontWeight: 600,
			color: greyPalette[700],
			margin: ".33rem 0rem",
		},
		h4: {
			fontSize: "1.25rem",
			fontWeight: 500,
			color: greyPalette[600],
			margin: ".25rem 0rem",
		},
		h5: {
			fontSize: "1.0rem",
			fontWeight: 500,
			color: greyPalette[600],
			margin: ".125rem 0rem",
		},
		p: {
			color: greyPalette[600],
			fontSize: "1rem 0",
		},
	},
};
