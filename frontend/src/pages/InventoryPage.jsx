import React, { useState, useEffect } from "react";
import InventoryTracker from '../components/Inventory/InventoryTracker';
import ProductList from '../components/Inventory/ProductList';
import LowStockAlert from '../components/Inventory/LowStockAlert';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const InventoryPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for real API fetches to complete
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2>Inventory Management</h2>
      <InventoryTracker />
      <LowStockAlert />
      <ProductList />
    </div>
  );
};

export default InventoryPage;
