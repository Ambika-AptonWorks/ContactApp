import React, { useState, useEffect}from 'react';
import { uuid } from 'uuidv4';
import "./App.css";
import Header from './Header';
import Addcontact from './AddContact';
import Contactlist from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts]= useState([])
  const addContactHandler=(contact) =>{
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contacts}]);
  }
  const removeContactHandler=(id)=>{
    const newContactlist=contacts.filter((contact) =>{
            return contact.id !==id;
    });
    setContacts(newContactlist)
  };
  useEffect(() =>{
    const retrieveContacts= JSON. parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[]);
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className='ui container'>
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <Contactlist  contacts={contacts} getContactId={removeContactHandler}/>

    </div>
    
  );
}

export default App;
