import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import './Map.css';
import direccionParaCoordenadas from '../Fetchs/obtDireccion';
import coordenadasParaDireccion from "../Fetchs/obtCoords";


export default function Ofertass() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const datos = [
    {posicion:'Calle 10 # 5-51', name: 'Oferta 1', description: 'mucho', requirement:'trabajo', cash: '$123.000'},
    {posicion:'Cl. 40h Sur #72r', name: 'oferta 2', description: 'poco', requirement:'flojo', cash: '$312.000'},
    {posicion:'Cl 19A #72-57', name: 'oferta 3', description: 'vamos', requirement:'activo', cash: '$345.000'},
    {posicion:'Cra 72c #7b-42', name: 'oferta 4', description: 'cerca', requirement:'pasivo', cash: '$654.000'}
  ]
  
  function coords() {
    datos.map(async(direccion) => {
      //console.log(direccion.posicion)
      const coords = await coordenadasParaDireccion(direccion.posicion);
      //console.log(direccion.posicion , coords)

      direccion.posicion = coords;
      return direccion;
    }
    )
    //console.log(datos)
  };
  
  
  async function cords(datos) {
    const newData = await Promise.all(
      datos.map(async(dir) => {
        const newPos = {...dir};
        //console.log(newPos.posicion)
        var coords = await coordenadasParaDireccion(newPos.posicion);
        coords && console.log(coords)
        newPos.posicion = coords;
        //console.log(newPos)
    
        return newPos;
      }))
  }

  console.log(cords(datos))
  //console.log(newData)

  const [nombre, setNombre] = useState(false)
  const [data, setData] = useState([])
  const [mostrar, setMostrar] = useState(false)

  const center = useMemo(() => ({lat: 4.659372152302655,lng: -74.09146471557196}), []);

  const handleMouseOver = (e, name) => {
    setNombre(name)
    console.log(name)
  };

  const handleMouseExit = e => {
    setNombre(false)
  };

  const handleClick = async(e, name, description, requirement, cash, posicion) => {
    var direccion = await direccionParaCoordenadas(posicion);
    direccion && console.log(direccion);
    setData(['Oferta: '+name, 'Descripcion: '+description, 'Requisitos: '+requirement, 'Pago: '+cash, 'Dirección: '+direccion])
    setMostrar(true)
    console.log(data)
  };

  
  

  return (
    <>
      <h2 className="bienvenida">Mapa de trabajos</h2>
      <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
        <div>
          {
            datos.map((e) => 
            <MarkerF position={e.posicion} onMouseOver={(evt) => handleMouseOver(evt,e.description)}
            onMouseOut={handleMouseExit}
            onClick={(evt) => handleClick(evt, e.name, e.description, e.requirement, e.cash, e.posicion)}
            > {nombre  && (
              <InfoWindow>
                <div className="info-window">
                  <div className="infow-label"><span>Oferta: {e.name}</span></div>
                </div>
              </InfoWindow>
            )}
            </MarkerF>
            )
          }
        </div>
      </GoogleMap>
      <div className="info-container">
      {
        data.map((d) =>
        <div>
        {mostrar && (
          <div className="info-label">
            <div>
              <span>{d}</span>
            </div>
          </div>
        )}
        </div>
        )
      }
      <button className="info-btn">Aplicar</button>
      </div>
    </>
  );
}