const breakpoints = [600, 800, 1000, 1200, 1400];

const mq = breakpoints.map((bp) => {
	return {
		higher: `@media (min-width: ${bp}px)`,
		lower: `@media (max-width: ${bp}px)`,
	};
});

const theme = {
	root: {
		baseFontSize: "16px",
	},
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
			fontSize: "2rem",
			fontWeight: 800,
			margin: "1rem 0",
		},
		h2: {
			fontSize: "1.5rem",
			fontWeight: 700,
			margin: ".75rem 0",
		},
		h3: {
			fontSize: "1.25rem",
			fontWeight: 600,
			margin: ".33rem 0rem",
		},
		h4: {
			fontSize: "1.25rem",
			fontWeight: 500,
			margin: ".25rem 0rem",
		},
		h5: {
			fontSize: "1.0rem",
			fontWeight: 500,
			margin: ".125rem 0rem",
		},
		p: {
			fontSize: "1rem 0",
		},
		a: {
			fontSize: "1rem 0",
		},
		input: {
			backgroundColor: "transparent",
			transition: "background 0.5 ease",
		},
		textArea: {
			backgroundColor: "transparent",
		},
		select: {
			backgroundColor: "transparent",
		}
	},
	border: {
		radius: {
			round: "3rem",
			md: "1rem",
		},
	},
	breakpoints: {
		sm: mq[0],
		md: mq[1],
		lg: mq[2],
		xl: mq[3],
		xxl: mq[4],
	},
};

theme.globals = {
	html: {
		fontSize: theme.root.baseFontSize,
	},
	body: {
		backgroundColor: theme.colors.grey[500],
		transition: "background 0.5 ease",
	},
	"*": {
		transition: "background 0.5 ease",
	},
	...theme.typography,
};

export default theme;
