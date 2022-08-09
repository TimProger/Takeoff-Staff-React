import React from "react"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Contacts from "./Contacts";
import useActions from "../../hooks/useActions";

function ContactsContainer() {

    const {contacts, error, loading} = useTypedSelector(state => state.contacts)

    const { fetchContacts, deleteContact } = useActions()

    return <Contacts contacts={contacts}
                    error={error}
                    loading={loading}
                    fetchContacts={fetchContacts}
                    deleteContact={deleteContact}
    />
}

export default ContactsContainer;