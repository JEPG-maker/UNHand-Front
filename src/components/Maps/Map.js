import { useEffect, useMemo } from "react";
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
    {lat: 4.666,lng: -74.084, name: '1'},
    {lat: 4.707,lng: -74.107, name: '2'},
    {lat: 4.666,lng: -74.107, name: '3'},
    {lat: 4.645,lng: -74.107, name: '4'}
  ];

  const center = useMemo(() => ({lat: 4.659372152302655,lng: -74.09146471557196}), []);
  

  return (
    <>
      <h2>Bienvenido</h2>
      <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
        <div>
          {
            datos.map((e) => 
            <MarkerF position={e}>
              <InfoWindow>
                <div>
                  <span>Nombre {e.name}</span>
                </div>
              </InfoWindow>
            </MarkerF>
            )
          }
        </div>
        
      </GoogleMap>
      

    </>
  );
}