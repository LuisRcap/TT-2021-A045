import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavUser = () => {

    const { uid } = useSelector( state => state.auth );
    console.log(uid);
    
    if( !uid ) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon signin-icon icon-tabler icon-tabler-user-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#003B36" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 11h6m-3 -3v6" />
                <nav>
                    
                <Link to={'/auth/login'} >
                </Link>
            </nav>
            </svg>
            
        )
    } else {
        return (
            <nav>
                <Link to={'/auth/login'} className='signin-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#003B36" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                </Link>
            </nav>
        )
    }
}

export default NavUser;