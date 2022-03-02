import axios from 'axios';

axios.defaults.withCredentials = true;
const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL
});

instance.interceptors.request.use((config) => {
  
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default instance;
