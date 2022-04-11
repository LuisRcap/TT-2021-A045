import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import FormNuevoReporte from './FormNuevoReporte';

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
        
        <Link to={'/auth/login'} className='signin-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#003B36" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 11h6m-3 -3v6" />
          </svg>
        </Link>


        <button
          id="show"
          className='bg-light'
          onClick={handleShowForm}
        >
          <p>
            {
              !showMenu ? '+' : '-'
            }
          </p>
        </button>
        
    </div>
  )
}

export default HomeScreen;