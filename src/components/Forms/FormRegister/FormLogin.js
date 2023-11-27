import React, {useState} from 'react'
import './Form.css';
import {useNavigate} from 'react-router-dom';

var url = 'https://unhandback.onrender.com/api/v1/auth/login';
var url2 = 'https://unhandback.onrender.com/api/v1/auth/refresh';

async function obtenerNuevoJWT(refreshToken) {
    const response = await fetch(url2, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + refreshToken
        },
        body: JSON.stringify({refreshToken})
    });
    console.log(response)
    if (!response.ok) {
        throw new Error('No se pudo obtener un nuevo JWT')
    }

    const data = await response.json();
    console.log(data)
    return data.accessToken;
}

async function handleLogin(url, email, password) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email , password})
    })
    
    if (!response.ok) {
        throw new Error('Error en la autenticación')
    }
    const data = await response.json();
    console.log(data)
    const refreshToken = data.token;

    return refreshToken;
}

const FormLogin = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [errorUser, setErrorUser] = useState('');
    const [errorPswrd, setErrorPswrd] = useState('');

    const handleSubmit = async(e) => {
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
            const token = await handleLogin(url, usuario, password);
            console.log(token)
            
            //const awt = await obtenerNuevoJWT(token)
            //console.log(awt)
        } navigate('/Socio')


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
