import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MisReportesScreen from '../components/misReportes/MisReportesScreen';
import PerfilScreen from '../components/perfil/PerfilScreen';

export const UserRoutes = () => {
  return (
    <div className='user__main'>
        <div className='user__box-container'>
            <Routes>
                <Route path="/mis-reportes" element={ <MisReportesScreen /> } />
                <Route path="/mi-perfil" element={ <PerfilScreen /> } />
                <Route path="/*" element={ <MisReportesScreen /> } />
            </Routes>
        </div>
    </div>
  )
}

export default UserRoutes;