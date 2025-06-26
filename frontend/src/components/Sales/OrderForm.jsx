import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderForm({ onSuccess }) {
  const [form, setForm] = useState({ customer: "", total_amount: 0 });
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/customers/")
      .then(res => setCustomers(res.data));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/orders/", form)
      .then(() => {
        onSuccess();
        setForm({ customer: "", total_amount: 0 });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="customer" value={form.customer} onChange={handleChange}>
        <option value="">Choisir un client</option>
        {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <input name="total_amount" type="number" value={form.total_amount} onChange={handleChange} />
      <button type="submit">Créer commande</button>
    </form>
  );
}
