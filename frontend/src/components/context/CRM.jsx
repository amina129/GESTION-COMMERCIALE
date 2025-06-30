import React from 'react';
import './CRM.css';
import Sidebar from '../../pages/sidebar';

const CRM = () => {
  return (
  
    <div className="crm-container">
      {/* Hero Section */}
      <Sidebar />
      <section className="hero">
        <div className="hero-content">
          <h1>hypERPlan CRM</h1>
          <p className="lead">Most CRMs overwhelm you or lock features behind paywalls. hypERPlan CRM helps you work, not slow you down—open-source, intuitive, and free from extra costs.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">View Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://frappecrm.com/images/hero.png" alt="hypERPlan CRM Dashboard" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why hypERPlan CRM</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">🔓</div>
            <h3>100% Open Source</h3>
            <p>Own your CRM—customize, extend, and host it with no vendor restrictions.</p>
          </div>
          <div className="benefit-card">
            <div className="icon">👥</div>
            <h3>Unlimited users on hypERPplan Cloud</h3>
            <p>Scale your sales team without rising software costs.</p>
          </div>
          <div className="benefit-card">
            <div className="icon">📊</div>
            <h3>All customer data in one place</h3>
            <p>Link contacts, track conversations, and manage leads and deals in a single view.</p>
          </div>
          <div className="benefit-card">
            <div className="icon">📈</div>
            <h3>Manage your sales pipeline</h3>
            <p>Track deals with a Kanban view, move them through customizable stages.</p>
          </div>
          <div className="benefit-card">
            <div className="icon">🔗</div>
            <h3>Built-in integrations</h3>
            <p>Easily integrate with hypERPplan, email, call, and communication apps.</p>
          </div>
          <div className="benefit-card">
            <div className="icon">🚀</div>
            <h3>Built for growth</h3>
            <p>Customize workflows, automate follow-ups, and grow without limitations.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What hypERPlan CRM has to offer you</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Contact & Deal Management</h3>
            <p>Keep all leads, contacts, deals, and organizations organized in one place for a clear sales pipeline.</p>
          </div>
          <div className="feature-card">
            <h3>Communications</h3>
            <p>Track emails, calls, chats, and team discussions in one system to ensure smooth coordination.</p>
          </div>
          <div className="feature-card">
            <h3>Customization & Controls</h3>
            <p>Adapt Frappe CRM to your business needs with custom fields, workflows, and permissions.</p>
          </div>
          <div className="feature-card">
            <h3>Workflow Automation</h3>
            <p>Automate lead assignments, follow-ups, and deal progress to reduce manual work.</p>
          </div>
          <div className="feature-card">
            <h3>Views & Reports</h3>
            <p>Customize how you see your data with saved, public, and pinned views for quick access.</p>
          </div>
          <div className="feature-card">
            <h3>Integrations</h3>
            <p>Connect with ERPNext, email, phone, WhatsApp, and other tools you already use.</p>
          </div>
          <div className="feature-card">
            <h3>Progressive Web App</h3>
            <p>Access your CRM from any device, with a fast, app-like experience right from your browser.</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison">
        <h2>Why hypERPplan CRM is the smarter choice</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>hypERPplan CRM</th>
                <th>Salesforce</th>
                <th>Leadsquared</th>
                <th>Pipedrive</th>
                <th>Zoho CRM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open Source</td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Unlimited users</td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Customization without vendor</td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Pricing</td>
                <td>Starts at $5/site on Frappe Cloud</td>
                <td>Starts at $25/user</td>
                <td>Starts at $25/user</td>
                <td>Starts at $12/user</td>
                <td>Starts at $10/user</td>
              </tr>
              <tr>
                <td>Lead/Deal Management</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Email/Call</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Dashboard and Analytics</td>
                <td>Yes, with Frappe Insights</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Tasks/Notes</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="story-content">
          <h2>Story of hypERPlan CRM</h2>
          <blockquote>
            "CRMs are meant to help sales teams, but too often, they do the opposite. Having worked on MS Dynamics CRM, I saw firsthand how they can feel overwhelming—filled with rigid structures, unnecessary fields, and complex workflows that slow teams down instead of helping them close deals.
            <br /><br />
            The CRM module in hypERPlan had its own challenges. It wasn't built with sales-first functionality in mind, and the sales team found it lacking the flexibility and key features they needed to manage leads, track interactions, and move deals forward.
            <br /><br />
            Instead of trying to fix a system that wasn't designed for sales, we decided to build hypERPlan CRM from the ground up—a simple, flexible, and open-source CRM that gives sales team full control."
          </blockquote>
          <div className="author">
            <p><strong>Product Engineer</strong></p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Take it from our users</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="quote">"Hands down, one of the best features of hypERPplan CRM is its WhatsApp integration. It's a total game-changer for keeping in touch with our clients. The UI? Super clean and straightforward, making it a breeze to navigate. But what really stands out is how easy it is to customize. We've tailored it to fit our workflow like a glove. hypERPplan CRM? It just works."</div>
            <div className="user">
              <div className="user-info">
                <strong>Nilay Patel</strong>
                <span>Vulcan Group</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote">"Overall, hypERPplan CRM seems like a good option for businesses that are looking for an easy-to-use CRM solution. This CRM provides centralised customer information, improved communication within team members to take follow-ups, etc."</div>
            <div className="user">
              <div className="user-info">
                <strong>Aniket Bapat</strong>
                <span>Chandorkar Technologies OPC Pvt. Ltd.</span>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-outline">View all testimonials</button>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to transform your sales process?</h2>
        <p>Join thousands of businesses using hypERPplan CRM to streamline their sales operations.</p>
        <button className="btn-primary">Get Started for Free</button>
      </section>
    </div>
  );
};

export default CRM;