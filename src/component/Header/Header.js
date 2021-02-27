import React from 'react';
import './Header.css'
import logo from '../../images/Screenshot1.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Find Friends</a>
                <a href="/list">List</a>
                <a href="/connect">Connectivity</a>
            </nav>
        </div>
    );
};

export default Header;