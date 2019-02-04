import cart  from './cart';
import foods from './food';
import auth from './auth';
import deleteOrder from './deleteOrder';
import orderHistory from './orderHistory';

const initialState = {
  isLoggedIn: false,
};
describe('Test reducers', () => {
  test('cart reducer', () => {
    const payload = {
      id: 3,
      food : "affang soup",
      price: 2000,
      food_image: "https://res.cloudinary.com/dejndvrjd/image/upload/v1542554516/Afang-soup-16_mvxnwl.jpg",
    }
    const type = 'ADD_TO_CART';
    const action = {
      type,
      payload,
    }
    const result = {
      3: {id: 3,
      food : "affang soup",
      price: 2000,
      food_image: "https://res.cloudinary.com/dejndvrjd/image/upload/v1542554516/Afang-soup-16_mvxnwl.jpg",
      quantity: 1}
    }
   const response = cart({}, action);
   expect(response).toEqual(result);
  })
  test('checkout reducer', ()=> {
    const action = {
      type: 'CHECK_OUT',
      payload:{},
    }
    const response = cart({}, action);
    expect(response).toEqual({});
  })
  test('food reducer', ()=>{
    const action = {
      type: 'FETCH_FOOD',
      payload: [{
        id: 3,
        food : "affang soup",
        price: 2000,
        food_image: "https://res.cloudinary.com/dejndvrjd/image/upload/v1542554516/Afang-soup-16_mvxnwl.jpg"
      }]
    }
    const response = foods([], action);
    expect(response).toEqual([[{
      id: 3,
      food : "affang soup",
      price: 2000,
      food_image: "https://res.cloudinary.com/dejndvrjd/image/upload/v1542554516/Afang-soup-16_mvxnwl.jpg"
    }]])
  });
  test('login reducer',()=>{
    const action = {
      type: 'LOG_IN',
      payload:{}
    };
    const response = auth(initialState, action);
    expect(response).toEqual({isLoggedIn:true, userData:{}});
  });
  test('signup reducer', ()=>{
    const action = {
      type: 'SIGN_UP',
      payload:{}
    };
    const response = auth(initialState, action);
    expect(response).toEqual({isLoggedIn:true, userData:{}});
  })
  test('successful delete order', ()=>{
    const action = {
      type: 'DELETE_ORDER',
      payload: 'order deleted successfully'
    };
    const response = deleteOrder({}, action);
    expect(response).toEqual({response: 'order deleted successfully'});
  })
  test('unsuccessful delete order', ()=>{
    const action = {
      type: 'DELETE_ORDER_ERROR',
      payload: 'order was not deleted successfully'
    };
    const response = deleteOrder({}, action);
    expect(response).toEqual({response: 'order was not deleted successfully'});
  })
  test('successfully get order history', ()=>{
    const action = {
      type: 'ORDER_HISTORY',
      payload: []
    };
    const response = orderHistory([], action);
    expect(response).toEqual([]);
  })
  test('unsuccessfully get order history', ()=>{
    const action = {
      type: 'ORDER_HISTORY_ERROR',
      payload: 'error'
    };
    const response = orderHistory([], action);
    expect(response).toEqual([{error: 'error'}]);
  })
});