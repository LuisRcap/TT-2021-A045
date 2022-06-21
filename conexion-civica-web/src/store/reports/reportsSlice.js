import { createSlice } from '@reduxjs/toolkit';

export const reportsSlice = createSlice({
    name: 'reports',
    initialState: {
        isLoaded: false,
        reportes: [],
        token: ''
    },
    reducers: {
        startLoadingReportes: (state) => {
            state.isLoaded = !state.isLoaded;
        },
        setReportes: (state, action ) => {
            startLoadingReportes();
            console.log("Respuesta conexion civica");
            console.log(action.payload);
            state.reportes = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingReportes, setReportes, setToken } = reportsSlice.actions;