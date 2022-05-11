import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/login/RegisterScreen';

const AuthRouter = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light conexion_civica ">
        <div class="container titulo-conexion">
          <a class="navbar-brand" href="#">
            <h1>Conexion Civica</h1>
          </a>
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