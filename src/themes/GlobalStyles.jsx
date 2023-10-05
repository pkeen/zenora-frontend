import { css, Global } from "@emotion/react";

const GlobalStyles = ({ theme }) => {

	const base = css`
		/* CSS RESET STYLES */
		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			/* font-size: 100%; */
			font: inherit;
			vertical-align: baseline;
		}
		* {
			box-shadow: none;
		}

		:root {
			font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
			font-synthesis: none;
			text-rendering: optimizeLegibility;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-text-size-adjust: 100%;
			padding: 0;
			margin: 0;
		}
		html {
			font-size: 14px;
		}

		*,
		*::before,
		*::after {
			box-sizing: border-box;
			box-shadow: none;
		}
		body {
			background-color: ${theme.backgroundColor};
			transition: background-color 0.5s;
			margin: 0;
			display: flex;
			place-items: center;
			width: 100vw;
			min-height: 100vh;
			color: ${theme.textColor}; // this should mostly be overriden
		}
		html {
			height: 100%;
		}
		#root {
			width: 100vw;
			min-height: 100vh;
			/* margin: 0 auto; */
			/* padding: 2rem; */
			text-align: center;
			display: flex;
			flex-direction: column
			/* border: 1px solid orange; */
		}

		a {
			font-weight: 500;
			color: #646cff;
			text-decoration: inherit;
		}

		a:hover {
			color: #535bf2;
		}
	`;

	console.log()
	return (
		<Global styles={[base, theme.globals]} />
	);
};

export default GlobalStyles;
