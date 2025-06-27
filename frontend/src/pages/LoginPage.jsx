import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake login credentials
    if (email === 'admin@example.com' && password === 'password') {
      const userData = { email };
      login(userData);
      navigate('/inventory');
    } else {
      alert('Invalid credentials');
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
          <p>
             Don’t have an account? <a href="/signup">Sign Up</a>
             </p>

        </div>
      </form>
    </div>
  );
};

export default LoginPage;
