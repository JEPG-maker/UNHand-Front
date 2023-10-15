import React, {useState} from 'react'
import './Form.css';


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
          }

        console.log("usuario:"+usuario)
        console.log('contraseña:'+ password)
    }

  return (
    <>
        <div className='form-login'>
                <form className='form'>
                    <h1>Ingresa con los datos de tu cuenta</h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Usuario</label>
                        <input placeholder='Ingrese su nombre de usuario' className='form-input' type='text' id='usuario' name='usuario' value={usuario} 
                        onChange={ (e) => setUsuario(e.target.value)}/>
                        {errorUser}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Constraseña</label>
                        <input placeholder='Ingrese su contraseña' className='form-input' type='text' id='password' name='contraseña' value={password} 
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
