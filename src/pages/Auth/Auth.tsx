import React from 'react';
import AuthForm from "../../components/AuthForm/AuthForm";
import Typography from "@mui/material/Typography";

const Auth = () => {

    return (
        <div>
            <Typography variant="h4" component="div" gutterBottom>
                Welcome to <span>ContactMe</span>
            </Typography>
            <p>Please login</p>
            <AuthForm />
        </div>
    );
};

export default Auth;