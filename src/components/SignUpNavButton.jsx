import Button from './Button';
import { Link } from 'react-router-dom';

const SignUpNavButton = () => {
    return (
        <Link to='/'>
            <Button size="sm">Sign Up</Button>
        </Link>
    );
}

export default SignUpNavButton;
