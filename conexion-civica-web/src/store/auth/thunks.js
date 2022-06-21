import Swal from 'sweetalert2'
import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider } from "../../components/firebase/firebaseConfig";

import { startLoadingUser, startLogin, startLogout } from "./authSlices";

export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {

        startLoadingUser();

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user }) => {
            dispatch( startLogin( user.uid, user.displayName ) );
        }).catch( (err) => {
            startLoadingUser();
            Swal.fire( 'Error', err.message, 'error' );
        });
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch( startLogin( user.uid, user.displayName ) );
            } )
            .catch( ( err ) => {
                Swal.fire( 'Error', err.message, 'error' );
            } ) 
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        
        startLoadingUser();

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then(({ user }) => {
                dispatch( startLogin( user.uid, user.displayName ) );
            });
    }
}

export const startLoginFacebook = () => {
    return ( dispatch ) => {
        startLoadingUser();

        firebase.auth().signInWithPopup( facebookAuthProvider )
            .then(({ user }) => {
                dispatch( startLogin( user.uid, user.displayName ) );
            });
    }
}

export const startLoginTwitter = () => {
    return ( dispatch ) => {
        startLoadingUser();

        firebase.auth().signInWithPopup( twitterAuthProvider )
            .then(({ user }) => {
                dispatch( startLogin( user.uid, user.displayName ) );
            });
    }
    
}