import React from "react";
import OrderForm from '../components/Sales/OrderForm';
import OrderList from '../components/Sales/OrderList';
import SalesReport from '../components/Sales/SalesReport';

const SalesPage = () => (
  <div>
    <h2>Sales Management</h2>
    <OrderForm />
    <OrderList />
    <SalesReport />
  </div>
);

export default SalesPage;
