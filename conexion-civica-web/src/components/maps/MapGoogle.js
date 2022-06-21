import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { 
  GoogleMap,
  Marker,
  MarkerClusterer,
  Circle,
  LoadScript
} from '@react-google-maps/api';
import { color } from './designTokens';
import { useDispatch } from 'react-redux';
import { updateCoords } from '../../store/location/locationSlice';

const marcadores = require.context('../../assets', true);

const MapGoogle = () => {

  const dispatch = useDispatch();

  const [coords, setCoords] = useState({});
  

  /* const updateLocation = () => {
    navigator.geolocation.getCurrentPosition( position => {
      const { latitude, longitude } = position.coords;
      const center = { lat: latitude, lng: longitude };
      dispatch( updateCoords( center ) );
    });
  } */

  useMemo(() => {
    navigator.geolocation.getCurrentPosition( position => {
      setCoords( position.coords )
    });
    /* setInterval( updateLocation, 5000, ); */
  }, []);

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  
  const options = useMemo(() => ({
    mapId: 'a6730dd94df45156',
    disableDefaultUI: true,
    clickableIcons: true,
    zoomControl: true
  }), []);

  /* const onLoad = useCallback( map => ( mapRef.current = map ), []); */
  
  const { latitude, longitude } = coords;
  const center = { lat: latitude, lng: longitude };
  dispatch( updateCoords( center ) );


  const reportes = useMemo(() => generateReports(center), [center]);

  return (
    <div>
      <GoogleMap
        id='mapa'
        center={ center }
        zoom={ 14 }
        options={ options }
        onLoad={ map => setMap(map) }
      >

        <Marker
          position={{ lat: center.lat, lng: center.lng }}
          icon={ marcadores('./usuario-ubicacion.png') }
        />

        { reportes.map( (reporte, index) => <Marker
            key={ index }
            position={ reporte }
            icon={ reporte.icon }
          /> )}

        <Circle
          center={ center }
          radius={ 1000 }
          options={ color.closeOptions }
        />
      </GoogleMap>
      <button
          id="centrar-mapa"
          className='bg-light'
          onClick={ () => map.panTo(center) }
        >
          {/* Si se muestra el form es un icono de menos de lo contrario es un archivo con signo más */}
          <p>
            
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-current-location" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5856D6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="8" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="2" y1="12" x2="4" y2="12" />
          </svg>
                
          </p>
        </button>
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