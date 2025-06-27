import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/billing">Billing</Link>
      <Link to="/pos">POS</Link>
    </div>
  );
}

export default Sidebar;
