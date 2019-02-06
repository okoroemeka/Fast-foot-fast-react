import axiosInstance from '../apis/GetFood';
import { toast } from 'react-toastify';
import jwt from 'jwt-decode';
import { actionTypes } from './actionType';

const { 
  logIn,
  LOG_IN_ERROR, 
  signUp,
  SIGN_UP_ERROR, 
  getMeal, 
  addToCart, 
  CHECK_OUT, 
  CHECKOUT_ERROR,
  ORDER_HISTORY, 
  ORDER_HISTORY_ERROR, 
  DELETE_ORDER,
  DELETE_ORDER_ERROR,
  LOG_OUT,
  LOG_OUT_ERROR
} = actionTypes;

const getAllAvailableFood = () => async dispatch => {
  const response = await axiosInstance.get('/menu');
  dispatch({type: getMeal, payload: response.data.menu});
};

const logInUser = userDetails => async dispatch => {
  try {
    const response = await axiosInstance.post('/auth/signin', userDetails);
    window.localStorage.setItem('token', response.data.token);
    window.localStorage.setItem('isLoggedIn', JSON.stringify(true));
    toast.success('signed in successfully');
    const decodedToken = jwt(response.data.token);
    return dispatch({type: logIn, payload: decodedToken});
  } catch ({response:{data:{message}}}) {
    window.localStorage.setItem('isLoggedIn', JSON.stringify(false));
    toast.error(message)
    return dispatch({type:LOG_IN_ERROR, payload: message});
  }
};

const signupUser = userDetails => async dispatch => {
  try {
    const response = await axiosInstance.post('/auth/signup', userDetails);
    window.localStorage.setItem('token', response.data.token);
    window.localStorage.setItem('isLoggedIn', JSON.stringify(true));
    const decodedToken = jwt(response.data.token);
    toast.success('signed up successfully');
    return dispatch({type: signUp, payload: decodedToken});
  } catch ({response:{data:{message}}}) {
    window.localStorage.setItem('isLoggedIn', JSON.stringify(false));
    toast.error(message);
    return dispatch({type:SIGN_UP_ERROR, payload: message });
  }
  
};

const logOut = () => async dispatch => {
  try {
    window.localStorage.removeItem('isLoggedIn');
    return dispatch({type: LOG_OUT, payload: false});
  } catch ({ message }) {
    toast.error('Logout was not successfull, please try again');
    return dispatch({type: LOG_OUT_ERROR, payload: false});
  }
  
}

const addToCartAction = (item) => async dispatch =>{
  await dispatch({
    type: addToCart, payload:item,
  });
  return toast.success('Item added to cart successfully');
}

const checkout = orderedMeals => async dispatch => {
  try {
    const response = await axiosInstance.post('/orders', orderedMeals);
    window.localStorage.removeItem('meals');
    dispatch({type: CHECK_OUT, payload: response});
   return toast.success('Order placed successfully');
  } catch ({message}) {
    toast.error('An error occured, please try again');
    return dispatch({type:CHECKOUT_ERROR, payload: message });
  }
};

const getOrderHistory = () => async dispatch => {
  try {
    const orderHistory = await axiosInstance.get('/users/orders');
    return dispatch({type: ORDER_HISTORY, payload: orderHistory.data.orders})
  } catch ({message}) {
    return dispatch({type: ORDER_HISTORY_ERROR, payload: JSON.stringify(message)})
  }
  
}
const deleteOrder = orderId => async dispatch => {
  try {
    const response = await axiosInstance.delete(`/orders/${orderId}`);
    dispatch({type:DELETE_ORDER, payload: response.data.message});
    dispatch({type: 'DELETE_ORDER_SUCSESS', payload: orderId});
    return toast.success('Order deleted successfully');
  } catch ({message}) {
    toast.error('Action was not successful, please try again');
    return dispatch({type: DELETE_ORDER_ERROR, payload: message})
  }
}
export {
  getAllAvailableFood, 
  logInUser, 
  signupUser, 
  addToCartAction, 
  checkout,
  getOrderHistory,
  deleteOrder,
  logOut
}