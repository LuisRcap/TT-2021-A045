import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { credentials } from '../../credentials/credentials';

const firebaseConfig = {
    apiKey: credentials.firebase,
    authDomain: "conexion-civica.firebaseapp.com",
    projectId: "conexion-civica",
    storageBucket: "conexion-civica.appspot.com",
    messagingSenderId: "147310868598",
    appId: "1:147310868598:web:d9f31f990daa5959c00757"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
    firebase,
    db,
    googleAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
}