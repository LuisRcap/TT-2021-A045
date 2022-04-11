import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from '../components/home/HomeScreen';
import MisReportesScreen from '../components/misReportes/MisReportesScreen';
import PerfilScreen from '../components/perfil/PerfilScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <HomeScreen /> } />
            <Route path="/auth" element={ <AuthRouter /> } />
            <Route path="/mis-reportes" element={ <MisReportesScreen /> } />
            <Route path="/mi-perfil" element={ <PerfilScreen /> } />
            <Route path="/auth/*" element={ <AuthRouter /> } />
            <Route path="/*" element={ <HomeScreen /> } />
        </Routes>
    </Router>
  )
}

export default AppRouter;