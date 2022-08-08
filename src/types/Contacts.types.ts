export interface IContact {
    name: string,
    description: string,
    phone: string
}

export interface IContactsState {
    contacts: IContact[] | [],
    loading: boolean,
    error: string | null
}

export enum ContactsActionTypes {
    FETCH_CONTACTS = 'FETCH_CONTACTS',
    FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
    FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
    ADD_CONTACT='ADD_CONTACT',
    UPDATE_CONTACT='UPDATE_CONTACT',
    DELETE_CONTACT='DELETE_CONTACT'
}

interface IFETCH_CONTACTS {
    type: ContactsActionTypes.FETCH_CONTACTS;
}

interface IFETCH_CONTACTS_ERROR {
    type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
    payload: string;
}

interface IFETCH_CONTACTS_SUCCESS {
    type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
    payload: IContact[];
}

interface IADD_CONTACT {
    type: ContactsActionTypes.ADD_CONTACT;
}

interface IUPDATE_CONTACT {
    type: ContactsActionTypes.UPDATE_CONTACT;
}

interface IDELETE_CONTACT {
    type: ContactsActionTypes.DELETE_CONTACT;
}

export type ContactsAction = IFETCH_CONTACTS
    | IFETCH_CONTACTS_ERROR
    | IFETCH_CONTACTS_SUCCESS
    | IADD_CONTACT
    | IUPDATE_CONTACT
    | IDELETE_CONTACT

export interface IContactsProps {
    contacts: IContact[] | [],
    loading: boolean,
    error: string | null,
    fetchContacts: () => void
}