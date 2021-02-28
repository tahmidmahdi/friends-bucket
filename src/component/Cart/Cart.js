import React from 'react';
import CartData from '../CartData/CartData';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);    
    return (
        <div>
            <h1>Friends Added: {cart.length}</h1>
          
                {
                    cart.map(user => <CartData user={user}></CartData>)
                }
            
        </div>
       
    );
};

export default Cart;