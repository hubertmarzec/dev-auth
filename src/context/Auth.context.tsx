import * as React from "react";
import { salesforceAuthProvider } from '../services/auth';

interface AuthContextType {
  user: any;
  signin: () => void;
  signout: () => void;
  getSession: () => any;
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

  React.useEffect(() => {
    async function fetchData() {
      await getSession();
    }
    fetchData()
      .catch(console.error)// TODO suppress
      .finally(() => setBootstrapped(true));
  }, [])


  const value = { user, bootstrapped, signin, signout, getSession };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export { AuthContext, AuthProvider };
