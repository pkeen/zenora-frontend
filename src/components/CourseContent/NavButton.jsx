import React from 'react';
import { useTheme } from '@emotion/react';
import { ArrowDropDownCircle } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';

const NavButton = ({handleClick, className, children, variant}) => {

    const theme = useTheme();

    let css = {
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        textAlign: 'left',
        fontWeight: '600',
        padding: '.5rem',
        color: theme.components.navPanel.color,
        "&:hover": {
            fontWeight: '700',
            color: theme.components.navPanel.hover.color
        },
        display: 'flex',
        justifyContent: "start",
        alignItems: "center",
        cursor: "pointer"

    }

    if (variant === "module") {
        css = { 
            ...css,
            borderBottom: `1px solid ${theme.components.navPanel.color}`,
        }
    }

    return (
        <button className={className} css={css} onClick={handleClick}>
            {children}
            {variant === "module" && <ArrowDropDown fontSize="small"/>}
        </button>
    );
}

export default NavButton;
