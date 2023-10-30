import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import './Map.css';


export default function Ofertass() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const datos = [
    {posicion:{lat: 4.666,lng: -74.084}, name: 'Oferta 1', description: 'mucho', requirement:'trabajo', cash: '123000'},
    {posicion:{lat: 4.675,lng: -74.100}, name: 'oferta 2', description: 'poco', requirement:'flojo', cash: '312000'},
    {posicion:{lat: 4.666,lng: -74.107}, name: 'oferta 3', description: 'vamos', requirement:'activo', cash: '345000'},
    {posicion:{lat: 4.645,lng: -74.112}, name: 'oferta 4', description: 'cerca', requirement:'pasivo', cash: '654000'}
  ];

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

  const handleClick = (e, name, description, requirement, cash) => {
    setData(['Oferta: '+name, 'Descripcion: '+description, 'Requisitos: '+requirement, 'Pago: '+cash])
    setMostrar(true)
    console.log(data)
  };

  
  

  return (
    <>
      <h2 className="bienvenida">Bienvenido</h2>
      <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
        <div>
          {
            datos.map((e) => 
            <MarkerF position={e.posicion} onMouseOver={(evt) => handleMouseOver(evt,e.description)}
            onMouseOut={handleMouseExit}
            onClick={(evt) => handleClick(evt, e.name, e.description, e.requirement, e.cash)}
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
      <button className="info-btn">Aceptar</button>
      </div>
    </>
  );
}