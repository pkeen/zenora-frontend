import React from 'react';
import { useTheme } from '@emotion/react';

const Typography = ({children, variant, className}) => {

    const theme = useTheme();

    switch (variant) {
        case 'h1':
            return (
				<h1
					className={className}
					css={{
						fontSize: theme.typography.h1.fontSize,
						fontWeight: theme.typography.h1.fontWeight,
						color: theme.typography.h1.color,
						margin: theme.typography.h1.margin,
					}}
				>
					{children}
				</h1>
			);
        case 'h2':
            return (
				<h2
					className={className}
					css={{
						fontSize: theme.typography.h2.fontSize,
                        fontWeight: theme.typography.h2.fontWeight,
						color: theme.typography.h2.color,
						margin: theme.typography.h2.margin,
					}}
				>
					{children}
				</h2>
			);
        case 'h3':
            return (
				<h3
					className={className}
					css={{
						fontSize: theme.typography.h3.fontSize,
						fontWeight: theme.typography.h3.fontWeight,
						color: theme.typography.h3.color,
						margin: theme.typography.h3.margin,
					}}
				>
					{children}
				</h3>
			);
        case 'h4':
            return (
				<h4
					className={className}
					css={{
						fontSize: theme.typography.h4.fontSize,
						fontWeight: theme.typography.h4.fontWeight,
						color: theme.typography.h4.color,
						margin: theme.typography.h4.margin,
					}}
				>
					{children}
				</h4>
			);
        case 'h5':
            return (
				<h5
					className={className}
					css={{
						fontSize: theme.typography.h5.fontSize,
						fontWeight: theme.typography.h5.fontWeight,
						color: theme.typography.h5.color,
						margin: theme.typography.h5.margin,
					}}
				>
					{children}
				</h5>
			);
        default:
            return (
				<p
					css={{
						fontSize: theme.typography.p.fontSize,
						color: theme.typography.p.color,
					}}
				>
					{children}
				</p>
			);
            
            }
    }
    // return (
    //     <div>
            
    //     </div>
    // );


export default Typography;
