import React, { useState } from 'react';
import FormNuevoReporte from './FormNuevoReporte';
import NavUser from './NavUser';

const HomeScreen = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleShowForm = () => {
    setShowMenu( !showMenu )
  }

  return (
    <div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30101.028264427783!2d-99.13357705313935!3d19.42844956073063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x17d810d20da6e8cf!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses-419!2smx!4v1596420530063!5m2!1ses-419!2smx"
          id="mapa"
          title='mapa-google'
          frameBorder="0"
          style={{border:0}}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0">
        </iframe>

        {
          showMenu && <FormNuevoReporte/>
        }


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