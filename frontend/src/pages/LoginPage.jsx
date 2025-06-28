import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'admin', password })  // replace 'admin' with actual username
      });

      const data = await response.json();

      if (response.ok && data.token) {
        login({ email: data.user, token: data.token });
        navigate('/inventory');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Server error');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '250px' }}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '250px' }}
          />
        </div>
        <br />
        <div>
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
            Login
          </button>
          <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
