import React from 'react';
import AuthForm from "../../components/AuthForm/AuthForm";

const Auth = () => {

    return (
        <div>
            <h1>Добро пожаловать на <span>ContactMe</span></h1>
            <p>Пожалуйста, авторизуйтесь</p>
            <AuthForm />
        </div>
    );
};

export default Auth;