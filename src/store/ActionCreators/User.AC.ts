import {IUserFormData, UserAction, UserActionTypes} from "../../types/User.types";
import {Dispatch} from "react";
import AuthService from "../../service/auth";

export const auth = (data: IUserFormData) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.USER_AUTH})
            const response = await AuthService.login(data.name, data.password)
            console.log(response)
            localStorage.setItem('id', String(response.id));
            dispatch({
                type: UserActionTypes.USER_AUTH_SUCCESS,
                payload: response
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.USER_AUTH_ERROR,
                payload: 'Произошла ошибка при авторизации: ' + e
            })
        }
    }
}