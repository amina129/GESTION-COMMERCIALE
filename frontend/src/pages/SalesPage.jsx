import React from "react";
import OrderForm from "../components/sales/OrderForm";
import OrderList from "../components/sales/OrderList";
import SalesReport from "../components/sales/SalesReport";

const SalesPage = () => (
  <div>
    <h2>Sales Management</h2>
    <OrderForm />
    <OrderList />
    <SalesReport />
  </div>
);

export default SalesPage;
