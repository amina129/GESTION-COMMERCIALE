import React, { useState } from 'react';

function ProductSearch({ products = [], onAdd }) {
  // Now products is always an array
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un produit"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}€
            <button onClick={() => onAdd(product)}>Ajouter</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductSearch;

