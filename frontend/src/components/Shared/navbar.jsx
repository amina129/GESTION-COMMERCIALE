import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>ERP System</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/pos">POS</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
