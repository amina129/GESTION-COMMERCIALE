import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from '../Shared/LoadingSpinner';

import InvoiceList from '../Billing/InvoiceList';
import InvoiceDetail from '../Billing/InvoiceDetail';
import InvoiceForm from '../Billing/InvoiceForm';
import PaymentTracker from '../Billing/PaymentTracker';
import TaxSummary from '../Billing/TaxSummary';

function BillingDashboard() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);  // <-- loading state

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/erp/invoices/")
      .then((res) => setInvoices(res.data))
      .catch((err) => console.error("Failed to fetch invoices:", err))
      .finally(() => setLoading(false));
  };

  const handleSelectInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setShowForm(false);
  };

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

  const handleShowForm = () => {
    setSelectedInvoice(null);
    setShowForm(true);
  };

  if (loading) return <LoadingSpinner message="Chargement des factures..." />;

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
