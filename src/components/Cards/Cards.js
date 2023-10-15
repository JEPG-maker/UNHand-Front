import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Mira algunos de nuestros servicios:</h1>
      <div className='cards__containers'>
        <div className='cards__wrappers'>
            <ul className='cards__items'>
                <CardItem 
                src="images/trabajo1.jpg"
                text="Encuentra alguien para la labor que necesitas."
                label="Ofrece empleo"
                path= '/Solicitante'
                />
                <CardItem 
                src="images/trabajo2.jpg"
                text="Agenda de forma flexible la labor que buscas."
                label="A tus tiempos"
                path= '/Solicitante'
                />
                <CardItem 
                src="images/trabajo3.jpg"
                text="Genera ingresos trabajando con nosotros"
                label="Ofrece tus habilidades"
                path= '/Login'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}
export default Cards;