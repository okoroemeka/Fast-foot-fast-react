import { actionTypes } from '../actions/actionType';

const { ORDER_HISTORY, ORDER_HISTORY_ERROR, DELETE_ORDER_SUCSESS } = actionTypes
export default (state = [], action) => {
  const {payload, type} = action;
  switch (type) {
    case ORDER_HISTORY:
      return [...state, ...payload];
    case ORDER_HISTORY_ERROR:
      return [...state, {error: payload}];
    case DELETE_ORDER_SUCSESS:
      return [...state.filter((item)=> item.id !== payload )];
    default:
      return state;
  }
}