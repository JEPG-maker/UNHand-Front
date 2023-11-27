import axios from "axios";

export default async function coordenadasParaDireccion(direccion){
    var key = process.env.REACT_APP_MAP_API_KEY;
    
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(direccion)}&key=${key}`);

    const data = response.data;

    const coordenadas = data.results[0].geometry.location;

    return coordenadas;
};