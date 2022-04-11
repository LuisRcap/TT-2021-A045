import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';

const AuthRouter = () => {
  return (
    <div className='auth__main'>
        <div className='auth__box-container'>
            <Routes>
                <Route path="/login" element={ <LoginScreen /> } />
                <Route path="/*" element={ <LoginScreen /> } />
            </Routes>
        </div>
    </div>
  )
}

export default AuthRouter;