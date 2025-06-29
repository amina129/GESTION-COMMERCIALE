import React from 'react';
import { Link } from 'react-router-dom';

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
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0 p-6">
      <nav className="flex flex-col space-y-4"> {/* THIS LINE stacks vertically */}
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="text-gray-700 hover:text-blue-600 font-semibold block"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
