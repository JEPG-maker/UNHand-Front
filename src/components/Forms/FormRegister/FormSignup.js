import React, { useState } from 'react'
import './Form.css'

const FormSignup = () => {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [tipo, setTipo] = useState('')

  const [errorUser, setErrorUser] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPswrd, setErrorPswrd] = useState('');
  const [errorPswrd2, setErrorPswrd2] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault()

      if (!usuario) {
          setErrorUser(<p className='required'>El nombre de usuario es requerido</p>)
      } else {
        setErrorUser('')
      }
      if(!email) {
          setErrorEmail(<p className='required'>El email es requerido</p>)
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          setErrorEmail(<p className='required'>El email es inválido</p>)
      } else {
        setErrorEmail('')
      }
      if (!password) {
          setErrorPswrd(<p className='required'>La contraseña es requerida</p>)
      } else {
        setErrorPswrd('')
      }
      if(!password2) {
        setErrorPswrd2(<p className='required'>La contraseña es requerida</p>)
    } else if (password2 !== password) {
      setErrorPswrd2(<p className='required'>Las contraseñas no coinciden</p>)
    } else {
        setErrorPswrd2('')
      }

      console.log("usuario:"+usuario)
      console.log('email:'+email)
      console.log('contraseña:'+ password)
      console.log('Tipo de usuario:'+tipo)
  }

  return (
    <div className='form-registro'>
      <form className='form'>
                    <h1>Registrate gratis</h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Usuario</label>
                        <input placeholder='Ingrese su nombre de usuario' className='form-input' type='text' id='usuario' name='usuario' value={usuario} 
                        onChange={ (e) => setUsuario(e.target.value)}/>
                        {errorUser}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input placeholder='Ingrese su email' className='form-input' type='email' id='email' name='email' value={email} 
                        onChange={ (e) => setEmail(e.target.value)}/>
                        {errorEmail}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Contraseña</label>
                        <input placeholder='Ingrese su contraseña' className='form-input' type='text' id='password' name='contraseña' value={password} 
                        onChange={ (e) => setPassword(e.target.value)}/>
                        {errorPswrd}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Confirmar Contraseña</label>
                        <input placeholder='Ingrese su contraseña' className='form-input' type='text' id='password2' name='contraseña2' value={password2} 
                        onChange={ (e) => setPassword2(e.target.value)}/>
                        {errorPswrd2}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Seleccionar el tipo de usuario</label>
                        <select className='form-input' onChange={ (e) => setTipo(e.target.value)}>
                            <option value='Socio'>Socio</option>
                            <option value='Prestador'>Prestador de servicio</option>
                        </select>
                    </div>
                    <button className='form-input-btn' type='submit' onClick={handleSubmit}>Continuar</button>
                    <span className='form-input-login'>
                        ¿Ya tienes una cuenta? Inicia sesión <a href='/Login'>aquí</a>
                    </span>
                </form>
    </div>
  )
}

export default FormSignup;