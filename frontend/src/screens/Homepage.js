import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Homepage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(message);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
  
}

export default Homepage;