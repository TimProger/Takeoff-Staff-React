import {combineReducers} from "redux";
import {UserReducer} from "./User.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
})