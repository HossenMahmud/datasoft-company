import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            {/* Navigation and logo part */}
            <div className='manu-part'>
                <img src={logo} alt="" />
                <nav className='nav-item'>
                    <a href="/Home">Home</a>
                    <a href="/About">About Us</a>
                    <a href="/Gallery">Gallery</a>
                    <a href="/Contact">Contact</a>
                </nav>
            </div>
            {/* Heading Title part */}
            <h1>Make A DataSoft Company</h1>
            <p>The software development industry is both big and strong.</p>
            <h2>Total Budget: 10 Million</h2>
        </div>
    );
};

export default Header;