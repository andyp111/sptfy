import React , { useState, useEffect } from 'react';
import Dropdown from './Dropdown.jsx';
import axios from 'axios';


const App = () => {
  

  console.log('Rendering APP.JS');

  const data = [
    {value: 1, name: 'A'},
    {value: 2, name: 'B'},
    {value: 2, name: 'C'}
  ];

  const [token, setToken] = useState('');

  useEffect(() => {
    axios('http://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': 'Basic' + btoa(process.env.SPOTIFY_CLIENT_ID  + ':' + process.env.SPOTIFY_CLIENT_SECRET)
      },
      data: 'grant-type=client_crendentials',
      method: 'POST'
    })
    .then((tokenResponse) => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
    });
  }, []);

  return (
    <form onSubmit={() => {}}>
      <div className="container">
        <Dropdown options={data} />
        <Dropdown options={data} />
        <button type="submit">
          Search
        </button>
      </div>
    </form>
    
  );
}

export default App;