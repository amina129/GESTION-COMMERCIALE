import React from "react";

function InvoiceList({ invoices, onSelect }) {
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} onClick={() => onSelect(invoice)}>
            Invoice #{invoice.id} - Order #{invoice.order_id} -{" "}
            {invoice.is_paid ? "Paid" : "Unpaid"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
