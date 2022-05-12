import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const NavUser = () => {

    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();

    const { uid } = useSelector( state => state.auth );

    const handleNav = () => {
        setNavState(!navState);
        console.log(navState);
    }

    const handleLogout = () => {
        dispatch( startLogout() );
        document.location.reload(true);
    }
    
    if( uid ) {
        return (
            <>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="user-icon icon icon-tabler icon-tabler-user"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#003B36"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={ handleNav }
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>

                { navState && (
                    <nav className='nav-session'>
                        { console.log(navState) }
                        <Link 
                            className='nav-link'
                            to={'/user/misReportes'}
                        >
                            Mis Reportes
                        </Link>
                        <Link
                            className='nav-link'
                            to={'/user/misReportes'}
                        >
                            Configuración de perfil
                        </Link>
                        <span
                            className='nav-link'
                            onClick={ handleLogout }
                        >
                            Cerrar sesión
                        </span>
                    </nav>
                )}
            </>


            
        )
    } else {
        return (
            <div>      
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="user-icon icon signin-icon icon-tabler icon-tabler-user-plus" 
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#003B36"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={ handleNav}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 11h6m-3 -3v6" />

                </svg>  

                { navState && (
                    <nav className='nav-session'>
                        <Link
                            className='nav-link'
                            to={'/auth/login'}
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            className='nav-link'
                            to={'/auth/register'}
                        >
                            Registrarse
                        </Link>
                    </nav>
                )}
            </div>
        )
    }
}

export default NavUser;