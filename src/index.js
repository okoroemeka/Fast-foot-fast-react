import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import App from './App'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const cartInitialState = window.localStorage.getItem('meals') ?
  JSON.parse(window.localStorage.getItem('meals')) : {};
  const loginStatus = window.localStorage.getItem('isLoggedIn');
const store = createStore(reducers, { cart: cartInitialState, auth: { isLoggedIn: loginStatus }}, composeEnhancers(applyMiddleware(thunk)));
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));