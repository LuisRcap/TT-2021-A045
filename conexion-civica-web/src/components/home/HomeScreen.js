import React, { useState } from 'react';
import MapGoogle from '../maps/MapGoogle';
import FormNuevoReporte from './FormNuevoReporte';
import Menu  from './Menu';
import NavUser from './NavUser';
import { Busqueda } from './Busqueda';
import { useLoadScript } from '@react-google-maps/api';
import { credentials } from '../../credentials/credentials';

const HomeScreen = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleShowForm = () => {
    setShowMenu( !showMenu )
  }

  const [Sidebar, setMenu] = useState(false);

  const handleShowMenu = () => {
    setMenu( !Sidebar )
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: credentials.googleMapsApiKey,
    libraries: ['places'],
  });

  return (
    <div>
        
        <Busqueda/>

        { isLoaded && <MapGoogle />}

        {
          showMenu && <FormNuevoReporte/>
        }

        {
          Sidebar && <Menu/>
        }

        <button
          id="show"
          className='signin-menu'
          onClick={handleShowMenu}
        >
          {
            !Sidebar ? 
            (
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            ) : 
            (
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-minimize" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <polyline points="5 9 9 9 9 5" />
              <line x1="3" y1="3" x2="9" y2="9" />
              <polyline points="5 15 9 15 9 19" />
              <line x1="3" y1="21" x2="9" y2="15" />
              <polyline points="19 9 15 9 15 5" />
              <line x1="15" y1="9" x2="21" y2="3" />
              <polyline points="19 15 15 15 15 19" />
              <line x1="15" y1="15" x2="21" y2="21" />
            </svg>
            )

          }
        </button>
        


        {/* Menú desplegable para el ícono de usuario */}

        <NavUser />


        <button
          id="show"
          className='bg-light'
          onClick={handleShowForm}
        >
          {/* Si se muestra el form es un icono de menos de lo contrario es un archivo con signo más */}
          <p>
            {
              !showMenu ?
                (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#003B36" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                  </svg>
                ) :
                (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#003B36" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )
            }
          </p>
        </button>
        
    </div>
  )
}

export default HomeScreen;