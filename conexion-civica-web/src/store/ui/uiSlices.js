import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        msgError: null
    },
    reducers: {
        setError: (state, action ) => {
            state.msgError = action.payload.err;
        },
        removeError: (state) => {
            state.msgError = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setError, removeError } = uiSlice.actions;