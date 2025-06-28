import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logout }) => {
  return (
    <nav className="navbar">
      <h2>ERP System</h2>
      <ul>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Sales">Sales</Link></li>
        <li><Link to="/Inventory">Inventory</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/POS">POS</Link></li>
        <li>
          <button onClick={logout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
