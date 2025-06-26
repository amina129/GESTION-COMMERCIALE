import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Erreur de chargement:", err));
  }, []);

  return (
    <div>
      <h2>Liste des produits</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Stock</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.stock_quantity}</td>
              <td>{prod.price} DT</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
