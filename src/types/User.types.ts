export interface IUser {
    id: number,
    name: string,
    password: string
}

export interface IUserState {
    user: IUser | null,
    loading: boolean,
    error: string | null,
    isAuth: boolean
}

export interface IUserFormData {
    name: string;
    password: string;
}

export enum UserActionTypes {
    USER_AUTH = 'AUTH_PROFILE',
    USER_AUTH_ERROR = 'AUTH_PROFILE_ERROR',
    USER_AUTH_SUCCESS = 'AUTH_PROFILE_SUCCESS',
    USER_EXIT='AUTH_EXIT'
}

interface IUSER_AUTH {
    type: UserActionTypes.USER_AUTH;
}

interface IUSER_AUTH_ERROR {
    type: UserActionTypes.USER_AUTH_ERROR;
    payload: string;
}

interface IUSER_AUTH_SUCCESS {
    type: UserActionTypes.USER_AUTH_SUCCESS;
    payload: IUser;
}

interface IUSER_EXIT {
    type: UserActionTypes.USER_EXIT;
}

export type UserAction = IUSER_AUTH
    | IUSER_AUTH_ERROR
    | IUSER_AUTH_SUCCESS
    | IUSER_EXIT
