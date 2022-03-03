import * as authorizationApi from '../api/authorization';
import {
  useNavigate,
} from "react-router-dom";
const { REACT_APP_AUTH_URL } = process.env;

const salesforceAuthProvider = {
  isAuthenticated: false,
  async authorize(code:string) {
    const token = await authorizationApi.getToken(code);
    localStorage.setItem('__token', token);
    return token;
  },
  async getUser() {
    return authorizationApi.getUser();
  },
  async signin() {
    window.location.href = REACT_APP_AUTH_URL as string;
  },
  signout() {
    localStorage.removeItem('__token');
  },
};

export { salesforceAuthProvider };
