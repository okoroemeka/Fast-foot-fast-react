import { getAllAvailableFood, logInUser, signupUser } from '../actions/index';
import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';

const mockAdapter = new axiosMockAdapter(axios);
describe('getAllAvailableFood', () => {
  const dispatch = jest.fn();
  test('succefull getting of all food to be displayed', async() =>{
    const response = {status: 'Success', menu:[]};
    await mockAdapter.onGet().reply(200, response);
    await getAllAvailableFood()(dispatch);
    expect(dispatch).toBeCalledTimes(1);
  })
});
