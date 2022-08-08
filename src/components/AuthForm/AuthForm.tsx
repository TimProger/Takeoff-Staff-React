import React, {useState} from 'react';
import './AuthForm.css';
import {Button, TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import useActions from "../../hooks/useActions";
import {IUserFormData} from "../../types/User.types";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AuthForm = () => {

    const { auth } = useActions()

    const { register, handleSubmit } = useForm<IUserFormData>();

    return (
        <form onSubmit={handleSubmit((data) => {
            auth(data)
        })}>
            <TextField {...register("name")} name={'name'} label="Логин" variant="standard" />
            <TextField {...register("password")} name={'password'} label="Пароль" variant="standard" type={'password'} />
            <Button type={'submit'} variant="contained">Авторизация</Button>
        </form>
    );
};

export default AuthForm;