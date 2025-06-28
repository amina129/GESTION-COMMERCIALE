import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/erp/orders/')
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur lors du chargement des commandes :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des commandes...</p>;

  return (
    <div>
      <h2>Liste des commandes</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Date</th>
            <th>Montant total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_name || order.customer}</td>
              <td>{order.date}</td>
              <td>{order.total_amount} DT</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
