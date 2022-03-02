import * as statementApi from '../api/statement';
import { useEffect, useState } from 'react';
export default function StatementsPage() {
  const [data, setData] = useState < Array < any >> ([]);
  useEffect(() => {
    async function fetchData() {
      const data = await statementApi.fetch();
      setData(data);
    }
    fetchData()
      .catch(console.error)
  }, [])
  return (
    <div>
      <h3>Statements</h3>
      <table style={{minWidth:'500px'}}>
        <thead>
          <tr>
            <th>id</th>
            <th>required?</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({statementId, content, required}) => (
            <tr key={statementId}>
              <td>{statementId}</td>
              <td>{required ? 'yes' : 'no'}</td>
              <td>
                <div title={content} style={{maxWidth:'300px', overflow:'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                  {content}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
