import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import ThemeContext from '../../themes/ThemeContext';


const StyledLink = ({children, to}) => {
    const { theme } = useContext(ThemeContext);
    const themeObject = useTheme();
    return (
        <Link to={to} css={{
            color: (theme === 'light' ? themeObject.grey[700] : themeObject.grey[400]),
            '&:hover': {
                color: (theme === 'light' ? themeObject.grey[500] : themeObject.grey[600]),
                // textShadow: '0px -1px 2px',
            },
        }}>
            {children}
        </Link>
    );
}

export default StyledLink;
