import React from "react";
import InventoryTracker from "../components/inventory/InventoryTracker";
import ProductList from "../components/inventory/ProductList";
import LowStockAlert from "../components/inventory/LowStockAlert";

const InventoryPage = () => (
  <div>
    <h2>Inventory Management</h2>
    <InventoryTracker />
    <LowStockAlert />
    <ProductList />
  </div>
);

export default InventoryPage;
