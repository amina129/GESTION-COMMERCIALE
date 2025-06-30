import React from 'react';
import './Projects.css';
import Sidebar from '../../pages/sidebar'; 

const Projects = () => {
  return (
    <div className="projects-container">
        <Sidebar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Monitor project-level profitability with integrated accounting capabilities</h1>
          <p className="lead">
            Projects represent unique delivery commitments that must be fulfilled on time and to the customer's exact expectations. 
            In project-based delivery, it's crucial to balance customization with standardized processes. 
            Also, meticulous planning is required to ensure commercial viability as per the budgets.
          </p>
          <p className="lead">
            hypERPlan's Project Management simplifies this by breaking down Projects into manageable milestones, 
            which are further divided into assignable Tasks. Create new projects effortlessly using Project Templates, 
            ensuring no standard task is overlooked. Link projects to sales and purchase transactions to track profitability 
            and manage expenses within budget limits.
          </p>
          <button className="btn-primary">Start free trial</button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-number">1</div>
          <h3>Track project completion</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">2</div>
          <h3>Track tasks, deadlines, owners</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">3</div>
          <h3>Map expenses and timesheets to projects</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">4</div>
          <h3>Track project-level inventories and assets</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">5</div>
          <h3>Let your customers see project progress</h3>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="detailed-features">
        <div className="feature-detail">
          <div className="feature-content">
            <h2>Track project completion</h2>
            <p>
              A project serves as the single source of truth, consolidating all associated details like Tasks, 
              Timesheets, Sales, and Purchases—into one place. hypERPlan enhances transparency by enabling customers 
              to access project updates through a portal view, reducing back-and-forth communication.
            </p>
            <p>
              Projects can also be interlinked and visualized in a tree view, offering a clear overview of how various 
              projects and tasks are connected, streamlining management and improving coordination.
            </p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/project-completion.png" alt="Project Completion Tracking" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Track tasks, deadlines, owners</h2>
            <p>
              In Projects, the gap between planning and execution can sometimes be significant. 
              Foster accountability by assigning tasks to individuals with clear deliverables and planned completion dates. 
              Easily track delayed tasks where deadlines have passed, ensuring timely follow-ups.
            </p>
            <p>
              Visualize task dependencies using the Gantt view to see how tasks are interconnected and evaluate the accuracy of planning. 
              For quick updates, use the Kanban view with drag-and-drop functionality to adjust task statuses on the fly.
            </p>
            <p>
              Stay in control of your tasks—the foundation of real work—ensuring project success and seamless execution.
            </p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/task-tracking.png" alt="Task Management" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Map invoices, expenses and timesheets to projects</h2>
            <p>
              With Timesheets, you can closely monitor the effort invested in Projects or Tasks, 
              ensuring accountability and attaching evidence of work for transparency.
            </p>
            <p>
              Timesheets also provide valuable insights into activity-level profitability by tracking both cost and billing rates 
              for each Activity. For employees who go above and beyond, you can reward their dedication by generating 
              Additional Salary entries directly from their Timesheets.
            </p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/expense-tracking.png" alt="Expense Management" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Track project-level inventories and assets</h2>
            <p>
              We understand how important it is to get a single view of your inventory, especially when your project locations 
              are scattered in multiple locations. With hypERPlan, you can tag each warehouse to reference your project location 
              and track, move, and plan inventory better.
            </p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/inventory-tracking.png" alt="Inventory Management" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Let your customers see project progress</h2>
            <p>
              The #1 rule of project management is to keep customers in the loop. Over-communicating and informing every progress 
              and blockers to the sponsors of the project ensures no last-minute surprises and satisfied customers. 
              However, with complex and siloed projects, this is hard to achieve. With hypERPlan you can design your own customer 
              portal and give access to customers to view project progress as a website user.
            </p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/customer-portal.png" alt="Customer Portal" />
          </div>
        </div>
      </section>

      {/* Framework Features */}
      <section className="framework-features">
        <h2>Powered by hypERPlan Framework</h2>
        <div className="framework-grid">
          <div className="framework-card">
            <h3>No-code builder</h3>
            <p>Automate tasks with drag-and-drop simplicity</p>
          </div>
          <div className="framework-card">
            <h3>API-first</h3>
            <p>Easily integrate with third-party systems</p>
          </div>
          <div className="framework-card">
            <h3>Mobile-friendly</h3>
            <p>Manage all modules from any device</p>
          </div>
          <div className="framework-card">
            <h3>Customizable</h3>
            <p>Forms, reports, print formats, and dashboards</p>
          </div>
          <div className="framework-card">
            <h3>Approval workflows</h3>
            <p>Simplify with custom multi-level workflows</p>
          </div>
          <div className="framework-card">
            <h3>Roles & permissions</h3>
            <p>Granular access control to safeguard data</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Experience Precision Project Management</h2>
          <p>Elevate your project delivery with hypERPlan's sophisticated yet intuitive project management system</p>
          <button className="btn-primary">Start free trial</button>
        </div>
      </section>
    </div>
  );
};

export default Projects;