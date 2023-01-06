import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Logo"></img>
            <div>
                <a href="/order">Order</a>
                <a href="/orderreview">Order Review</a>
                <a href="/manageinventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;