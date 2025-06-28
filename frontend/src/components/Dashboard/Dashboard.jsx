import React from 'react';
import CustomerInsight from './CustomerInsights';
import KPIWidget from './KPIWidget';
import SalesChart from './SalesChart';
import TopProduct from './TopProducts';

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
