import React from 'react';

function ReceiptPreview({ cartItems, customerName, paymentMethod }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Reçu</h2>
      <p>Client: {customerName}</p>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total payé: ${total.toFixed(2)}</p>
      <p>Méthode de paiement: {paymentMethod}</p>
    </div>
  );
}

export default ReceiptPreview;
