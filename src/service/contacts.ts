import {getData, postData} from "../http/fetch";
import {SERVER_URL} from "../consts/consts";
import {IContact} from "../types/Contacts.types";

export default class ContactsService {
    static async getContacts(): Promise<IContact[]> {
        return getData(`${SERVER_URL}/contacts`)
    }
}