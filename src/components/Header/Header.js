import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    const toggleMobileMenu = () =>{
        setShowMobileMenu(!showMobileMenu);
    };
    
    return (
        <nav className={`navigation ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
            <div className='logo'>
                <a href='/'>Patrick Nsolo</a>
            </div>
            <div className={`menu-icon ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#projects'>My Projects</a></li>
                <li><a href='#contact'>Contact Me</a></li>
            </ul>     
        </nav>
  )
}

export default Header
