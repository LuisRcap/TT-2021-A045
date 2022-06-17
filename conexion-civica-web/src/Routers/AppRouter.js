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
import { startLogin } from '../store/auth/authSlices';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import UserRoutes from './UserRoutes';
import ayuda  from '../components/ayuda/ayuda';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(user => {
      if( user?.uid ) {
        dispatch( startLogin({ uid: user.uid, displayName: user.displayName }));
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
            <Route path='/'  element={ <ayuda/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter;