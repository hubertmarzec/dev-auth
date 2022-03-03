import * as authorization from '../api/authorization';
import { useEffect, useState } from 'react';
export default function ProfilePage() {
  const [data, setData] = useState < any > (null);
  
  useEffect(() => {
    async function fetchData() {
      const data = await authorization.getUser();
      setData(data);
    }
    fetchData()
      .catch(console.error)
  }, [])
  return (
    <div>
      <h3>Profile</h3>
      {data && <table style={{minWidth:'500px'}}>
        <tbody>
          <tr>
            <th>agentId</th><td>{data.agentId}</td>
          </tr>
          <tr>
            <th>crmAgentId</th><td>{data.crmAgentId}</td>
          </tr>
          <tr>
            <th>name</th><td>{data.name}</td>
          </tr>
          <tr>
            <th>email</th><td>{data.email}</td>
          </tr>
          <tr>
            <th>firstName</th><td>{data.firstName}</td>
          </tr>
          <tr>
            <th>lastName</th><td>{data.lastName}</td>
          </tr>
          <tr>
            <th>agentCode</th><td>{data.agentCode}</td>
          </tr>
          <tr>
            <th>email</th><td>{data.email}</td>
          </tr>
        </tbody>
      </table>}
    </div>
  );
}
