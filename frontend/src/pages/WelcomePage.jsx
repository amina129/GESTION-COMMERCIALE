import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Top Header */}
        <header className="header animate-fade-in">
          <div className="header-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">HyperPlan</span>
          </div>
          <Link
            to="/login"
            className="login-button"
          >
            Se connecter
            <span className="button-icon">→</span>
          </Link>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content animate-slide-up">
            <div className="tech-badge">
              <span className="pulse-dot"></span>
              OPEN SOURCE ERP
            </div>
            <h1 className="hero-title">
              Transform Your Business with <span className="highlight">HyperPlan</span>
            </h1>
            <p className="hero-subtitle">
              The most advanced open-source ERP solution for modern enterprises
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => navigate("/demo")}
                className="btn-primary"
              >
                <span className="button-icon">👁️</span> Live Demo
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="btn-outline"
              >
                <span className="button-icon">🚀</span> Start Free Trial
              </button>
            </div>
          </div>
          <div className="hero-image animate-slide-up delay-100">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="ERP Dashboard"
              className="dashboard-image"
            />
            <div className="image-overlay"></div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="value-section animate-slide-up delay-200">
          <div className="section-header">
            <h2>Why Choose HyperPlan?</h2>
            <div className="divider"></div>
          </div>
          
          <div className="value-grid">
            <div className="value-card">
              <div className="card-icon">💸</div>
              <h3>Cost Effective</h3>
              <p>Save up to 80% compared to proprietary ERP solutions with no licensing fees.</p>
            </div>
            
            <div className="value-card">
              <div className="card-icon">⚙️</div>
              <h3>Fully Customizable</h3>
              <p>Tailor every aspect to your business needs with our modular architecture.</p>
            </div>
            
            <div className="value-card">
              <div className="card-icon">🔓</div>
              <h3>Transparent</h3>
              <p>100% open-source means no hidden features or vendor lock-in.</p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="tech-section animate-slide-up delay-300">
          <div className="section-header">
            <h2>Built With Modern Technology</h2>
            <div className="divider"></div>
          </div>
          <div className="tech-stack">
            <div className="tech-item">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker" />
              <span>Docker</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WelcomePage;