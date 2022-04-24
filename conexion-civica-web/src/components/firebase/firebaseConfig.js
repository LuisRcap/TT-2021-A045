import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYserX1vZz8elKG1rrxtauOvpbhJqjzkE",
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

export {
    firebase,
    db,
    googleAuthProvider,
}