import React from 'react';
import { useTheme } from '@emotion/react';


const CoursePanels = ({children}) => {

	const theme = useTheme();

    return (
		<div css={{
            width: '100%',
            height: '100%',
            display: 'flex',
            // border: '1px solid red', 
            justifyContent: 'space-between',
            alignItems: 'space-between',
			// border: '2px solid black'
        }}>
			{children}
		</div>
	);
}

export default CoursePanels;
