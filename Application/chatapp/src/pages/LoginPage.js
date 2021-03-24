import React from 'react';
import '../styles/main.css';
import {useRef, useState} from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthProvider } from '../context/AuthContext';


const LoginPage = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    return (
        <AuthProvider>
        <div>
        <div className="card__container">
            <h1>Sign In</h1>
            {error && <h2>{error}</h2>}
            {currentUser.email}
            <form className="input__form" onSubmit={handleSubmit}>
                <input name="email" ref={emailRef} className="form__input" type="text" placeholder="Email"/>
                <input name="password" ref={passwordRef} className="form__input" type="text" placeholder="Password"/>
                <input name="passwordConfirm" ref={passwordConfirmRef} className="form__input" type="text" placeholder="Password Confirmation"/>
                <div className="button__container">
                    <button className="form__button">Sign in</button>
                    <button className="form__button" disabled={loading}>Register</button>
                </div>
            </form>
        </div>
        </div>
        </AuthProvider>
    );
}

export default LoginPage;