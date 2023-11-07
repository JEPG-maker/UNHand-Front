import React from 'react';
import './SeccionHistorial.css';




function SeccionHistorial() {
    const datos = [
        {name: 'Oferta 1', description: 'muchooooooooo ooooooooooo ooooooo', requirement:'trabajo', cash: '123000'},
        {name: 'oferta 2', description: 'poco aaaaaa aaaaaaa aaa aaaaa aaa', requirement:'flojo', cash: '312000'},
        {name: 'oferta 3', description: 'vamos sssss ssssssss s sssssss ssss', requirement:'activo', cash: '345000'},
        {name: 'oferta 4', description: 'cerca zzzzzzz zzz zzz zzzzzzz', requirement:'pasivo', cash: '654000'},
        {name: 'Oferta 5', description: 'muchooooooooo ooooooooooo ooooooo', requirement:'trabajo', cash: '123000'},
        {name: 'oferta 2', description: 'poco aaaaaa aaaaaaa aaa aaaaa aaa', requirement:'flojo', cash: '312000'},
        {name: 'oferta 3', description: 'vamos sssss ssssssss s sssssss ssss', requirement:'activo', cash: '345000'},
        {name: 'oferta 4', description: 'cerca zzzzzzz zzz zzz zzzzzzz', requirement:'pasivo', cash: '654000'},
        {name: 'Oferta 1', description: 'muchooooooooo ooooooooooo ooooooo', requirement:'trabajo', cash: '123000'},
        {name: 'oferta 2', description: 'poco aaaaaa aaaaaaa aaa aaaaa aaa', requirement:'flojo', cash: '312000'},
        {name: 'oferta 3', description: 'vamos sssss ssssssss s sssssss ssss', requirement:'activo', cash: '345000'},
        {name: 'oferta 4', description: 'cerca zzzzzzz zzz zzz zzzzzzz', requirement:'pasivo', cash: '654000'},
        {name: 'Oferta 1', description: 'muchooooooooo ooooooooooo ooooooo', requirement:'trabajo', cash: '123000'},
        {name: 'oferta 2', description: 'poco aaaaaa aaaaaaa aaa aaaaa aaa', requirement:'flojo', cash: '312000'},
        {name: 'oferta 3', description: 'vamos sssss ssssssss s sssssss ssss', requirement:'activo', cash: '345000'},
        {name: 'oferta 4', description: 'cerca zzzzzzz zzz zzz zzzzzzz', requirement:'pasivo', cash: '654000'},
      ];

  return (
    <>
        <h1 className='titulo_tarjeta'>Historial de Trabajos:</h1>
        <div className='tarjeta'>
            <div className='container_tarjeta'>
                <div className='wrapper_tarjeta'>
                {
                datos.map((e)=> 
                <div className='items_tarjeta'>
                    <div className='item_tarjeta'>
                        <span>Oferta: {e.name}</span>
                    </div>
                    <div className='item_tarjeta'>
                        <span>Descripción: {e.description}</span>
                    </div>
                    <div className='item_tarjeta'>
                        <span>Requisitos: {e.requirement}</span>
                    </div>
                    <div className='item_tarjeta'>
                        <span>Paga: {e.cash}</span>
                    </div>
                </div>
                )
                }
                </div>
            </div>
            
        </div>
    </>
  )
}

export default SeccionHistorial;
