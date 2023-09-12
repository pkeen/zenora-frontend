import { greyPalette } from "./color-palette";
import { zenCreamPalette } from "./color-palette";

export default {
	// backgroundColor: "#242424",
	backgroundColor: greyPalette[900],
	// textColor: "rgba(255, 255, 255, 0.87)",
	textColor: greyPalette[50], // general white
	paragraphColor: greyPalette[500],
	// paragraphColor: 'red',
	colors: {
		grey: {
			50: "#FAFAFA",
			100: "#F5F5F5",
			200: "#EEEEEE",
			300: "#E0E0E0",
			400: "#BDBDBD",
			500: "#9E9E9E",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
		},
	},
	typography: {
		h1: {
			fontSize: "1.75rem",
			fontWeight: 800,
			color: greyPalette[50],
			margin: "1rem 0",
		},
		h2: {
			fontSize: "1.5rem",
			fontWeight: 700,
			color: greyPalette[100],
			margin: ".75rem 0",
		},
		h3: {
			fontSize: "1.25rem",
			fontWeight: 600,
			color: greyPalette[300],
			margin: ".33rem 0rem",
		},
		h4: {
			fontSize: "1.25rem",
			fontWeight: 500,
			color: greyPalette[300],
			margin: ".25rem 0rem",
		},
		h5: {
			fontSize: "1.0rem",
			fontWeight: 500,
			color: greyPalette[400],
			margin: ".125rem 0",
		},
		p: {
			color: greyPalette[500],
			fontSize: "1rem 0",
		},
	},
};
