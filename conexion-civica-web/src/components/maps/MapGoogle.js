import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { credentials } from '../../credentials/credentials';

const MapGoogle = () => {

  return (
    <LoadScript
      googleMapsApiKey={ credentials.googleMaps }
    >
      <GoogleMap
        id='mapa'
        center={{ lat: 19.43215370522607, lng: -99.13341467431162 }}
        zoom={ 14 }
      >

      </GoogleMap>
    </LoadScript>
  )
}

export default MapGoogle;