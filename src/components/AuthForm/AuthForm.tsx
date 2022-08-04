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
    const { user, loading } = useTypedSelector(state => state.user)
    return (
        <form onSubmit={handleSubmit((data) => {
            auth(data)
        })}>
            <TextField {...register("name")} name={'name'} label="Логин" variant="standard" />
            <TextField {...register("password")} name={'password'} label="Пароль" variant="standard" type={'password'} />
            <Button type={'submit'} variant="contained">Авторизация</Button>
            {loading ? <p>Идёт загрузка</p> : user ? <p>{user.name}</p> : null}
        </form>
    );
};

export default AuthForm;