import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button.js'
import { Link } from 'react-router-dom';
import './NavbarMain.css';

function NavbarMain() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            UNHand
            <i class="fa-regular fa-handshake"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/Solicitante'
                className='nav-links'
                onClick={closeMobileMenu}>
                Solicitar Servicios
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Iniciar Sesión
              </Link>
            </li>

            <li>
              <Link
                to='/Registro'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Registrarse
              </Link>
            </li>
          </ul>
          
          {button && <Button buttonStyle='btn--outline' link='/Registro'>Registrarse</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavbarMain;