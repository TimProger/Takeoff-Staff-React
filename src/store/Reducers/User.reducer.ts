import {UserAction, UserActionTypes, IUserState} from "../../types/User.types";

const initialState: IUserState = {
    user: null,
    loading: false,
    error: null,
    isAuth: false
}

export const UserReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.USER_AUTH:
            return {...state, loading: true, error: null, isAuth: false}
        case UserActionTypes.USER_EXIT:
            return {...state, user: null, loading: false, error: null, isAuth: false}
        case UserActionTypes.USER_AUTH_ERROR:
            return {...state, loading: false, error: action.payload, user: null, isAuth: false}
        case UserActionTypes.USER_AUTH_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload, isAuth: true}
        default:
            return state
    }
}
