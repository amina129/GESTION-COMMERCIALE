import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDetail({ orderId }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/erp/orders/${orderId}/`)
      .then(res => setOrder(res.data));
  }, [orderId]);

  if (!order) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Détails de la commande #{order.id}</h2>
      <p>Client: {order.customer_name}</p>
      <p>Montant total: {order.total_amount}</p>
      {/* Extend for order items if needed */}
    </div>
  );
}
