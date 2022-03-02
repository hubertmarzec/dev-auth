import AuthStatus from './AuthStatus';
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div style={{padding:'1em'}}>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/statements">statements (Protected Page)</Link>
        </li>
        <li>
          <Link to="/profile">profile (Protected Page)</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
