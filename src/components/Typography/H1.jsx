import React from 'react';
import ThemeContext from '../../themes/ThemeContext';
import { useTheme } from '@emotion/react';

const H1 = ({children}) => {
    const theme = useTheme();
    return (
        <h1 css={{
            color: theme.textColor
        }}>
            {children}
        </h1>
    );
}

export default H1;
