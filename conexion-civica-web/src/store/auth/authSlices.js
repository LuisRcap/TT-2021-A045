import { createSlice } from '@reduxjs/toolkit';
import { firebase } from "../../components/firebase/firebaseConfig";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
        displayName: null,
        isLoading: false,
    },
    reducers: {
        startLoadingUser: (state) => {
            state.isLoading = !state.isLoading;
        },
        startLogin: (state, action ) => {
            startLoadingUser();
            state.uid = action.payload.uid;
            state.displayName = action.payload.displayName;
        },
        startLogout: async (state) => {
            await firebase.auth().signOut();
            startLoadingUser();
            state.uid = null;
            state.displayName = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const {  startLoadingUser, startLogin, startLogout } = authSlice.actions;