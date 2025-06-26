import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CustomerInsight() {
  const [insights, setInsights] = useState({ totalCustomers: 0, newCustomers: 0 });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/customer-insights/')
      .then(res => setInsights(res.data))
      .catch(err => console.error('Error loading customer insights:', err));
  }, []);

  return (
    <div>
      <h2>Customer Insights</h2>
      <p>Total Customers: {insights.totalCustomers}</p>
      <p>New Customers This Month: {insights.newCustomers}</p>
    </div>
  );
}

export default CustomerInsight;
