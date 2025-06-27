import React from "react";
import InventoryTracker from '../components/Inventory/InventoryTracker';
import ProductList from '../components/Inventory/ProductList';
import LowStockAlert from '../components/Inventory/LowStockAlert';

const InventoryPage = () => (
  <div>
    <h2>Inventory Management</h2>
    <InventoryTracker />
    <LowStockAlert />
    <ProductList />
  </div>
);

export default InventoryPage;
