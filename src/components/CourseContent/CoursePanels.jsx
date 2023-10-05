import React from 'react';
import { useTheme } from '@emotion/react';


const CoursePanels = ({left, right}) => {

	const theme = useTheme();

    return (
		<div css={{
            width: '100%',
            height: '100%',
            display: 'flex',
            // border: '1px solid red', 
            justifyContent: 'space-between',
            alignItems: 'space-between',
			border: '2px solid black'
        }}>
			<div
				css={{
					width: "300px",
					backgroundColor: theme.components.navPanel.backgroundColor,
					color: theme.components.navPanel.color
				}}
			>
				{left}
			</div>
			<div css={{
                flex: '1'
            }}>{right}</div>
		</div>
	);
}

export default CoursePanels;
