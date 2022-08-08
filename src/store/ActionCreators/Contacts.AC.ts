import {ContactsAction, ContactsActionTypes} from "../../types/Contacts.types";
import {Dispatch} from "react";
import ContactsService from "../../service/contacts";

export const fetchContacts = () => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            dispatch({type: ContactsActionTypes.FETCH_CONTACTS})
            const response = await ContactsService.getContacts()
            console.log(response)
            dispatch({
                type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
                payload: response
            })
        } catch (e) {
            dispatch({
                type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
                payload: 'Произошла ошибка при получении постов: ' + e
            })
        }
    }
}