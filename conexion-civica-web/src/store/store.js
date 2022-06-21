import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlices';
import { uiSlice } from './ui/uiSlices';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer
    }
})