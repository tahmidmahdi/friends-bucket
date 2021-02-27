import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
      
    return (
        <div>
            <h1>Friends Added: {cart.length}</h1>
        </div>
    );
};

export default Cart;