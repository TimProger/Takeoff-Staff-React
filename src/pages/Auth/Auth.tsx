import React from 'react';
import AuthForm from "../../components/AuthForm/AuthForm";
import Typography from "@mui/material/Typography";
import {Card} from "@mui/material";

const Auth = () => {

    return (
        <Card sx={{ minWidth: 375, padding: 2 }}>
            <Typography variant="h4" component="div" style={{ textAlign: 'center' }}>
                Welcome to <span>ContactMe</span>
            </Typography>
            <p style={{ textAlign: 'center' }}>Please login</p>
            <AuthForm />
        </Card>
    );
};

export default Auth;