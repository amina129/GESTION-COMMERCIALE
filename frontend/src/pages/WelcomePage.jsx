import React from "react";
import { Link } from "react-router-dom";

const modules = [
  { title: "Ventes", description: "Gérez vos devis, commandes et factures de vente.", icon: "🛒" },
  { title: "Achats", description: "Suivez vos fournisseurs et commandes d'achat.", icon: "📦" },
  { title: "Comptabilité", description: "Automatisez la comptabilité de votre entreprise.", icon: "💰" },
  { title: "Stock", description: "Gérez les niveaux de stock, les entrées et les sorties.", icon: "📊" },
  { title: "Ressources humaines", description: "Suivez les employés, les présences et les salaires.", icon: "👥" },
  { title: "Point de Vente (POS)", description: "Vendez vos produits via une interface intuitive.", icon: "🖥️" },
];

const WelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Mon ERP</h1>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Se connecter
        </Link>
      </header>

      {/* Main content area: Sidebar + Welcome message */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Modules principaux</h2>
          <div className="space-y-5">
            {modules.map((mod, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="text-2xl">{mod.icon}</div>
                <div>
                  <h3 className="font-semibold">{mod.title}</h3>
                  <p className="text-sm text-gray-600">{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Welcome text */}
        <main className="flex-1 flex flex-col justify-center items-center text-center px-8 bg-gray-50">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Bienvenue sur Mon ERP</h2>
          <p className="text-gray-700 max-w-xl mb-6">
            Simplifiez la gestion de votre entreprise avec une solution ERP complète et facile à utiliser.
          </p>
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Se connecter
          </Link>
        </main>
      </div>
    </div>
  );
};

export default WelcomePage;
