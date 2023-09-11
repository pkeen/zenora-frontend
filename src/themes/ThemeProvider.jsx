import React, { useState, useContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import ThemeContext from "./ThemeContext";
import lightTheme from "./light-theme";
import darkTheme from "./dark-theme";

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const currentTheme = theme === "light" ? lightTheme : darkTheme;

    console.log(currentTheme)

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<EmotionThemeProvider theme={currentTheme}>
                <GlobalStyles theme={currentTheme}/> 
                {children}
			</EmotionThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
