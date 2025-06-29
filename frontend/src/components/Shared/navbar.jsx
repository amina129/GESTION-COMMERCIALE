import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/');  // Redirect after logout
     
  };

  return (
    <nav className="navbar">
      <h2>ERP System</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/POS">POS</Link></li>
        <li>
          <button
            onClick={handleLogout}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'blue',
              textDecoration: 'underline'
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
