import React from "react";

function InvoiceDetail({ invoice }) {
  if (!invoice) return <p>No invoice selected.</p>;

  return (
    <div>
      <h2>Invoice #{invoice.id}</h2>
      <p>Order ID: {invoice.order_id}</p>
      <p>Issue Date: {invoice.issue_date}</p>
      <p>Due Date: {invoice.due_date}</p>
      <p>Status: {invoice.is_paid ? "Paid" : "Unpaid"}</p>
      <p>Total Amount: ${invoice.total_amount}</p>
    </div>
  );
}

export default InvoiceDetail;
