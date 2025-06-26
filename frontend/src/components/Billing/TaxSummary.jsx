import React from "react";

function TaxSummary({ invoices }) {
  // Example: assume each invoice has a tax_amount field
  const totalTax = invoices.reduce((sum, inv) => sum + (inv.tax_amount || 0), 0);

  return (
    <div>
      <h2>Tax Summary</h2>
      <p>Total Tax Collected: ${totalTax.toFixed(2)}</p>
    </div>
  );
}

export default TaxSummary;
