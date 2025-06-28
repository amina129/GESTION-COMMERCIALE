import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = () => {
    axios.get("http://127.0.0.1:8000/api/erp/customers/")
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err));
  };

  useEffect(fetchCustomers, []);

  return (
    <div>
      <h2>Liste des clients</h2>
      <ul>
        {customers.map(c => (
          <li key={c.id}>{c.name} – {c.email}</li>
        ))}
      </ul>
    </div>
  );
}
