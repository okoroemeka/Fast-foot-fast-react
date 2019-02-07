export default (state = {}, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state, 
        [payload.id]: {...payload, quantity: state[payload.id]?
          state[payload.id]["quantity"]+=1 : 1
        }};
    case 'CHECK_OUT':
      return {};
    case 'DELETE_FROM_CART':
      const { [payload]: _, ...newState } = state
      console.log('just a logged item', payload, newState)
      return newState
    default:
      return state;
  }
}