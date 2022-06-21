import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/login/RegisterScreen';

const AuthRouter = () => {
  const logo = require.context('../assets', true);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light conexion_civica ">
        <div class="container titulo-conexion">
          <Link class="navbar-brand" to='/'>
            <img src={logo('./logoRecortadoSinFondo.png')} alt="logo" className="img-logo" />
          </Link>
        </div>
      </nav>
      <div className='auth__main'>
          <div className='auth__box-container'>
              <Routes>
                  <Route path="/login" element={ <LoginScreen /> } />
                  <Route path="/register" element={ <RegisterScreen /> } />
                  <Route path="/*" element={ <RegisterScreen /> } />
              </Routes>
          </div>
      </div>
    </>
  )
}

export default AuthRouter;