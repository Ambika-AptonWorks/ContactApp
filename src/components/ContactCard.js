import React from 'react';
import user from '../images/user.png';

const Contactcard =(props) =>{
  const{id, name, email}=props.contact;
  return(
      <div className='item'>
        <img className='ui avatar image' src={user} alt="user"></img>
      <div className='content'>
        <div className='Header'>{name}</div>
        <div>{email}</div>
      </div>
      <i className='trash alternate outline icon'
        style={{color:'red', margintop:'7px'}}
      onClick={() => props.ClickHander(id)}
      ></i>
    </div>
  );
};
export default Contactcard;