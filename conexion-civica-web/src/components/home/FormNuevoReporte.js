import React, { useEffect, useMemo, useState } from 'react';
import { tipoReportes } from '../../types/types';
import FileBase from 'react-file-base64';
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';
import Geocode from 'react-geocode';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import { credentials } from '../../credentials/credentials';
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyC8ZBd9fdyKUYILir6svmjXRjEp13Sx2nY");

// set response language. Defaults to english.
Geocode.setLanguage("es");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("mx");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

const FormNuevoReporte = () => {

  const {location} = useSelector( state => state );
  const [dir, setDir] = useState('')
  // Get address from latitude & longitude.
  useMemo(() => {
    Geocode.fromLatLng(location.lat, location.lng).then(
      (response) => {
        setDir( response.results[0].formatted_address );
      },
      (error) => {
        console.log(error,"error");
      }
    );
  });
  console.log(dir);  

  const [ values, handleInputChange ] = useForm({
    nombreReporte: 'Hola reporte',
    direccion: '',
    descripcion: '',
    tipoReporte: null
  });

  const filesInput = []

  const handleInputFiles = (files) => {
    let count = 0;
    files.forEach(file => {
      const { name, base64 } = file;
      filesInput.push({ name, base64 });
    });
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: credentials.googleMapsApiKey,
    libraries: ['places'],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  if (!isLoaded) {
    return <></>;
  }

  const { nombreReporte, direccion, descripcion, tipoReporte } = values;

  return (
    <form onSubmit={handleSubmit} id='form-reporte-nuevo' className='d-flex flex-column p-5 bg-light'>
        <input
          className='rounded'
          type="text"
          name="nombreReporte"
          placeholder='Nombre del reporte'
          value={nombreReporte}
          onChange={handleInputChange}
          required
        />
        <Autocomplete>
          <input
            className='mt-2 rounded'
            type="text" name="direccion"
            placeholder='Dirección'
            value={(direccion.length > 0 ) ? direccion : dir}
            onChange={handleInputChange}
            required
          />

        </Autocomplete>
        <input
          className='mt-2 rounded'
          type="text"
          name="descripcion"
          placeholder='Descripción'
          value={descripcion}
          onChange={handleInputChange}
          required
        />
        <select
          className='mt-2 rounded'
          name="tipoReporte"
          value={tipoReporte}
          onChange={handleInputChange}
        >
          <option disabled selected>Tipo</option>
          {
            tipoReportes.map((tipo, index) => {
              return <option key={index} value={tipo}>{tipo}</option>
            })
          }
        </select>
        <FileBase
          className='mt-2 rounded'
          type="file" multiple={true}
          name="archivos"
          onDone={ handleInputFiles }
        />
        <input type="submit" value="Enviar" className='mt-2 btn btn-primary' />
    </form>
  )
}

export default FormNuevoReporte;