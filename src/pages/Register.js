import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5050/register', { email, password });
      console.log('Registration successful');
      // Redirect to another page or perform any other actions after successful registration
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration failure, show error message, etc.
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
