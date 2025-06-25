import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/clients/")
      .then(response => setClients(response.data))
      .catch(error => console.error("Erreur:", error));
  }, []);

  return (
    <div>
      <h1>Liste des clients</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
