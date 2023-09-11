import { css, Global } from "@emotion/react";

const GlobalStyles = ({ theme }) => {
	return (
		<Global
			styles={css`
				:root {
					font-family: Inter, system-ui, Avenir, Helvetica, Arial,
						sans-serif;
					font-synthesis: none;
					text-rendering: optimizeLegibility;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					-webkit-text-size-adjust: 100%;
					padding: 0,
					margin: 0
				}
				,
				*,
				*::before,
				*::after {
					box-sizing: border-box;
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
				},
				#root {
					width: 100vw;
					min-height: 100vh;
					margin: 0 auto;
					/* padding: 2rem; */
					text-align: center;
				}
				,
				a {
					font-weight: 500;
					color: #646cff;
					text-decoration: inherit;
				}
				,
				a:hover {
					color: #535bf2;
				}
			`}
		/>
	);
};

export default GlobalStyles;
