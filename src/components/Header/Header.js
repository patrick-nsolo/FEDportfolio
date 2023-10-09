import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className='navigation'>
        <div className='logo'>
            <a href='/'>Patrick Nsolo</a>
        </div>
        <ul className='nav-links'>
            <li><a href='#About'>About Me</a></li>
            <li><a href='#Projects'>My Projects</a></li>
            <li><a href='#Contact'>Contact Me</a></li>
        </ul>     
    </nav>
  )
}

export default Header
