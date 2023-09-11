import React from 'react';
import { useTheme } from '@emotion/react';

const Paragraph = ({children}) => {
    const theme = useTheme();
    return (
        <p css={{
            color: theme.paragraphColor
        }}>
            {children}
        </p>
    );
}

export default Paragraph;
