import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuth } from './hooks';
import * as Pages from './pages';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';

export default function App() {
  const { bootstrapped } = useAuth();
  if (!bootstrapped) {
    return <div>...</div>;
  }
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Pages.PublicPage />} />
        <Route
          path="/statements"
          element={
            <RequireAuth>
              <Pages.StatementsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Pages.ProfilePage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="/login" element={<Pages.LoginPage />} />
      {process.env.NODE_ENV === 'development' && (
        <Route path="/dev-auth" element={<Pages.DevAuthPage />} />
      )}
    </Routes>

  );
}
