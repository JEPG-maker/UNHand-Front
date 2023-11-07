import React from 'react';
import './SeccionRatings.css';


function SeccionRU() {
    const userData = [
        {name:'Sebastian Molina Gonzalez', email:'1323142@asdsad.com', trabajos: 5}
    ]
    
    const trabajosData = [
        {rating:5, name: 'Oferta 1', description: 'muchooooooooo ooooooooooo ooooooo', requirement:'trabajo', cash: '123000'},
        {rating:4, name: 'Oferta 2', description: 'poco aaaaaa aaaaaaa aaa aaaaa aaa', requirement:'flojo', cash: '312000'},
        {rating:5, name: 'Oferta 3', description: 'vamos sssss ssssssss s sssssss ssss', requirement:'activo', cash: '345000'},
        {rating:3, name: 'Oferta 4', description: 'cerca zzzzzzz zzz zzz zzzzzzz', requirement:'pasivo', cash: '654000'},
        {rating:5, name: 'Oferta 5', description: 'muchoasdasdasd adsfgrga dasd fezfd', requirement:'trabajo', cash: '123000'}
    ]
  return (
    <>
        <div className='RU_user_container'>
            <div className='RU_top_user'>
            {
                userData.map((e)=>
                <div className='RU_user_wrapper'>
                    <h1 className='RU_user_name'>{e.name}</h1>
                    <div className='RU_user_datos'>
                        <div className='RU_user_data'>
                            <span>Contacto: {e.email}</span>
                        </div>
                        <div className='RU_user_data'>
                            <span>Trabajos completados: {e.trabajos}</span>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
            <div className='RU_bottom_user'>
            {
                trabajosData.map((e)=>
                <div className='RU_trab_wrapper'>
                    <div className='RU_trab_data'>
                        <span>Oferta: {e.name}</span>
                    </div>
                    <div className='RU_trab_data'>
                        <span>Rating: {e.rating}/5</span>
                    </div>
                    <div className='RU_trab_data'>
                        <span>Descripción: {e.description}</span>
                    </div>
                    <div className='RU_trab_data'>
                        <span>Paga: {e.cash}</span>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    </>
  )
}

export default SeccionRU;
