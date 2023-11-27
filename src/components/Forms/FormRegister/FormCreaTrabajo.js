import React, {useState} from 'react'
import './Form.css'
import axios from 'axios';

var url = 'https://jsonplaceholder.typicode.com/posts';

const FormCreaTrabajo = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [habilityList, setHabilityList] = useState('');
    const [direction, setDirection] = useState('');
    const [cash, setCash] = useState('')

    //const [post, setPost] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('inicio posting')
        axios.post(url, {
            title: title,
            description: description,
            habilityList: habilityList,
            Direction: direction,
            cash: cash,
            Status: 'open'
        }).then(res => console.log('posting', res))
        .catch(err => console.log(err))
    };

  return (
    <div className='form-registro'>
      <form className='form'>
                    <h1>Crea un trabajo</h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Titulo de la oferta</label>
                        <input placeholder='Nombre de la oferta' className='form-input' type='text' id='title' name='title' value={title} 
                        onChange={ (e) => setTitle(e.target.value)}/>
                        
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Descripción</label>
                        <input placeholder='Descripción de la oferta' className='form-input' type='text' id='desciption' name='description' value={description} 
                        onChange={ (e) => setDescription(e.target.value)}/>
                        
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Requisitos de la oferta</label>
                        <input placeholder='Habilidades/Conocimientos requeridos' className='form-input' type='text' id='habilityList' name='habilityList' value={habilityList} 
                        onChange={ (e) => setHabilityList(e.target.value)}/>
                        
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Dirección</label>
                        <input placeholder='Ingrese la dirección del lugar' className='form-input' type='text' id='direction' name='direction' value={direction} 
                        onChange={ (e) => setDirection(e.target.value)}/>
                        
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Pago por el trabajo</label>
                        <input placeholder='Ingrese la cantidad del pago' className='form-input' type='number' id='cash' name='cash' value={cash} 
                        onChange={ (e) => setCash(e.target.value)}/>
                        
                    </div>
                    <button className='form-input-btn' type='submit' onClick={handleSubmit}>Crear</button>
                </form>
    </div>
  )
}

export default FormCreaTrabajo;