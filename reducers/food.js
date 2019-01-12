export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FOOD':
      return [...state, action.payload];
    default:
      return state;
  }
}