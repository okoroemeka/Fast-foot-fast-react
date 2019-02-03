import { combineReducers } from 'redux';
import FoodReducer from './food';
import authReducer from './auth';
import CartReducer from './cart';

export default combineReducers({ foods: FoodReducer, auth: authReducer, cart:CartReducer });