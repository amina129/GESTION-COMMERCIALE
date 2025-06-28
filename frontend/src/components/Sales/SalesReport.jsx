import { useEffect, useState } from "react";
import axios from "axios";

export default function SalesReport() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/erp/orders/")
      .then(res => setOrders(res.data));
  }, []);

  const total = orders.reduce((sum, o) => sum + parseFloat(o.total_amount), 0);

  return (
    <div>
      <h2>Rapport des ventes</h2>
      <p>Total des commandes : {orders.length}</p>
      <p>Montant total : {total.toFixed(2)} DT</p>
    </div>
  );
}
