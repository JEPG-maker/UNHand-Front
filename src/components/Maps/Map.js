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
    {posicion:{lat: 4.666,lng: -74.084}, name: '1', description: 'a', requirement:'qwe', cash: '123'},
    {posicion:{lat: 4.675,lng: -74.100}, name: '2', description: 'b', requirement:'rty', cash: '312'},
    {posicion:{lat: 4.666,lng: -74.107}, name: '3', description: 'c', requirement:'sdf', cash: '345'},
    {posicion:{lat: 4.645,lng: -74.112}, name: '4', description: 'd', requirement:'xcv', cash: '654'}
  ];

  const [info, setInfo] = useState(false)

  const center = useMemo(() => ({lat: 4.659372152302655,lng: -74.09146471557196}), []);

  const handleMouseOver = (e, posicion) => {
    //if (info === false) {
      setInfo(posicion)
      console.log(info)
    } //else setInfo(false)
      //console.log(info)
    //setInfo(posicion)
  

  

  return (
    <>
      <h2 className="bienvenida">Bienvenido</h2>
      <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
        <div>
          {
            datos.map((e) => 
            <MarkerF position={e.posicion} onClick={(evt) => handleMouseOver(evt,e.posicion)}
            > {info && (
              <InfoWindow position={e.posicion}>
                <div className="info-window">
                  <div className="info-label"><span>Nombre de la oferta: {e.name}</span></div>
                  <div className="info-label"><span>Descripción: {e.description}</span></div>
                  <div className="info-label"><span>Requisitos: {e.requirement}</span></div>
                  <div className="info-label"><span>Paga: {e.cash}</span></div>
                  <button className="info-btn">Aceptar trabajo</button>
                </div>
              </InfoWindow>
            )}
              
              
            </MarkerF>
            )
          }
        </div>
        
      </GoogleMap>
      

    </>
  );
}