import React, { useState } from 'react';

function CheckoutForm({ onCheckout }) {
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout({ customerName, paymentMethod });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input
        type="text"
        placeholder="Nom du client"
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
        required
      />
      <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
        <option value="cash">Espèces</option>
        <option value="card">Carte</option>
        <option value="mobile">Mobile</option>
      </select>
      <button type="submit">Valider le paiement</button>
    </form>
  );
}

export default CheckoutForm;
