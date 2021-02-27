import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const User = (props) => {
    console.log(props);
    const {name, email, phone, img} = props.user;
    return (
        <div className="user">
            <h1>This is: {name}</h1>
            <img src={img} alt=""/>
            <h5>Cell: {phone}</h5>
            <p><small>Email: {email}</small></p>
        </div>
    );
};

export default User;