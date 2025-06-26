import React from 'react';

function Cart({ cartItems, onRemove, onQuantityChange }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)}
              <button onClick={() => onRemove(item.id)}>Supprimer</button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e => onQuantityChange(item.id, parseInt(e.target.value))}
              />
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
