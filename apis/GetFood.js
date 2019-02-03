import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://fast-food-fast-12.herokuapp.com/api/v1',
  headers: {
    'x-access-token': window.localStorage.getItem('token'),
  }
});
