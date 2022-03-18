import React, { useState}from 'react';
import "./App.css";
import Header from './Header';
import Addcontact from './AddContact';
import Contactlist from './ContactList';


function App() {
  const [contacts, setContacts]= useState([])
  const addContactHandler=(contact) =>{
    console.log(contact);
    setContacts([...contacts, contact]);

  }
  return (
    <div className='ui container'>
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <Contactlist  contacts={contacts}/>

    </div>
    
  );
}

export default App;
