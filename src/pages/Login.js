import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5050/login', { email, password });
      console.log('Login successful');
      // Redirect to another page or perform any other actions after successful login
    } catch (error) {
      console.error('Login failed', error);
      // Handle login failure, show error message, etc.
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
