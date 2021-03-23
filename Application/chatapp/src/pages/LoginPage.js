import React from 'react';
import {useRef} from 'react';

import LoginCard from '../components/LoginCard';

const LoginPage = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    return (
        <div>
            <LoginCard />
        </div>
    );
}

export default LoginPage;