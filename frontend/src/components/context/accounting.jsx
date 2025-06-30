// src/pages/AccountingPage.jsx
import React from "react";
import Sidebar from '../../pages/sidebar';
import "./AccountingPage.css"; // create this for styles if needed

const AccountingPage = () => {
  return (
    <div className="accounting-container">
      <Sidebar />

      <div className="accounting-content">
        <h1>Manage your accounts accurately with the right controls</h1>
        <p>
          Maintaining accurate financial records is crucial—not just for statutory compliance,
          but for a clear, real-time view of your organization’s financial health. With ERPNext,
          a fully open-source ERP, you can streamline compliance, reduce manual spreadsheet efforts,
          and minimize reliance on external auditors. ERPNext transforms accounting by seamlessly
          integrating with inventory, manufacturing, HR, and more—turning your ERP into a centralized
          financial hub.
        </p>

        <button className="start-trial-button">Start Free Trial</button>

        <ol className="feature-list">
          <li>Flexible chart of accounts</li>
          <li>Comprehensive general ledger</li>
          <li>Manage billing, payables and receivables</li>
          <li>Taxes and compliance</li>
          <li>Cost centers, dimensions and budgeting</li>
          <li>Financial statements</li>
          <li>Assets</li>
          <li>Account reconciliation</li>
          <li>Multi-company & multi-currency management</li>
        </ol>

        <section>
          <h2>Flexible chart of accounts</h2>
          <p>
            ERPNext simplifies financial management with a flexible Chart of Accounts (CoA) that
            adapts to any business structure...
          </p>
        </section>

        <section>
          <h2>Comprehensive general ledger</h2>
          <p>
            The general ledger is the foundation of every accounting report. In ERPNext, every
            submitted accounting transaction...
          </p>
        </section>

        <section>
          <h2>Manage billing, payables and receivables</h2>
          <p>
            Effective cash flow management is crucial, and ERPNext offers a comprehensive system for
            managing payables and receivables...
          </p>
        </section>

        <section>
          <h2>Taxes and compliance</h2>
          <p>
            Stay statutory compliant with ease by defining tax ledgers in the Chart of Accounts...
          </p>
        </section>

        <section>
          <h2>Cost centers, dimensions and budgeting</h2>
          <p>
            ERPNext’s Cost Centers and Dimensions help track profitability across multiple units...
          </p>
        </section>

        <section>
          <h2>Financial statements</h2>
          <p>
            ERPNext provides businesses with one-click access to real-time financial reports...
          </p>
        </section>

        <section>
          <h2>Assets</h2>
          <p>
            Assets play a crucial role in business, acting as a long-term investment that grows...
          </p>
        </section>

        <section>
          <h2>Account reconciliation</h2>
          <p>
            Gain a clear and accurate view of receivable and payable by efficiently matching...
          </p>
        </section>

        <section>
          <h2>Multi-company & multi-currency management</h2>
          <p>
            Consolidating data from multiple entities into a single ERP instance can be a costly...
          </p>
        </section>
      </div>
    </div>
  );
};

export default AccountingPage;
