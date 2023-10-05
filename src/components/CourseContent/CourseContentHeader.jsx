import React from 'react';
import { useTheme } from '@emotion/react';

const CourseContentHeader = ({children}) => {

    const theme = useTheme();

    const css = {
        backgroundColor: theme.components.navPanel.backgroundColor,
        // height: "100px",
        padding: '1rem 0.25rem',
        borderBottom: `1px solid ${theme.components.navPanel.color}`
    }
    
    return (
        <div css={css}>
            {children}
        </div>
    );
}

export default CourseContentHeader;
