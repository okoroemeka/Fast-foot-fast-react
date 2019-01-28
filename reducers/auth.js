import { actionTypes } from '../actions/actionType';

const {logIn, signUp} = actionTypes;
const initialState = {
  isLoggedIn: false,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case logIn:
      return {...state, userData: action.payload, isLoggedIn: true }
    case signUp:
      return {...state, userData: action.payload, isLoggedIn: true }
    default:
      return state;
  }
};