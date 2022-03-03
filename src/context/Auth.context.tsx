import * as React from "react";
import { salesforceAuthProvider } from '../services/auth';

interface AuthContextType {
  user: any;
  signin: () => void;
  signout: () => void;
  getSession: () => any;
  authorize: (code:string) => void;
  bootstrapped: any;
}

let AuthContext = React.createContext < AuthContextType > (null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [bootstrapped, setBootstrapped] = React.useState < boolean > (false);
  let [user, setUser] = React.useState < any > (null); // FIXME was null!!!

  const signin = async () => {
    return salesforceAuthProvider.signin();
  };

  const signout = async() => {
    await salesforceAuthProvider.signout();
    setUser(null);
  };

  const getSession = async () => {
    const user = await salesforceAuthProvider.getUser();
    setUser(user);
  };

  const authorize = async (code:string) => {
    await salesforceAuthProvider.authorize(code);
    await getSession();
  };

  React.useEffect(() => {
    async function fetchData() {
      await getSession();
    }
    fetchData()
      .catch(console.error)// TODO suppress
      .finally(() => setBootstrapped(true));
  }, [])


  const value = { user, bootstrapped, signin, signout, getSession, authorize };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export { AuthContext, AuthProvider };
