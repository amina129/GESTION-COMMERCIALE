import OrderForm from '../components/Sales/OrderForm';
import OrderList from '../components/Sales/OrderList';
import SalesReport from '../components/Sales/SalesReport';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import React, { useEffect, useState } from "react";

const SalesPage = () => 
  {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API or heavy data fetching delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
   if (loading) return <LoadingSpinner message="Chargement des ventes..." />;

  return (
  <div>
    <h2>Sales Management</h2>
    <OrderForm />
    <OrderList />
    <SalesReport />
  </div>
);
};
export default SalesPage;
