import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    const toggleMobileMenu = () =>{
        setShowMobileMenu(prevState => !prevState);
    };
    const closeMobileMenu = () =>{
        
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
                <li><a href='#about'>About Me</a></li>
                <li><a href='#projects'>My Projects</a></li>
                <li><a href='#contact'>Contact Me</a></li>
            </ul>     
        </nav>
  )
}

export default Header
