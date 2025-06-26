import React, { useState } from "react";

function InvoiceForm({ onSubmit, initialData = {} }) {
  const [orderId, setOrderId] = useState(initialData.order_id || "");
  const [dueDate, setDueDate] = useState(initialData.due_date || "");
  const [isPaid, setIsPaid] = useState(initialData.is_paid || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ order_id: orderId, due_date: dueDate, is_paid: isPaid });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order ID:
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
      </label>

      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </label>

      <label>
        Paid:
        <input
          type="checkbox"
          checked={isPaid}
          onChange={() => setIsPaid(!isPaid)}
        />
      </label>

      <button type="submit">Save Invoice</button>
    </form>
  );
}

export default InvoiceForm;
