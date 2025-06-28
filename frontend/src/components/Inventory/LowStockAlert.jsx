import { useEffect, useState } from "react";
import axios from "axios";

export default function LowStockAlert() {
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/erp/inventory/low-stock/")
      .then(res => {
        const filtered = res.data.filter(p => p.stock_quantity <= 5);
        setLowStock(filtered);
      })
      .catch(err => console.error("Erreur:", err));
  }, []);

  if (lowStock.length === 0) return null;

  return (
    <div>
      <h3>⚠️ Alertes de stock faible</h3>
      <ul>
        {lowStock.map(prod => (
          <li key={prod.id}>
            {prod.name} — Stock: {prod.stock_quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
