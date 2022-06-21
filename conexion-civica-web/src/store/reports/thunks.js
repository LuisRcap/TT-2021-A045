import { ConexionCivicaApi } from "../../api/conexionCivicaApi";
import { startLoadingReportes, setReportes } from "./reportsSlice";

export const getReportes = () => {
    return async ( dispatch, getState ) => {
        
        dispatch( startLoadingReportes() );
        const data = await ConexionCivicaApi.get('report');
        console.log("data: ",data);
    }
}