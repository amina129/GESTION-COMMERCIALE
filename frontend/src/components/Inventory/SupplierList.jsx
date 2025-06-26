import { useEffect, useState } from "react";
import axios from "axios";

export default function SupplierList() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/suppliers/")
      .then(res => setSuppliers(res.data))
      .catch(err => console.error("Erreur:", err));
  }, []);

  return (
    <div>
      <h2>Fournisseurs</h2>
      <ul>
        {suppliers.map(s => (
          <li key={s.id}>{s.name} – {s.contact_info}</li>
        ))}
      </ul>
    </div>
  );
}
