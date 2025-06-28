import { useEffect, useState } from "react";
import axios from "axios";

export default function InventoryTracker() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalStock: 0,
    lowStockCount: 0,
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/erp/inventory/')
      .then(res => {
        const products = res.data;
        const totalProducts = products.length;
        const totalStock = products.reduce((sum, p) => sum + p.stock_quantity, 0);
        const lowStockCount = products.filter(p => p.stock_quantity <= 5).length;

        setStats({ totalProducts, totalStock, lowStockCount });
      })
      .catch(err => console.error("Erreur:", err));
  }, []);

  return (
    <div>
      <h2>Suivi de l'inventaire</h2>
      <ul>
        <li>Total des produits : {stats.totalProducts}</li>
        <li>Stock total : {stats.totalStock}</li>
        <li>Produits en stock faible : {stats.lowStockCount}</li>
      </ul>
    </div>
  );
}
