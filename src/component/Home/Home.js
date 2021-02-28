import React, { useEffect, useState } from 'react';
import './Home.css'
import userData from '../../data/data.json'
import User from '../User/User';
import Cart from '../Cart/Cart';

const Home = () => {
    const [cart, setCart] = useState([])
    const handleAddClick = (props) => {
        const newCart = [...cart, props];
        setCart(newCart); 
    }
    // console.log(cart);
    const[user, setUser] = useState([]);
    useEffect(() => {
        // console.log(userData);
        setUser(userData);

    })
    
    return (
        <div>
            <div className='home'>
                <div className='user-container'>
                    {
                        user.map(user => <User user = {user} key = {user.id} handleAddClick={handleAddClick}></User>)
                    }
                </div>
                <div className ='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
               
            </div>
            <footer className ='footer'>All rights reserved by This User.</footer>
        </div>
    );
};

export default Home;