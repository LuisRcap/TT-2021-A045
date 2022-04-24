import Swal from 'sweetalert2'

import { firebase, googleAuthProvider } from "../components/firebase/firebaseConfig";
import { types } from "../types/types";

export const startLoginEmailPassword = ( email, password, handleLoading ) => {
    return ( dispatch ) => {

        handleLoading(true);

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user }) => {
            dispatch( login( user.uid, user.displayName ) );
            handleLoading(false);
        }).catch( (err) => {
            Swal.fire( 'Error', err.message, 'error' );
            handleLoading(false);
        });
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch( login( user.uid, user.displayName ) );
            } )
            .catch( ( err ) => {
                Swal.fire( 'Error', err.message, 'error' );
            } ) 
    }
}

export const startGoogleLogin = ( handleLoading ) => {
    return ( dispatch ) => {
        
        handleLoading( true );

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then(({ user }) => {
                dispatch( login( user.uid, user.displayName ) );
                handleLoading(false);
            });
    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
});