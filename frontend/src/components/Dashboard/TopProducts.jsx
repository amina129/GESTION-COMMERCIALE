import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TopProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/top-products/')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error loading top products:', err));
  }, []);

  return (
    <div>
      <h2>Top Selling Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - Sold: {product.sales_count}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopProduct;
