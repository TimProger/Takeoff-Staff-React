import React, {useEffect} from 'react';
import {IContactsProps} from "../../types/Contacts.types";
import Card from "../../components/Card/Card";
import Typography from "@mui/material/Typography";
import './Contacts.css'

const Contacts = ({contacts, loading, error, fetchContacts}: IContactsProps) => {

    useEffect(() => {
        console.log(1)
        if(loading) return
        fetchContacts()
    }, [])

    if(loading){
        return <p>Загрузка постов</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return (
        <div className={'contacts__container'}>
            <Typography variant="h4" component="div" gutterBottom>
                Contacts
            </Typography>
            {contacts.map((el, index)=>{
                return <Card key={index} name={el.name} description={el.description} phone={el.phone} />
            })}
        </div>
    );
};

export default Contacts;