import React, { useState, useEffect } from "react";
import axios from "axios";

import InvoiceList from '../Billing/InvoiceList';
import InvoiceDetail from '../Billing/InvoiceDetail';
import InvoiceForm from '../Billing/InvoiceForm';
import PaymentTracker from '../Billing/PaymentTracker';
import TaxSummary from '../Billing/TaxSummary';


function BillingDashboard() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch invoices on mount
  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = () => {
    axios
      .get("http://127.0.0.1:8000/api/invoices/")
      .then((res) => setInvoices(res.data))
      .catch((err) => console.error("Failed to fetch invoices:", err));
  };

  // Handle selecting an invoice from the list
  const handleSelectInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setShowForm(false);
  };

  // Handle submitting new invoice data
  const handleAddInvoice = (invoiceData) => {
    axios
      .post("http://127.0.0.1:8000/api/erp/invoices/", invoiceData)
      .then((res) => {
        setInvoices((prev) => [...prev, res.data]);
        setSelectedInvoice(res.data);
        setShowForm(false);
      })
      .catch((err) => console.error("Failed to add invoice:", err));
  };

  // Show the form to create a new invoice
  const handleShowForm = () => {
    setSelectedInvoice(null);
    setShowForm(true);
  };

  return (
    <div>
      <h1>Billing Dashboard</h1>
      <button onClick={handleShowForm}>Add New Invoice</button>

      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <div style={{ flex: 1 }}>
          <InvoiceList invoices={invoices} onSelect={handleSelectInvoice} />
          <PaymentTracker invoices={invoices} />
          <TaxSummary invoices={invoices} />
        </div>

        <div style={{ flex: 1 }}>
          {showForm ? (
            <InvoiceForm onSubmit={handleAddInvoice} />
          ) : (
            <InvoiceDetail invoice={selectedInvoice} />
          )}
        </div>
      </div>
    </div>
  );
}

export default BillingDashboard;
