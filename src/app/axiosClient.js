import axios from 'axios';

axios.defaults.withCredentials = true;
const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/apk' : REACT_APP_API_URL
});

instance.interceptors.request.use((config) => {
  let idToken = localStorage.getItem('__token');
  if (idToken) {
    config.headers = {
      'Access-Token': `${idToken}`,
      ...config.headers || {}
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default instance;
