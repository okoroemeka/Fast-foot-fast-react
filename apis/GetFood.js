import Axios from 'axios';

const instance =Axios.create({
  baseURL: 'https://fast-food-fast-12.herokuapp.com/api/v1',
});
instance.interceptors.request.use((config) => {
  const configInstance = { ...config };
  configInstance.headers['x-access-token'] = window.localStorage.getItem('token');
  return configInstance;
});

export default instance;