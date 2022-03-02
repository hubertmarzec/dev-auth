import * as React from "react";
import { salesforceAuthProvider } from '../services/auth';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  getUser: () => any;
  bootstrapped: any;
}

let AuthContext = React.createContext < AuthContextType > (null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [bootstrapped, setBootstrapped] = React.useState < boolean > (false);
  let [user, setUser] = React.useState < any > (null); // FIXME was null!!!

  const signin = (newUser: string, callback: VoidFunction) => {
    return salesforceAuthProvider.signin(newUser, () => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return salesforceAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const getUser = async () => {
    return salesforceAuthProvider.getUser();
  };

  React.useEffect(() => {
    async function fetchData() {
      const user = await salesforceAuthProvider.getUser();
      setUser(user);
    }
    fetchData()
      .catch(console.error)
      .finally(() => setBootstrapped(true));
  }, [])


  const value = { user, bootstrapped, signin, signout, getUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export { AuthContext, AuthProvider };
