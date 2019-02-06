import axios from 'axios';
// import {
//   render, fireEvent, wait,
// } from 'react-testing-library';
import axiosMockAdapter from 'axios-mock-adapter';
import { getAllAvailableFood, 
  logInUser, 
  signupUser, 
  addToCartAction, 
  checkout,
  deleteOrder,
  getOrderHistory
} from '../actions/index';


const mockAdapter = new axiosMockAdapter(axios);
describe('getAllAvailableFood', () => {
  const dispatch = jest.fn();
  test('succefull getting of all food to be displayed', async() =>{
    const response = {status: 'Success', menu:[]};
    await mockAdapter.onGet().reply(200, response);
    await getAllAvailableFood()(dispatch);
    expect(dispatch).toBeCalledTimes(1);
  })
  test('succefull signup', async() =>{
    const response = {status: 'Success', message:'Signup successfully'};
    await mockAdapter.onPost().reply(201, response);
    await signupUser()(dispatch);
    expect(dispatch).toBeCalled();
  })
  test('succefull login', async() =>{
    const response = {status: 'Success', message:'Welcome to fast-food-fast resturant'};
    await mockAdapter.onPost().reply(200, response);
    await logInUser()(dispatch);
    expect(dispatch).toBeCalled();
  })
  test('successful addding item to cart', async () => {
    const item = {
      id: 1,
      food: 'yam',
      price:2000,
    }
    await addToCartAction(item)(dispatch)
    expect(dispatch).toBeCalled();
  })
  test('successful checkout', async () => {
    const response = {status: 'Success', message:'Order placed successfully'};
    await mockAdapter.onPost().reply(200, response);
    await checkout()(dispatch);
    expect(dispatch).toBeCalled();
  })
  test('successful get order history', async () => {
    const response = {status: 'Success', message:'Order historry'};
    await mockAdapter.onGet().reply(200, response);
    await getOrderHistory()(dispatch);
    expect(dispatch).toBeCalled();
  })
  test('successful delete order', async () => {
    const response = {status: 'Success', message:'Order deleted successfully'};
    await mockAdapter.onDelete().reply(200, response);
    await deleteOrder()(dispatch);
    expect(dispatch).toBeCalled();
  })
});

