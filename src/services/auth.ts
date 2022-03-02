import * as authorizationApi from '../api/authorization';
import {
  useNavigate,
} from "react-router-dom";
const { REACT_APP_AUTH_URL } = process.env;

const salesforceAuthProvider = {
  isAuthenticated: false,
  async getToken(code:string) {
    const token = authorizationApi.getToken(code);
    // Magic happen here (API is cookies based not token - WTF :/)
    salesforceAuthProvider.isAuthenticated = true;
    return token;
  },
  async getUser() {
    return authorizationApi.getUser();
  },
  async signin() {
    window.location.href = REACT_APP_AUTH_URL as string;
  },
  signout() {
    salesforceAuthProvider.isAuthenticated = false;
    // FIXME implement
  },
};

export { salesforceAuthProvider };
