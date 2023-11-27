import axios from "axios";

export default async function direccionParaCoordenadas(coordenadas){
    var lat = coordenadas.lat;
    var lng = coordenadas.lng;

    var key = process.env.REACT_APP_MAP_API_KEY;

    var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;    
    
    const response = await axios.get(url);

    const data = response.data;

    const direccion = data.results[0].formatted_address;
    console.log(direccion)

    return direccion;
};