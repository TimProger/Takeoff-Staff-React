import {combineReducers} from "redux";
import {UserReducer} from "./User.reducer";
import {ContactsReducer} from "./Contacts.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    contacts: ContactsReducer
})