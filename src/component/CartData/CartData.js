import React from 'react';
import './CartData.css'

const CartData = (props) => {
    console.log(props);
    const {name, email, phone, img} = props.user;
    return (
        <div className="cart-data">
            <h3>{name}</h3>
            <img src={img} alt=""/>
            <h5>{phone}</h5>
            <p><small>{email}</small></p>
        </div>
    );
};

export default CartData;