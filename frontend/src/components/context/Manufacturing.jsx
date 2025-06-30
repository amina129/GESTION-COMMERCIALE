import React from 'react';
import './Manufacturing.css';
import Sidebar from '../../pages/sidebar';

const Manufacturing = () => {
  return (
    <div className="manufacturing-container">
        <Sidebar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Get 100% visibility and traceability in your manufacturing process</h1>
          <p className="lead">With hypERPlan's manufacturing module, you can track multi-level BOMs (Bill of Materials) for both finished goods and sub-assemblies. Integration with sales and stock ensures you stay ahead, anticipating upcoming production jobs and pre-planning your production queues. Estimate raw material requirements and initiate timely requisitions to keep things flowing. Ensure the accurate valuation of produced items, along with quality checks, before back-flushing is carried out.</p>
          <button className="btn-primary">Start free trial</button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-number">1</div>
          <h3>Maintain BOM operations</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">2</div>
          <h3>Production planning</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">3</div>
          <h3>Work order</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">4</div>
          <h3>Capacity planning</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">5</div>
          <h3>Subcontracting</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">6</div>
          <h3>Identify subcontracting items</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">7</div>
          <h3>Subcontracting orders</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">8</div>
          <h3>Subcontracting billing</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">9</div>
          <h3>Manufacturing reports and dashboards</h3>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="detailed-features">
        <div className="feature-detail">
          <div className="feature-content">
            <h2>Maintain BOM operations</h2>
            <p>The Bill of Materials (BOM) is the core of every manufacturing operation, linking all processes back to its details. In hypERPlan, you can maintain comprehensive BOM records, specifying raw materials in different quantities and units of measurement (UoMs) while outlining the sequence of operations needed to transform them into finished goods.</p>
            <p>BOMs also serve as a powerful tool for estimating raw material and operation costs, enabling you to calculate the estimated value of finished items. This systematic approach helps determine competitive sales prices for your products, ensuring profitability and market competitiveness.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/bom-operations.png" alt="BOM Operations" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Production planning</h2>
            <p>Building a production queue requires taking lots of factors into consideration, like committed delivery date to customer, availability of raw-materials and sub-assemblies. Production planning provides a step-wise solution to pull items to be produced, fetch raw materials through their BOMs and check their availability in various warehouses. It enables you to request raw-materials and initiate Work Orders accordingly.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/production-planning.png" alt="Production Planning" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Work order</h2>
            <p>A Work Order is the key directive for the manufacturing team, outlining the production process as defined in the linked BOM.</p>
            <p>It serves as the central document, triggering raw material transfers, generating Job Cards, and enabling backflushing of finished goods. Sales teams can also refer to Work Orders to track production progress and keep customers updated.</p>
            <p>If production is like an orchestra, the Work Order is the conductor, coordinating all operations to ensure every action happens on time and in harmony.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/work-order.png" alt="Work Order" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Capacity planning</h2>
            <p>Factory operating costs form a significant part of a company's expenses. Hence, mismanaging production job allocation on Workstations can result in major losses. hypERPlan's capacity planning feature helps track workloads on each workstation, enabling efficient scheduling of future production jobs.</p>
            <p>This ensures optimal utilization of resources, accelerates production, and helps fulfill delivery commitments on time.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/capacity-planning.png" alt="Capacity Planning" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Subcontracting</h2>
            <p>Focus on what you do best and let subcontracting handle the rest. By partnering with experts, you can leverage your core competencies while outsourcing specific tasks. hypERPlan simplifies this process by allowing you to mark items as subcontracted to suppliers and manage all subcontracting orders in one centralized system.</p>
            <p>Track progress, ensure timely execution, and scale your subcontracting operations seamlessly. With hypERPlan, you can efficiently collaborate with top suppliers, ensuring high-quality services while maintaining focus on your business strengths.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/subcontracting.png" alt="Subcontracting" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Identify subcontracting items</h2>
            <p>Even when subcontracting, discipline and precise tracking are crucial to ensure quality and accuracy. In hypERPlan, you can flag each subcontracted item and link it directly to a detailed Bill of Materials (BOM). This provides a clear list of materials to supply to the subcontractor, reducing logistical challenges and ensuring smooth operations.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/subcontracting-items.png" alt="Subcontracting Items" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Subcontracting orders</h2>
            <p>A Subcontracting Order in hypERPlan captures all essential details, including the items to be subcontracted and their BOM. It acts as a central document to manage the transfer of raw materials to subcontractors and track the receipt of finished goods. When finished items are received, hypERPlan ensures that the raw materials supplied to subcontractors are accurately consumed.</p>
            <p>This streamlined workflow allows you to manage multiple subcontracting processes at once, reducing delays, preventing stock pilferage, and maintaining quality standards with precision.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/subcontracting-orders.png" alt="Subcontracting Orders" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Subcontracting billing</h2>
            <p>While subcontracting focuses on transforming raw materials into finished goods, accurate billing is equally critical. hypERPlan allows you to bill your subcontractors for the service, while the actual item received remains a stock item. This ensures seamless creation of Purchase Orders, receipts, and invoices for subcontracting services. The workflow ensures compliance with statutory regulations and guarantees that payables are accurately recorded.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/subcontracting-billing.png" alt="Subcontracting Billing" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Manufacturing reports and dashboards</h2>
            <p>Even when subcontracting, discipline and precise tracking are crucial to ensure quality and accuracy. In hypERPlan, you can flag each subcontracted item and link it directly to a detailed Bill of Materials (BOM). This provides a clear list of materials to supply to the subcontractor, reducing logistical challenges and ensuring smooth operations.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/manufacturing-reports.png" alt="Manufacturing Reports" />
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
        <h2>Choose Freedom with hypERPlan</h2>
        <p>The comprehensive, user-friendly and 100% open-source ERP</p>
        <button className="btn-primary">Start free trial</button>
      </section>
    </div>
  );
};

export default Manufacturing;