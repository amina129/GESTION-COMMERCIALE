import { useState } from "react";
import axios from "axios";

export default function CustomerForm({ onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/customers/", form)
      .then(() => {
        onSuccess();
        setForm({ name: "", email: "", phone: "", address: "" });
      })
      .catch(err => console.error("Erreur:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nom" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} required />
      <textarea name="address" placeholder="Adresse" value={form.address} onChange={handleChange} required />
      <button type="submit">Ajouter client</button>
    </form>
  );
}
