import React from 'react';
import '../styles/main.css';
import {useRef} from 'react';

const LoginPage = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailvalue = e.target.email.value;
        const passwordvalue = e.target.password.value;
        const passwordConfirmValue = e.target.passwordConfirm.value;
        console.log(e.target.email.value);
    }
    return (
        <div>
        <div className="card__container">
            <h1>Sign In</h1>
            <form className="input__form" onSubmit={handleSubmit}>
                <input name="email" ref={emailRef} className="form__input" type="text" placeholder="Email"/>
                <input name="password" ref={passwordRef} className="form__input" type="text" placeholder="Password"/>
                <input name="passwordConfirm" ref={passwordConfirmRef} className="form__input" type="text" placeholder="Password Confirmation"/>
                <div className="button__container">
                    <button className="form__button">Sign in</button>
                    <button className="form__button">Register</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default LoginPage;