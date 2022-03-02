import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { useEffect } from 'react';
import { useAuth } from '../hooks';

export default function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { signin } = useAuth();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
        navigate('/dev-auth');
    } else {
      signin();
    }
    
  }, []);

  return (
    <div>
      <p>You must log in to view the page at </p>

     
    </div>
  );
}
