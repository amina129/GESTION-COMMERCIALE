import React, { useState } from 'react';
import ProductSearch from './ProductSearch';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm';
import ReceiptPreview from './ReceiptPreview';

function POSInterface({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutData, setCheckoutData] = useState(null);

  const handleAddProduct = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveProduct = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev => prev.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleCheckout = (data) => {
    setCheckoutData({ ...data, cartItems });
    setCartItems([]);  // Clear cart after checkout
    alert('Paiement effectué avec succès!');
  };

  return (
    <div>
      <h1>Point de Vente (POS)</h1>
      {!checkoutData && (
        <>
          <ProductSearch products={products} onAdd={handleAddProduct} />
          <Cart
            cartItems={cartItems}
            onRemove={handleRemoveProduct}
            onQuantityChange={handleQuantityChange}
          />
          <CheckoutForm onCheckout={handleCheckout} />
        </>
      )}
      {checkoutData && (
        <ReceiptPreview
          cartItems={checkoutData.cartItems}
          customerName={checkoutData.customerName}
          paymentMethod={checkoutData.paymentMethod}
        />
      )}
    </div>
  );
}

export default POSInterface;
