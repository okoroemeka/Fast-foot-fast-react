import { actionTypes } from '../actions/actionType';

const {logIn, signUp, LOG_IN_ERROR, SIGN_UP_ERROR, LOG_OUT, LOG_OUT_ERROR} = actionTypes;
const initialState = {
  isLoggedIn: false,
}
export default (state = initialState, action) => {
  // const {type, payload} = this.props;
  switch (action.type) {
    case logIn:
      return { ...state, userData: action.payload, isLoggedIn: true };
    case LOG_IN_ERROR: 
    return { ...state, logInError: action.payload, isLoggedIn: false};
    case signUp:
      return { ...state, userData: action.payload, isLoggedIn: true };
    case LOG_OUT:
      return { ...state, userData: action.payload, isLoggedIn: false };
    case SIGN_UP_ERROR:
      return {...state, signUpError: action.payload, isLoggedIn: false };
    default:
      return state;
  }
};