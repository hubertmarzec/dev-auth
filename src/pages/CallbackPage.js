import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { useEffect } from 'react';
import { useAuth } from '../hooks';

export default function CallbackPage() {
  const { search } = useLocation();
  const { authorize } = useAuth();
  const navigate = useNavigate();

  const { signin } = useAuth();
  useEffect(() => {
    async function process() {
      const params = new URLSearchParams(search);
      const code = params.get('code');
      if (code) {
        await authorize(code);
        navigate('/', { replace: true });
      }
    }
    process();

  }, []);

  return null;
}
