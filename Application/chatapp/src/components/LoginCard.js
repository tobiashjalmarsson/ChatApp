import React from 'react';
import '../styles/main.css';

const LoginCard = () => {
    return (
        <div className="card__container">
            <h1>This is from the LoginCard</h1>
            <form className="input__form">
                <input className="form__input" type="text" placeholder="Email"/>
                <input className="form__input" type="text" placeholder="Password"/>
                <input className="form__input" type="text" placeholder="Password Confirmation"/>
                <button className="form__button">Sign in</button>
            </form>
        </div>
    );
}

export default LoginCard;