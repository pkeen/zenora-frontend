import React, {useContext} from 'react';
import ThemeContext from '../../themes/ThemeContext';

import { DarkMode } from "@mui/icons-material";
import { LightMode } from '@mui/icons-material';

const ThemeSelector = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    
    return (
		<div>
			<button onClick={toggleTheme} style={{ fontSize: "2rem" }}>
				{theme === "light" ? <DarkMode /> : <LightMode />}
			</button>
		</div>
	);
}

export default ThemeSelector;
