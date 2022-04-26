import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/login/RegisterScreen';

const AuthRouter = () => {
  return (
    <div className='auth__main'>
        <div className='auth__box-container'>
            <Routes>
                <Route path="/login" element={ <LoginScreen /> } />
                <Route path="/register" element={ <RegisterScreen /> } />
                <Route path="/*" element={ <RegisterScreen /> } />
            </Routes>
        </div>
    </div>
  )
}

export default AuthRouter;