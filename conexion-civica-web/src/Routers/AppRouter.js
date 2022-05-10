import React, { useEffect, useState } from 'react';
import { 
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import { firebase } from '../components/firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import HomeScreen from '../components/home/HomeScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import UserRoutes from './UserRoutes';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(user => {
      if( user?.uid ) {
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn( false );
      }
      setChecking(false);

    });

  }, [ dispatch, setChecking, setIsLoggedIn ]);

  if( checking ) {
    return (
      <h1>Espere...</h1>
    )
  }
  

  return (
    <Router>
        <Routes>
            <Route path="/" element={ <HomeScreen /> } />

            <Route path="/auth/*" element={
                <PublicRoutes isAuthenticated={ isLoggedIn } >
                  <AuthRouter />
                </PublicRoutes>
              } 
            />

            <Route path="/user/*" element={
                <PrivateRoutes isAuthenticated={ isLoggedIn } >
                  <UserRoutes />
                </PrivateRoutes>
              }
            />
            <Route path="/*" element={ <HomeScreen /> } />
        </Routes>
    </Router>
  )
}

export default AppRouter;