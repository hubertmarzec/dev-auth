import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from '../hooks';
export default function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p style={{outline:'1px dashed'}}>You are not logged in.</p>;
  }

  return (
    <p style={{outline:'1px dashed blue'}}>
      Welcome {auth.user.name}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
