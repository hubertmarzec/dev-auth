import axios from 'axios';

axios.defaults.withCredentials = true;
const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/apk' : REACT_APP_API_URL
});

instance.interceptors.request.use((config) => {
  let idToken = localStorage.getItem('__token');
  idToken = '00D7Z0000004reW!AQEAQFyn5tsxhJpyrH4_LxD9H7GAHBm6a9hdidpFi9mR.F5guJEkzkzLB0pF3Eb6EV9FQiwfY9H2ncgV8ksyv5FbjoLMaA1x';
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
