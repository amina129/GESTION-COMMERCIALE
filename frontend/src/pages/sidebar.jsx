import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const sidebarItems = [
  {
    label: 'Modules',
    icon: '🧩',
    to: '/modules',
    hasDropdown: true,
    subItems: [
      { label: 'Accounting', icon: '📊', to: '/modules/accounting' },
      { label: 'Procurement', icon: '📦', to: '/modules/procurement' },
      { label: 'Sales', icon: '💼', to: '/modules/sales' },
      { label: 'CRM', icon: '👥', to: '/modules/CRM' },
      { label: 'Stock', icon: '📦', to: '/modules/stock' },
      { label: 'Manufacturing', icon: '🏭', to: '/modules/manufacturing' },
      { label: 'Projects', icon: '📋', to: '/modules/projects' },
      { label: 'Assets', icon: '🏢', to: '/modules/assets' },
      { label: 'Point of Sale', icon: '💳', to: '/modules/pos' },
      { label: 'Quality', icon: '✅', to: '/modules/quality' },
      { label: 'Support', icon: '🛠️', to: '/modules/support' },
      { label: 'HR & Payroll', icon: '👔', to: '/modules/hr-payroll' },
      { label: 'No-Code Builder', icon: '🧱', to: '/modules/no-code-builder' },
    ]
  },
  {
    label: 'Industry',
    icon: '🏢',
    to: '/industry',
    hasDropdown: true,
    subItems: [
      { label: 'Manufacturing', icon: '🏭', to: '/industry/manufacturing' },
      { label: 'Trading & Distribution', icon: '🚚', to: '/industry/trading-distribution' },
      { label: 'Retail', icon: '🛍️', to: '/industry/retail' },
      { label: 'Engineering (EPC)', icon: '⚙️', to: '/industry/engineering-epc' },
      { label: 'E-commerce', icon: '🛒', to: '/industry/e-commerce' },
      { label: 'Education', icon: '🎓', to: '/industry/education' },
      { label: 'Healthcare', icon: '🏥', to: '/industry/healthcare' },
      { label: 'Professional Services', icon: '💼', to: '/industry/professional-services' },
      { label: 'Financial Services', icon: '💵', to: '/industry/financial-services' },
      { label: 'Non-profit', icon: '🤝', to: '/industry/non-profit' },
    ]
  },
  { label: 'Pricing', icon: '💲', to: '/pricing' },
  { label: 'Customers', icon: '👥', to: '/customers' },
  { label: 'Partners', icon: '🤝', to: '/partners' },
  { label: 'Blog', icon: '📝', to: '/blog' },
  { label: 'Contact us', icon: '📧', to: '/contact' },
  { label: 'About HyperPlan', icon: '⚡', to: '/about' },
  { label: 'Services', icon: '🛠️', to: '/services' },
  { label: 'Resources', icon: '📚', to: '/resources' }
];

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  const location = useLocation();

  const toggleDropdown = useCallback((index) => {
    setOpenDropdown(prev => prev === index ? null : index);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsVisible(prev => !prev);
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && (isHovered || !isVisible)) {
        setIsVisible(false);
        setIsHovered(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHovered, isVisible]);

  const isActiveItem = (path) => {
    return location.pathname.startsWith(path);
  };

   return (
    <div className="sidebar-wrapper">
      {/* Toggle Button Always Visible */}
      <button 
        className={`sidebar-toggle ${!isVisible ? 'sidebar-toggle-hidden' : ''}`} 
        onClick={toggleSidebar}
        aria-label={isVisible ? 'Hide sidebar' : 'Show sidebar'}
      >
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar-container ${isVisible ? 'visible' : 'hidden'}`}>
        <header className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">⚡</div>
            <h1 className="sidebar-title">HyperPlan</h1>
          </div>
          <p className="sidebar-subtitle">Future-Ready ERP</p>
        </header>

        <div className="sidebar-search">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input" 
            aria-label="Search"
          />
          <div className="search-icon" aria-hidden="true">🔍</div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {sidebarItems.map((item, index) => (
            <div key={`${item.label}-${index}`} className="nav-item">
              {item.hasDropdown ? (
                <div className={`dropdown-container ${openDropdown === index ? 'open' : ''}`}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`nav-button ${isActiveItem(item.to) ? 'active' : ''}`}
                    aria-expanded={openDropdown === index}
                    aria-controls={`dropdown-${index}`}
                  >
                    <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    <svg
                      className="dropdown-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div 
                    id={`dropdown-${index}`}
                    className="dropdown-content"
                    hidden={openDropdown !== index}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={`${subItem.label}-${subIndex}`}
                        to={subItem.to}
                        className={`sub-link ${location.pathname === subItem.to ? 'active' : ''}`}
                      >
                        <span className="sub-icon" aria-hidden="true">{subItem.icon}</span>
                        <span className="sub-label">{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={item.to} 
                  className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
                >
                  <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <footer className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar" aria-hidden="true">👤</div>
            <div className="user-info">
              <div className="user-name">Admin User</div>
              <div className="user-role">System Administrator</div>
            </div>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;