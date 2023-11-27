import React from 'react'
import Traer from '../Fetchs/traer';


var url = "https://jsonplaceholder.typicode.com/todos/2";


function SeccionSolicitante() {
  const {datos}  = Traer(
    url
  );
  console.log( datos , 'pagina')

  return (
    <>
      <div>
      <h1>{url}</h1>
        <ul>
          {datos && Object.entries(datos).map(([llave, valor]) => (
              <li key={llave}>{llave}: {valor}</li>
            ))
          }
        </ul>
      </div>
      
    </>
  )
}

export default SeccionSolicitante;

