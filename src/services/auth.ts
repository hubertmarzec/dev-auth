import * as authorizationApi from '../api/authorization';

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
  async signin(url:string, callback: VoidFunction) {
    
  },
  signout(callback: VoidFunction) {
    salesforceAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { salesforceAuthProvider };
