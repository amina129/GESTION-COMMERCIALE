import React, { useState } from 'react';

function ProductSearch({ products, onAdd }) {
  const [query, setQuery] = useState('');

  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input
        type="search"
        placeholder="Rechercher un produit"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => onAdd(product)}>Ajouter</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
