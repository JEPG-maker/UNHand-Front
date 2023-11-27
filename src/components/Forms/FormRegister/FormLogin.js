import React, {useState} from 'react'
import './Form.css';
import axios from 'axios';

var url = 'https://unhandback.onrender.com/api/v1/auth/login';

const FormLogin = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [errorUser, setErrorUser] = useState('');
    const [errorPswrd, setErrorPswrd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!usuario) {
            setErrorUser(<p className='required'>El nombre de usuario es requerido</p>)
        } else {
            setErrorUser('')
          }
        if (!password) {
            setErrorPswrd(<p className='required'>La contraseña es requerida</p>)
        } else {
            setErrorPswrd('')
        } if (errorUser === '' & errorPswrd === '') {
            console.log('inicio posting')
            axios.post(url, {
                email: usuario,
                password: password
            }).then(res => console.log('posting', res))
            .catch(err => console.log(err))
          }

    }

  return (
    <>
        <div className='form-login'>
                <form className='form'>
                    <h1>Ingresa con los datos de tu cuenta</h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input placeholder='Ingrese su correo' className='form-input' type='text' id='usuario' name='usuario' value={usuario} 
                        onChange={ (e) => setUsuario(e.target.value)}/>
                        {errorUser}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Constraseña</label>
                        <input placeholder='Ingrese su contraseña' className='form-input' type='password' id='password' name='contraseña' value={password} 
                        onChange={ (e) => setPassword(e.target.value)}/>
                        {errorPswrd}
                    </div>
                    <button className='form-input-btn' type='submit' onClick={handleSubmit}>Continuar</button>
                    <span className='form-input-login'>
                        ¿Aún no tienes una cuenta? Registrate <a href='/Registro'>aquí</a>
                    </span>
                </form>
        </div>
    </>
  );
};

export default FormLogin;
