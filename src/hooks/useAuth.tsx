import * as React from "react";
import { AuthContext } from '../context/Auth.context';
export default function useAuth() {
  return React.useContext(AuthContext);
}
