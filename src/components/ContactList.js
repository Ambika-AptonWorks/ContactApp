import React from 'react';
import Contactcard from './ContactCard';
 const Contactlist = (props)=> {
  
   console.log(props);
   const renderContactlist =props.contacts.map((contact)=>{
     return(
      <Contactcard contact={contact}></Contactcard>
     );
   })
   return(
     <div className='ui called list'>{renderContactlist}</div>

   );

 }
 export default Contactlist;