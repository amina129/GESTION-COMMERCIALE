import React from 'react';
import './Stock.css';
import Sidebar from '../../pages/sidebar'; 

const Stock = () => {
  return (
    <div className="stock-container">
        <Sidebar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>A complete inventory management system for 100% visibility and efficiency</h1>
          <p className="lead">Effective stock management is the backbone of retail, distribution, and manufacturing business. Create Item Master as your single source of truth, eliminating duplications. Keep tight control over stock movements with built-in approvals and quality checks. Maintain accurate item valuations, enabling precise profitability reports. Automate stock replenishment based on customer orders and forecast reports.</p>
          <button className="btn-primary">Start free trial</button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-number">1</div>
          <h3>Centralized item master</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">2</div>
          <h3>Flexible warehouses</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">3</div>
          <h3>Maintain inventory levels using stock replenishment</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">4</div>
          <h3>Improve order fulfillment using stock reservation</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">5</div>
          <h3>Reconcile inventory levels for accuracy</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">6</div>
          <h3>Put-away and Pick-List</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">7</div>
          <h3>Serialised and batched Inventory</h3>
        </div>
        <div className="feature-card">
          <div className="feature-number">8</div>
          <h3>Stock Reports</h3>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="detailed-features">
        <div className="feature-detail">
          <div className="feature-content">
            <h2>Centralized item master</h2>
            <p>Define product categories as Item Groups, and get an analysis of stock movement of item and Item Group level. Define naming convention for the Items to prevent duplication and discover Items with ease. Manage items having different nature and purpose like stockable items, consulting service, raw-material and sub-contracted items.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/item-master.png" alt="Centralized item master" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Flexible warehouses</h2>
            <p>Warehouses serve as the physical or virtual hubs where inventory is stored and managed. hypERPlan simplifies this with a tree-view Warehouse Master, allowing you to design a structure that mirrors your warehouse layout and its sub-locations.</p>
            <p>The Perpetual Inventory valuation system integrates a warehouse with an accounting ledger. This ensures automatic General Ledger postings alongside Stock Ledger updates, providing accurate and real-time inventory valuation.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/warehouses.png" alt="Flexible warehouses" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Maintain inventory levels using stock replenishment</h2>
            <p>Prevent stockouts by setting re-order levels and quantities for an item and a warehouse. With hypERPlan, automate the replenishment process by triggering Material Requests automatically when stock reaches the re-order threshold. This ensures you stay ahead of inventory needs and maintain smooth operations.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/replenishment.png" alt="Stock replenishment" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Improve order fulfillment using stock reservation</h2>
            <p>If you operate on a Make to Order or Purchase to Order basis, linking your orders to purchasing or manufacturing processes becomes essential. hypERPlan ensures that stock purchased or manufactured is reserved for specific orders, preventing the same items from being dispatched to different customers. This guarantees accurate order fulfillment and prevents stock conflicts.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/reservation.png" alt="Stock reservation" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Reconcile inventory levels for accuracy</h2>
            <p>Just like a sailing ship's course is subtly altered by waves, frequent stock movements can cause discrepancies between your ERP system's stock balance and the actual inventory in the warehouse. Stock Reconciliation helps you course-correct by aligning the system's stock records with the physical inventory, ensuring everything stays in sync.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/reconciliation.png" alt="Inventory reconciliation" />
          </div>
        </div>

        <div className="feature-detail reverse">
          <div className="feature-content">
            <h2>Putaway and Pick List</h2>
            <p>Storing the right items in the right locations makes it easier to find products in a large warehouse. With putaway rules, you can assign specific racks or bins to particular product types, optimizing space and organization.</p>
            <p>hypERPlan's pick list simplifies the picking process, ensuring that the correct items are selected for orders. This streamlined process boosts operational efficiency and enhances customer satisfaction.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/picklist.png" alt="Putaway and Pick List" />
          </div>
        </div>

        <div className="feature-detail">
          <div className="feature-content">
            <h2>Serialised and Batched Inventory</h2>
            <p>If you're dealing with high-value items that come with product warranties, hypERPlan's Serialized Inventory feature helps you track each unit meticulously. With serialized inventory, you can monitor the purchase details—where the item came from and at what price. When sold, link customer details in the Serial Master and update the warranty expiry for the item.</p>
            <p>For items with limited shelf life, bundle them under a unique Batch ID and set an Expiry Date. hypERPlan ensures compliance by preventing items from expired batches from being dispatched to customers, avoiding costly mistakes.</p>
          </div>
          <div className="feature-image">
            <img src="https://hyperplan.com/images/batches.png" alt="Serialised and Batched Inventory" />
          </div>
        </div>
      </section>

      {/* Stock Reports Section */}
      <section className="stock-reports">
        <h2>Stock Reports</h2>
        
        <div className="report-card">
          <h3>Stock Aging</h3>
          <p>To optimize item placement in your warehouse, it's crucial to identify slow and fast-moving items. hypERPlan's Stock Aging report makes this process easier by highlighting items based on their movement speed. This helps you strategically position stock, ensuring faster access to high-demand products and better space utilization for slower-moving items.</p>
        </div>

        <div className="report-card">
          <h3>Stock Balance and Stock Ledger Report</h3>
          <p>The Stock Ledger, stock balance, and available batch reports offer detailed insights into inventory levels at specific warehouses on any given date. These reports ensure precise tracking and efficient stock management, helping you stay on top of your inventory.</p>
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

export default Stock;