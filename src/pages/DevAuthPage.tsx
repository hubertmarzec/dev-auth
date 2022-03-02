import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from '../hooks';
import { salesforceAuthProvider } from '../services/auth';
export default function DevAuthPage() {
  let navigate = useNavigate();
  let location = useLocation();
  const state = location.state as any;
  let auth = useAuth();

  let from = state?.from?.pathname || "/";

  async function handleSubmit(event: React.FormEvent < HTMLFormElement > ) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = formData.get("url") as string;
    const searchParams = new URLSearchParams(url.split('?')[1]);
    const code = searchParams.get('code') || url;

    await salesforceAuthProvider.getToken(url);
    const user = await auth.getUser();
    navigate(from, { replace: true });
  }
  return (
    <div style={{padding: '1em'}}>
      <h3>(only available in DEVELOPMENT env)</h3>
      <form>
          <input type="text" name="url" placeholder="Enter .../oauth2/success URL" style={{minWidth:'200px'}}/>
          {' '}
          <button type="submit">go</button>
      </form>
    </div>
  );
}
