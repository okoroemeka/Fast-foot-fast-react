import fetchFood from '../apis/GetFood';
import jwt from 'jwt-decode';
import { actionTypes } from './actionType';

const { logIn, signUp, getMeal} = actionTypes;

const getAllAvailableFood = () => async dispatch => {
  const response = await fetchFood.get('/menu');
  dispatch({type: getMeal, payload: response.data.menu})
}
const logInUser = (userDetails) => async dispatch => {
  const response = await fetchFood.post('/auth/signin', userDetails);
  window.localStorage.setItem('token', response.data.token)
  const decodedToken = jwt(response.data.token);
  dispatch({type: logIn, payload: decodedToken})
}
const signupUser = (userDetails) => async dispatch => {
  const response = await fetchFood.post('/auth/signup', userDetails);
  window.localStorage.setItem('token', response.data.token)
  const decodedToken = jwt(response.data.token);
  dispatch({type: signUp, payload: decodedToken})
}
export {getAllAvailableFood,logInUser,signupUser}