import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import InventoryPage from "./pages/InventoryPage";
import SalesPage from "./pages/SalesPage";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import WelcomePage from "./pages/WelcomePage";
import Dashboard from './components/Dashboard/Dashboard';
import BillingDashboard from './components/Dashboard/BillingDashboard';
import POSInterface from './components/POS/POSInterface';
import Navbar from './components/Shared/Navbar';
import Sidebar from './components/Shared/Sidebar';

function AppWrapper() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
   

   const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // ⚠️ Don't call navigate('/') here — we do it in useEffect
  };
  return (
    <>
      {user && <Navbar logout={logout} />}
      <div style={{ display: 'flex' }}>
        {user && <Sidebar />}
        <div style={{ marginLeft: user ? '200px' : '0', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />

            <Route path="/login" element={<LoginPage login={login} />} />
            <Route path="/signup" element={<SignUpPage login={login} />} />

            {/* Protected Routes */}
            <Route
              path="/inventory"
              element={user ? <InventoryPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/sales"
              element={user ? <SalesPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/billing"
              element={user ? <BillingDashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/POS"
              element={user ? <POSInterface /> : <Navigate to="/login" />}
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

// Wrap App with Router
export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
