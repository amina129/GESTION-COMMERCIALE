import React from "react";
import Sidebar from "../../pages/sidebar";
import "./procurement.css";

const Procurement = () => {
  return (
    <div className="procurement-container">
      <Sidebar />
      <div className="procurement-content">
        <h1 className="title">Procure, receive, pay, and manage suppliers efficiently</h1>
        <p className="intro">
          Purchases are often the biggest expense a company incurs, and poor management can
          impact cash flow, profitability, and growth. With ERPNext, you can digitize the entire
          purchase flow—from material requests to invoicing—while ensuring budget limits are enforced.
        </p>
        <button className="trial-button">Start Free Trial</button>

        <ol className="steps">
          <li>Automate procurement with material requests</li>
          <li>Automate stock replenishment with auto re-order</li>
          <li>Request for quotation</li>
          <li>Supplier quotation</li>
          <li>Centralize procurements through purchase order</li>
          <li>Receive goods</li>
          <li>Managing payable and payment</li>
          <li>Procurement reports and analytics</li>
        </ol>

        <section>
          <h2>Automate procurement with material requests</h2>
          <p>
            Optimised purchasing is all about buying the items, in the right quantity, at the fair price.
            The integrated Buying module of ERPNext allows users from different departments like sales,
            stores and manufacturing to raise flags to the procurement team just when the need arises.
          </p>
        </section>

        <section>
          <h2>Automate stock replenishment with auto re-order</h2>
          <p>
            ERPNext automatically raises the flag to the procurement team by comparing your current stock
            levels vis-a-vis the re-order level threshold of an item, ensuring timely replenishment.
            It gets as close as AI-enabled for your purchasing.
          </p>
        </section>

        <section>
          <h2>Request for quotation</h2>
          <p>
            Simplify the quotation process by enabling Suppliers to access your RFQs via the Supplier Portal—
            reducing back-and-forth communication. With all necessary details at your fingertips, issuing
            Purchase Orders becomes effortless.
          </p>
        </section>

        <section>
          <h2>Supplier quotation</h2>
          <p>
            Effortlessly compile all supplier quotations received in response to your RFQ for easy comparison.
            Use the Supplier Quotation Report to analyze item pricing across multiple suppliers.
          </p>
        </section>

        <section>
          <h2>Centralize procurements through purchase order</h2>
          <p>
            Centralize procurement with Purchase Orders to ensure a structured and efficient buying process.
            Enhance transparency across teams and use email logs to keep complete context of transactions.
          </p>
        </section>

        <section>
          <h2>Receive goods</h2>
          <p>
            Use a one-click report to track delayed receipts and send timely notifications. Ensure items match
            the Purchase Order, perform quality checks, and store goods in the correct location. Verify receipts
            with the Stock Ledger and assess item valuation.
          </p>
        </section>

        <section>
          <h2>Managing payable and payment</h2>
          <p>
            Create invoices with just a few clicks. Purchase liabilities are automatically recorded.
            Stay compliant with tax rules. Use aging analysis to manage payments and keep a healthy cash flow.
            Generate bulk payments in bank-ready format.
          </p>
        </section>

        <section>
          <h2>Procurement reports and analytics</h2>
          <p>
            Use procurement tracker, purchase analysis tools, and budget controls to gain visibility over
            your purchase process. Make smart decisions using comprehensive procurement reports.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Procurement;
