import { combineReducers } from 'redux';
import FoodReducer from './food';
import authReducer from './auth';
import CartReducer from './cart';
import OrderHistory from './orderHistory';
import deleteOrder from './deleteOrder';

export default combineReducers({ 
  foods: FoodReducer, 
  auth: authReducer, 
  cart:CartReducer, 
  orderHistory: OrderHistory,
  deleteOrder: deleteOrder
});