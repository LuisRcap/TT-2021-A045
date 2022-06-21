import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlices';
import { locationSlice } from './location/locationSlice';
import { reportsSlice } from './reports/reportsSlice';
import { uiSlice } from './ui/uiSlices';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        location: locationSlice.reducer,
        reports: reportsSlice.reducer,
    }
})