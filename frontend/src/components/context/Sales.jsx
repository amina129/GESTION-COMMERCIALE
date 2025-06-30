import React from "react";
import Sidebar from "../../pages/sidebar";
import "./sales.css"; // Optional CSS file for styling

const Sales = () => {
  return (
    <div className="sales-container">
      <Sidebar />
      <div className="sales-content">
        <h1 className="title">Sales is the growth engine of an organization</h1>
        <p className="intro">
          ERPNext keeps it well-oiled with tools that ensure your sales system runs smoothly.
          Nurture your pipeline by tracking each of your prospects and their needs in CRM.
          Stay ahead of your competitors by creating competitive and professional quotations and invoices with minimal effort.
          Manage delivery notes and accounts receivables.
        </p>

        <button className="trial-button">Start Free Trial</button>

        <ol className="steps">
          <li>Make professional quotations</li>
          <li>Run lightning fast order to delivery to cash cycle</li>
          <li>Set pricing rules</li>
          <li>Use blanket orders to honour customer contracts</li>
          <li>Get timely payments from your customers</li>
        </ol>

        <section>
          <h2>Make professional quotations</h2>
          <p>
            In winning new business, along with product quality, the responsiveness of the sales team plays a vital role.
            A quick turnaround in offering a competitive proposal can significantly boost conversions.
            With ERPNext, you can create quotations on the fly using pre-configured masters.
            Select a customer or a lead, choose items, fetch terms, and you have a quotation in just a few seconds.
            You can even use our print designer app to build exceptional templates with no or minimal code.
            Upon approval, automatically email the quotation to the customer with a personalized message.
            Follow up and negotiate with the customer right from the quotation until it either converts into business or provides valuable insights for future improvements.
          </p>
        </section>

        <section>
          <h2>Run lightning fast order to delivery to cash cycle</h2>
          <p>
            Fulfilling customer orders is the backbone of repeat business.
            Every step of your supply chain, from collecting advance payments to ensuring timely deliveries,
            depends on the success of customer orders. It’s a critical function that drives your business forward.
            Celebrate new sales by creating a Sales Order and instantly receiving notifications about stock availability.
            If stock replenishment is needed, generate a requisition directly from the Sales Order.
            For manufactured items, trigger a Work Order for the production department.
            Reserve batches of items to be dispatched against specific Sales Orders.
            Once items are ready for dispatch, coordinate with logistics and accounts for smooth processing.
          </p>
        </section>

        <section>
          <h2>Set pricing rules</h2>
          <p>
            Discounts are a powerful tool to drive short-term sales and encourage repeat business.
            Never miss an opportunity to apply them when creating an order.
            Boost your chances of customer retention by automating discount applications.
            Set up Pricing rules in ERPNext to ensure discounts are automatically applied to items when new orders are created.
          </p>
        </section>

        <section>
          <h2>Use blanket orders to honour customer contracts</h2>
          <p>
            Building a value-driven business starts with honoring your commitments.
            Capture special rate contracts with key customers through Blanket Orders.
            When creating new orders, ensure they align with the agreed-upon rates and quantities.
            By consistently honoring these commitments, you strengthen customer relationships,
            leading to greater loyalty and, ultimately, more business.
          </p>
        </section>

        <section>
          <h2>Get timely payments from your customers</h2>
          <p>
            Getting timely payments from customers was never this easy.
            View accounts receivables report to track late payers and
            set automated customized reminders (on email/WhatsApp/Telegram)
            to make sure you receive payments on time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Sales;
