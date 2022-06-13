import React, { useCallback, useMemo, useRef, useState } from 'react';
import { 
  GoogleMap,
  Marker,
  MarkerClusterer,
  Circle,
  LoadScript
} from '@react-google-maps/api';
import { color } from './designTokens';

const marcadores = require.context('../../assets', true);

const MapGoogle = () => {

  

  const [coords, setCoords] = useState({})
  const mapRef = useRef();

  useMemo(() => {
    navigator.geolocation.getCurrentPosition( position => {
      setCoords( position.coords )
  
    });
  }, []);
  
  const options = useMemo(() => ({
    mapId: 'a6730dd94df45156',
    disableDefaultUI: true,
    clickableIcons: true,
    zoomControl: true
  }), []);

  const onLoad = useCallback( map => ( mapRef.current = map ), []);
  
  const { latitude, longitude } = coords;
  const center = { lat: latitude, lng: longitude };


  const reportes = useMemo(() => generateReports(center), [center]);
  console.log(reportes);

  return (
    <div>
      <GoogleMap
        id='mapa'
        center={ center }
        zoom={ 14 }
        options={ options }
        onLoad={ onLoad }
      >

        <Marker
          position={{ lat: center.lat, lng: center.lng }}
          icon={ marcadores('./usuario-ubicacion.png') }
        />

        { reportes.map( reporte => <Marker
            key={ reporte.lat + reporte.lng }
            position={ reporte }
            icon={ reporte.icon }
          /> )}

        <Circle
          center={ center }
          radius={ 1000 }
          options={ color.closeOptions }
        />
      </GoogleMap>
    </div>
  )
}

const generateReports = ( position ) => {
  const reportes = [];
  let reportStatus = '';
  for( let i = 0; i < 100; i++ ) {
    switch ( i % 3 ) {
      case 0:
        reportStatus = 'logo-reporte-verde.png';
        break;
      case 1:
        reportStatus = 'logo-reporte-amarillo.png';
        break;
      case 2:
        reportStatus = 'logo-reporte-rojo.png';
        break;
      default:
        reportStatus = 'logo-reporte-rojo.png';
    }

    const direction = Math.random() < 0.5 ? -8 : 8;
    reportes.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
      icon: ( i%4 === 0 ) ? marcadores(`./logo-reporte-rojo.png`) : marcadores(`./${reportStatus}`)
    })
  }
  return reportes;
}

export default MapGoogle;