import { useState } from "react";
import axios from "axios";

export default function StockMovement() {
  const [movement, setMovement] = useState({
    product: "",
    quantity: 0,
    type: "IN", // or "OUT"
  });

  const handleChange = e =>
    setMovement({ ...movement, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/stock-movements/", movement)
      .then(() => alert("Mouvement enregistré"))
      .catch(err => console.error("Erreur:", err));
  };

  return (
    <div>
      <h2>Mouvement de stock</h2>
      <form onSubmit={handleSubmit}>
        <input name="product" placeholder="Produit ID" onChange={handleChange} />
        <input name="quantity" type="number" placeholder="Quantité" onChange={handleChange} />
        <select name="type" onChange={handleChange}>
          <option value="IN">Entrée</option>
          <option value="OUT">Sortie</option>
        </select>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}
