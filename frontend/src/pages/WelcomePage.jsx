import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar"; // fixed relative import

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
<div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Top Navbar inside main content */}
        <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Mon ERP</h1>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Se connecter
          </Link>
        </header>

        {/* Welcome text */}
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Bienvenue sur Mon ERP</h2>
        <p className="text-gray-700 max-w-xl mb-6">
          Simplifiez la gestion de votre entreprise avec une solution ERP complète et facile à utiliser.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Se connecter
        </button>
      </main>
    </div>
  );
};

export default WelcomePage;
