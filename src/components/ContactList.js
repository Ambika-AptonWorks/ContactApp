import React from 'react';
import Contactcard from './ContactCard';

 const Contactlist = (props)=> {
   console.log(props);

      const deleteContactHandler=(id) =>{
         props.getContactId(id);
      };
   const renderContactlist =props.contacts.map((contact)=>{
     return(
      <Contactcard contact={contact} ClickHander={deleteContactHandler} key={contact.id}></Contactcard>
     );
   })
   return(
     <div className='ui called list'>{renderContactlist}</div>

   );

 }
 export default Contactlist;