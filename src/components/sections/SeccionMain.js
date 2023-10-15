import React from 'react';
//import './App.css';
import { Button } from '../Button/Button.js';
import './SeccionMain.css';


function SeccionMain() {
  return (
    <div className='hero-container'>
      <video src='/videos/Handshake_video.mp4' autoPlay loop muted />
      <h1>TE DAMOS UNA MANO</h1>
      <p>¿Qué estás esperando?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/Registro'
        >
          REGISTRARSE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          link= '/Solicitante'
        >
          SOLICITAR SERVICIO
        </Button>
      </div>
    </div>
  );
}

export default SeccionMain;
