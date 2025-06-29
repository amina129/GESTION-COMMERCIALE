import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Importez le fichier CSS

const sidebarItems = [
  { label: 'Modules', to: '/modules' },
  { label: 'Industry', to: '/industry' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Customers', to: '/customers' },
  { label: 'Partners', to: '/partners' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact us', to: '/contact' },
  { label: 'About Frappe', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Resources', to: '/resources' },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Navigation</h2>
      <nav className="sidebar-nav">
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="sidebar-link"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;