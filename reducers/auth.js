import { actionTypes } from '../actions/actionType';

const {logIn} = actionTypes;
export default (state = null, action) => {
  switch (action.type) {
    case logIn:
      return {...state, userData: action.payload}
    default:
      return state;
  }

};