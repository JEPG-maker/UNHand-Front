import { useEffect, useState } from "react";
import axios from 'axios';

export default function Traer(url) {
    const [datos, setDatos] = useState();
    
    useEffect(()=>{
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setDatos(res.data)
            });
        }, []);
    
    console.log(datos , 'traidos')

    return {datos};

}