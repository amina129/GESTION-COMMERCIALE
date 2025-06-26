import React from "react";

function PaymentTracker({ invoices }) {
  const totalInvoices = invoices.length;
  const paidInvoices = invoices.filter((inv) => inv.is_paid).length;
  const unpaidInvoices = totalInvoices - paidInvoices;

  return (
    <div>
      <h2>Payment Tracker</h2>
      <p>Total Invoices: {totalInvoices}</p>
      <p>Paid: {paidInvoices}</p>
      <p>Unpaid: {unpaidInvoices}</p>
    </div>
  );
}

export default PaymentTracker;
