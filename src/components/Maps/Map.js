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
    {lat: 4.596595320608821,lon:-74.0745892288351,posicion:'Calle 10 # 5-51', name: 'Oferta 1', description: 'mucho', requirement:'trabajo', cash: '$123.000'},
    {lat: 4.611650435129387,lon: -74.1531957,posicion:'Cl. 40h Sur #72r', name: 'oferta 2', description: 'poco', requirement:'flojo', cash: '$312.000'},
    {lat: 4.652593554382439,lon: -74.1274449576702,posicion:'Cl 19A #72-57', name: 'oferta 3', description: 'vamos', requirement:'activo', cash: '$345.000'},
    {lat: 4.6355052499388805,lon: -74.13918982883509,posicion:'Cra 72c #7b-42', name: 'oferta 4', description: 'cerca', requirement:'pasivo', cash: '$654.000'}
  ]
  //idJobPoster,title,description,direction,cash,lat,lon


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

  const handleClick = (e, name, description, requirement, cash, posicion) => {
    setData(['Oferta: '+name, 'Descripcion: '+description, 'Requisitos: '+requirement, 'Pago: '+cash, 'Dirección: '+posicion])
    setMostrar(true)
    console.log(data)
  };

  
  

  return (
    <>
      <h2 className="bienvenida">Mapa de trabajos</h2>
      <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
        <div>
          {
            datos.map((e) =>
            <MarkerF position={{lat:e.lat,lng:e.lon}} onMouseOver={(evt) => handleMouseOver(evt,e.description)}
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