import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from '../hooks';
import { salesforceAuthProvider } from '../services/auth';
const { REACT_APP_AUTH_URL } = process.env;
export default function DevAuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any;
  const auth = useAuth();
  if (auth.user) {
    navigate('/', { replace: true });
  }

  const from = state?.from?.pathname || "/";

  async function handleSubmit(event: React.FormEvent < HTMLFormElement > ) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = formData.get("url") as string;
    const searchParams = new URLSearchParams(url.split('?')[1]);
    const code = searchParams.get('code') || url;
    
    navigate(`/callback?code=${code}`, { replace: true });
  }

  function redirect() {
    window.open(REACT_APP_AUTH_URL,'_blank');
  }
  return (
    <div style={{padding: '1em'}}>
      <h3>(only available in DEVELOPMENT env)</h3>
      <form onSubmit={handleSubmit}>
          <p>
            <button onClick={redirect} type="button">get url with code</button>
          </p>
          <p>
            <input type="text" name="url" placeholder="Enter .../oauth2/success URL" style={{minWidth:'200px'}}/>
            {' '}
            <button type="submit">go</button>
          </p>
      </form>
    </div>
  );
}
