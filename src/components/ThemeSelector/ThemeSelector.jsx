import React, {useContext} from 'react';
import ThemeContext from '../../themes/ThemeContext';
import IconButton from '../IconButton';


import { DarkMode } from "@mui/icons-material";
import { LightMode } from '@mui/icons-material';

const ThemeSelector = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    
    return (
		<div>
			<IconButton onClick={toggleTheme} style={{ fontSize: "1rem" }} variant="ghost" size={'sm'}>
				{theme === "light" ? <DarkMode /> : <LightMode />}
			</IconButton>
		</div>
	);
}

export default ThemeSelector;
