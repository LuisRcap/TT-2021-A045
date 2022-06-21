import axios from 'axios';

export const ConexionCivicaApi = axios.create({
    baseURL: 'https://conexion-civica.herokuapp.com/api/'
});