import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage";
import SalesPage from "./pages/SalesPage";
import Navbar from './components/Shared/Navbar';
import Sidebar from './components/Shared/Sidebar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';



function App() {
  // ✅ Declare user state properly
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // ✅ Set user on login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // ✅ Clear user on logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      {user && <Navbar logout={logout} />}
      <div style={{ display: "flex" }}>
        {user && <Sidebar />}
        <div style={{ marginLeft: "200px", padding: "20px", flex: 1 }}>
         <Routes>
  <Route
    path="/login"
    element={!user ? <LoginPage login={login} /> : <Navigate to="/inventory" />}
  />
  <Route
    path="/inventory"
    element={user ? <InventoryPage /> : <Navigate to="/login" />}
  />
  <Route
    path="/sales"
    element={user ? <SalesPage /> : <Navigate to="/login" />}
  />
  <Route
    path="*"
    element={<Navigate to={user ? "/inventory" : "/login"} />}
  />
  <Route
  path="/signup"
  element={!user ? <SignUpPage login={login} /> : <Navigate to="/inventory" />}
/>

</Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
