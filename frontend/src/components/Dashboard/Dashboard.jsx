import React from 'react';
import CustomerInsight from './CustomerInsight';
import KPIWidget from './KPIWidget';
import SalesChart from './SalesChart';
import TopProduct from './TopProduct';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <KPIWidget />
      <CustomerInsight />
      <SalesChart />
      <TopProduct />
    </div>
  );
}

export default Dashboard;
