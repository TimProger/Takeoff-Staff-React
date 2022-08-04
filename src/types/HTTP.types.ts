import {IUser} from "./User.types";

export interface IAuthResponse {
    user: IUser;
}

interface IContactResponse{
    contacts: any[];
}