import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children, isAuthenticated }) => {
    console.log(isAuthenticated);
    return !isAuthenticated ?
        children :
        <Navigate to="/" />
}

export default PublicRoutes;