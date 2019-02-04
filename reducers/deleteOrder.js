import { actionTypes } from '../actions/actionType';

const { DELETE_ORDER, DELETE_ORDER_ERROR } = actionTypes
export default (state = {}, action) => {
  const {payload, type} = action;
  switch (type) {
    case DELETE_ORDER:
      return {...state, response: payload};
    case DELETE_ORDER_ERROR:
      return {...state, response: payload}
    default:
      return state;
  }
}