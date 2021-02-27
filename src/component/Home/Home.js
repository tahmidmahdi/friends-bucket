import React, { useEffect, useState } from 'react';
import './Home.css'
import userData from '../../data/data.json'
import User from '../User/User';

const Home = () => {
    const[user, setUser] = useState([]);
    useEffect(() => {
        // console.log(userData);
        setUser(userData);

    })
    
    return (
        <div className='home'>
            <div className='user-container'>
                {
                    user.map(user => <User user = {user}></User>)
                }
            </div>
            <div className ='cart-container'>
                <h1>This will contain cart</h1>
            </div>
            
        </div>
    );
};

export default Home;