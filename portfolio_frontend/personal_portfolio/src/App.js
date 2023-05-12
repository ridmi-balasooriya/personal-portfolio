import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data/')
    .then(response => response.json())
    .then(data => setMessage(data.message))
  }, [])
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
