import "./style.css";
import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts,setContacts]=useState([
        {fullname:"Sevgin Serbest",phone_number:"656564"},
        {fullname:"Ahmet Karaca",phone_number:"12345"}
    ]);

    useEffect(() => {
        console.log(contacts);
        
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;
