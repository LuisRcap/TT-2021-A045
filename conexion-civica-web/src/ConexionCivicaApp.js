import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouter';
import { store } from './store/store';

const ConexionCivicaApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}

export default ConexionCivicaApp;