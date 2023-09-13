import React from 'react';
import { useTheme } from '@emotion/react';

const CourseTag = ({children}) => {

    const theme = useTheme();

    return (
        <div css={{
            color: theme.colors.grey[500],
            padding: '.25rem .3rem',
            border: '1px solid',
            borderColor: theme.colors.grey[500],
            marginRight: '.5rem',
            borderRadius: '.5rem',
            fontSize: '.75rem'
        }}>
            {children}
        </div>
    );
}

export default CourseTag;
