import fetchFood from '../apis/GetFood';
import jwt from 'jwt-decode';
import { actionTypes } from './actionType';

const { logIn, signUp, getMeal, addToCart, CHECK_OUT} = actionTypes;

const getAllAvailableFood = () => async dispatch => {
  const response = await fetchFood.get('/menu');
  dispatch({type: getMeal, payload: response.data.menu});
};

const logInUser = (userDetails) => async dispatch => {
  try {
    const response = await fetchFood.post('/auth/signin', userDetails);
    window.localStorage.setItem('token', response.data.token);
    window.localStorage.setItem('logInStatus', JSON.stringify({isLoggedIn: true}));
    const decodedToken = jwt(response.data.token);
    return dispatch({type: logIn, payload: decodedToken});
  } catch (error) {
    return error;
  }
};

const signupUser = (userDetails) => async dispatch => {
  try {
    const response = await fetchFood.post('/auth/signup', userDetails);
    window.localStorage.setItem('token', response.data.token);
    window.localStorage.setItem('logInStatus', JSON.stringify({isLoggedIn: true}));
    const decodedToken = jwt(response.data.token);
    return dispatch({type: signUp, payload: decodedToken});
  } catch (error) {
    return error
  }
  
};

const addToCartAction = (item) =>
  ({
    type: addToCart, payload:item
  })

const checkout = (orderedMeals) => async dispatch => {
  try {
    const response = await fetchFood.post('orders', orderedMeals);
    window.localStorage.removeItem('meals');
  return dispatch({type: CHECK_OUT, payload: {}});
  } catch (error) {
    return (JSON.stringify(error.message));
  }
};
export {getAllAvailableFood, logInUser, signupUser, addToCartAction, checkout}