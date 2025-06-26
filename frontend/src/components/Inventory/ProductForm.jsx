import { useState } from "react";
import axios from "axios";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    stock_quantity: 0,
    price: 0,
    supplier: "",
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/products/", form)
      .then(() => alert("Produit ajouté !"))
      .catch(err => console.error("Erreur:", err));
  };

  return (
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nom" onChange={handleChange} />
        <input name="stock_quantity" type="number" placeholder="Quantité" onChange={handleChange} />
        <input name="price" type="number" step="0.01" placeholder="Prix" onChange={handleChange} />
        <input name="supplier" placeholder="Fournisseur ID" onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
