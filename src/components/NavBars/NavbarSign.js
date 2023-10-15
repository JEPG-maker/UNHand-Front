import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarSign.css';

function NavbarSign() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            UNHand
            <i class="fa-regular fa-handshake"/>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavbarSign;