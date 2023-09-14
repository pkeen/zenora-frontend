import Button from './Button';
import { Link } from 'react-router-dom';

const SignUpNavButton = ({className}) => {
    return (
        <Link to='/'>
            <Button size="sm" className={className}>Sign Up</Button>
        </Link>
    );
}

export default SignUpNavButton;
