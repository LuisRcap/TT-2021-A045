import React from 'react';

const FormNuevoReporte = () => {
  return (
    <form id='form-reporte-nuevo' className='d-flex flex-column p-5 bg-light'>
        <input className='rounded' type="text" name="calle" placeholder='Calle' />
        <input className='mt-2 rounded' type="text" name="colonia" placeholder='Colonia' />
        <input className='mt-2 rounded' type="text" name="delegacion" placeholder='Delegación' />
        <input className='mt-2 rounded' type="text" name="descripcion" placeholder='Desc.' />
        <select className='mt-2 rounded'>
            <option disabled selected>Tipo</option>
        </select>
    </form>
  )
}

export default FormNuevoReporte;