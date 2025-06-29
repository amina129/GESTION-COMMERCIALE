import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

import {
  LayoutDashboard,
  Building2,
  DollarSign,
  Users,
  Handshake,
  BookText,
  Mail,
  Info,
  Wrench,
  FolderKanban,
  ChevronDown,
} from 'lucide-react';

const sidebarItems = [
  {
    label: 'Modules',
    to: '/modules',
    icon: <LayoutDashboard size={18} />,
    hasDropdown: true,
    subItems: [
      { label: 'Accounting', to: '/modules/accounting' },
      { label: 'Procurement', to: '/modules/procurement' },
      { label: 'Sales', to: '/modules/sales' },
      { label: 'CRM', to: '/modules/crm' },
      { label: 'Stock', to: '/modules/stock' },
      { label: 'Manufacturing', to: '/modules/manufacturing' },
      { label: 'Projects', to: '/modules/projects' },
      { label: 'Assets', to: '/modules/assets' },
      { label: 'Point of Sale', to: '/modules/pos' },
      { label: 'Quality', to: '/modules/quality' },
      { label: 'Support', to: '/modules/support' },
      { label: 'HR & Payroll', to: '/modules/hr-payroll' },
      { label: 'No-Code Builder', to: '/modules/no-code-builder' },
    ],
  },
  {
    label: 'Industry',
    to: '/industry',
    icon: <Building2 size={18} />,
    hasDropdown: true,
    subItems: [
      { label: 'Manufacturing', to: '/industry/manufacturing' },
      { label: 'Trading & Distribution', to: '/industry/trading-distribution' },
      { label: 'Retail', to: '/industry/retail' },
      { label: 'Engineering (EPC)', to: '/industry/engineering-epc' },
      { label: 'E-commerce', to: '/industry/e-commerce' },
      { label: 'Education', to: '/industry/education' },
      { label: 'Healthcare', to: '/industry/healthcare' },
      { label: 'Professional Services', to: '/industry/professional-services' },
      { label: 'Financial Services', to: '/industry/financial-services' },
      { label: 'Non-profit', to: '/industry/non-profit' },
    ],
  },
  { label: 'Pricing', to: '/pricing', icon: <DollarSign size={18} /> },
  { label: 'Customers', to: '/customers', icon: <Users size={18} /> },
  { label: 'Partners', to: '/partners', icon: <Handshake size={18} /> },
  { label: 'Blog', to: '/blog', icon: <BookText size={18} /> },
  { label: 'Contact us', to: '/contact', icon: <Mail size={18} /> },
  { label: 'About Frappe', to: '/about', icon: <Info size={18} /> },
  { label: 'Services', to: '/services', icon: <Wrench size={18} /> },
  {
    label: 'Resources',
    to: '/resources',
    icon: <FolderKanban size={18} />,
    hasDropdown: true,
    subItems: [
      { label: 'GitHub', to: '/resources/github' },
      { label: 'Documentation', to: '/resources/documentation' },
      { label: 'Forum', to: '/resources/forum' },
      { label: 'Events', to: '/resources/events' },
      { label: 'Comparisons', to: '/resources/comparisons' },
      { label: 'Whitepapers', to: '/resources/whitepapers' },
      { label: 'Marketplace', to: '/resources/marketplace' },
    ],
  },
];

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">HyperPlan</h2>
      <p style={{ color: 'rgb(192, 194, 199)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
        fast, agile ERP planning
      </p>
      <nav className="sidebar-nav">
        {sidebarItems.map((item, index) => (
          <div key={item.label}>
            {item.hasDropdown ? (
              <div>
                <button onClick={() => toggleDropdown(index)} className="dropdown-button">
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                  <ChevronDown className={`dropdown-arrow ${openDropdown === index ? 'rotated' : ''}`} size={16} />
                </button>
                {openDropdown === index && (
                  <div className="dropdown-content">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.label} to={subItem.to} className="sub-link">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link to={item.to} className="sidebar-link">
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
