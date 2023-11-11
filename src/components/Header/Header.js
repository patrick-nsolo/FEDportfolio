import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    const toggleMobileMenu = () =>{
        setShowMobileMenu(prevState => !prevState);
    };
    const closeMobileMenu = () =>{
        setShowMobileMenu(false);
    }
    
    return (
        <nav className={`navigation ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
            <div className='logo'>
                <a href='/'>Patrick Nsolo</a>
            </div>
            <div 
                className={`menu-icon ${showMobileMenu ? 'active' : ''}`} 
                onClick={toggleMobileMenu}
                aria-expanded={showMobileMenu}
                aria-controls='mobile-menu'
                >
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${showMobileMenu ? 'active' : ''}`}>
                <li><a href='#about' onClick={closeMobileMenu}>About Me</a></li>
                <li><a href='#projects' onClick={closeMobileMenu}>My Projects</a></li>
                <li><a href='#contact' onClick={closeMobileMenu}>Contact Me</a></li>
            </ul>     
        </nav>
  )
}

export default Header
