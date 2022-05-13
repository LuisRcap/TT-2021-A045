import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { credentials } from '../../credentials/credentials';

const MapGoogle = () => {

  const [coords, setCoords] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( position => {
      setCoords( position.coords )
  
    });
  }, [navigator.geolocation]);
  
  const { latitude, longitude } = coords;
  


  return (
    <LoadScript
      googleMapsApiKey={ credentials.googleMaps }
    >
      <GoogleMap
        id='mapa'
        center={{ lat: latitude, lng: longitude }}
        zoom={ 14 }
      >

      </GoogleMap>
    </LoadScript>
  )
}

export default MapGoogle;