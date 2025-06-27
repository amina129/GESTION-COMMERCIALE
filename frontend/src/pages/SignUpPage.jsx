import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // You can later replace this with an API call
    const userData = { email };
    localStorage.setItem('user', JSON.stringify(userData));
    login(userData);
    navigate('/inventory');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', width: '250px' }}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', width: '250px' }}
        /><br /><br />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Create Account
        </button>
      </form>
      <br />
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignUpPage;
