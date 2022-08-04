import {getData, postData} from "../http/fetch";
import {SERVER_URL} from "../consts/consts";
import {IAuthResponse} from "../types/HTTP.types";
import {IUser} from "../types/User.types";

export default class AuthService {
    static async login(name: string, password: string): Promise<IUser> {
        return postData(`${SERVER_URL}/user`, {name, password})
    }

    static async logout(): Promise<void> {
        return postData(`${SERVER_URL}/auth/logout`)
    }

    static async getUserByToken(id: number): Promise<IUser>{
        return getData(`${SERVER_URL}/user/${id}`)
    }
}