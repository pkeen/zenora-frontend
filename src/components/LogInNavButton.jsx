import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const LogInNavButton = () => {

    return (
        <Link to="/login">
            <Button variant={'ghost'} size="sm">Log In</Button>
        </Link>
    );
}

export default LogInNavButton;
