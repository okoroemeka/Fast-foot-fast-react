import { combineReducers } from 'redux';
import FoodReducer from './food';
import authReducer from './auth';

export default combineReducers({ foods: FoodReducer, auth: authReducer })