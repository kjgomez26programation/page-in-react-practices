import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return (
    <div className='container-navbar'>
        <div className='logo'>
            <a href="#">L I M O<span> K I N G</span></a>
        </div>
        <nav className='navbar'>
        <div className='menu-icon' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
        </div>
      <ul className={`list ${showMenu ? 'show' : ''}`}>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">FLEET</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
       
    </nav>
    
    </div>
  )
}

export default Navbar
