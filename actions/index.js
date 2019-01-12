import fetchFood from '../apis/GetFood';

export const getAllAvailableFood = () => async dispatch => {
  const response = await fetchFood.get('/menu');
  dispatch({type: 'FETCH_FOOD', payload: response.data.menu})
}