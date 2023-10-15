import React, {useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Mapa from '../Maps/Map'

function SeccionOferta() {
  return (
    <div>
      <Mapa
        GoogleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp'
      />
    </div>
  )
}

export default SeccionOferta
