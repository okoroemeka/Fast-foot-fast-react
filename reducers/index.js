import { combineReducers } from 'redux';
import FoodReducer from './food';

export default combineReducers({ foods: FoodReducer })