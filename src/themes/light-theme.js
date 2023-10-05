import defaultTheme from "./default-theme";
import { merge } from "lodash";

const lightTheme = merge({}, defaultTheme, {
	backgroundColor: defaultTheme.colors.grey[50],
	typography: {
		h1: {
			color: defaultTheme.colors.grey[900],
		},
		h2: {
			color: defaultTheme.colors.grey[800],
		},
		h3: {
			color: defaultTheme.colors.grey[700],
		},
		h4: {
			color: defaultTheme.colors.grey[600],
		},
		h5: {
			color: defaultTheme.colors.grey[500],
		},
		p: {
			color: defaultTheme.colors.grey[600],
		},
		a: {
			color: defaultTheme.colors.grey[700],
			"&: hover": {
				color: defaultTheme.colors.grey[400],
			},
		},
		label: {
			color: defaultTheme.colors.grey[600],
		},
	},
	globals: {
		body: {
			backgroundColor: defaultTheme.colors.grey[50],
		},
	},
	components: {
		navPanel: {
			color: defaultTheme.colors.grey[700]
		}
	}
});

lightTheme.globals = merge(lightTheme.globals, lightTheme.typography);

export default lightTheme;
