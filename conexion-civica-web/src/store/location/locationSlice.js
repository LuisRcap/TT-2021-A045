import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        lat: null,
        lng: null,
    },
    reducers: {
        updateCoords: (state, action) => {
            console.log("updated");
            const {lat, lng} = action.payload;
            state.lat = lat;
            state.lng = lng;
        }
    }
});


// Action creators are generated for each case reducer function
export const { updateCoords } = locationSlice.actions;