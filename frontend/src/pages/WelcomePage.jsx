import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-10">
        {/* Top Navbar */}
        <header className="w-full bg-white shadow px-6 py-4 rounded-xl mb-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-700 tracking-tight">Mon ERP</h1>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow"
          >
            Se connecter
          </Link>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-10">
          <h2 className="text-5xl font-bold text-blue-600 mb-6 leading-tight">
            Bienvenue sur Mon ERP
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mb-8">
            Gérez votre entreprise avec une plateforme intuitive, rapide et tout-en-un.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition shadow"
          >
            Se connecter
          </button>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;