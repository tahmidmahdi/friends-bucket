import React from 'react';
import CartData from '../CartData/CartData';


const Cart = (props) => {
    const cart = props.cart;
    console.log('aaaaa',cart);
    let newSal = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        newSal = newSal + element.salary;   
    }    
    return (
        <div>
            <h1>Friends Added: {cart.length}</h1>
            <h5>Total Annual Salary: {newSal}</h5>
          
                {
                    cart.map(user => <CartData user={user}></CartData>)
                }
            
        </div>
       
    );
};

export default Cart;