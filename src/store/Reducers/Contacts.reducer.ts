import {ContactsAction, ContactsActionTypes, IContactsState} from "../../types/Contacts.types";

const initialState: IContactsState = {
    contacts: [],
    loading: false,
    error: null
}

export const ContactsReducer = (state: IContactsState = initialState, action: ContactsAction): IContactsState => {
    switch (action.type) {
        case ContactsActionTypes.FETCH_CONTACTS:
            return {...state, loading: true, error: null, contacts: []}
        case ContactsActionTypes.CONTACTS_ERROR:
            return {...state, loading: false, error: action.payload, contacts: []}
        case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, error: null, contacts: action.payload}
        case ContactsActionTypes.DELETE_CONTACT:
            return {...state, loading: false, error: null, contacts: state.contacts.filter(el => el.id !== action.payload)}
        default:
            return state
    }
}
