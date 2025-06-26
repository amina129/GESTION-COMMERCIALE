import React, { useEffect, useState } from 'react';
import axios from 'axios';

function KPIWidget() {
  const [kpi, setKpi] = useState({ sales: 0, revenue: 0, orders: 0 });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/kpis/')
      .then(res => setKpi(res.data))
      .catch(err => console.error('Error fetching KPIs:', err));
  }, []);

  return (
    <div>
      <h2>Key Performance Indicators</h2>
      <ul>
        <li>Total Sales: {kpi.sales}</li>
        <li>Total Revenue: ${kpi.revenue}</li>
        <li>Total Orders: {kpi.orders}</li>
      </ul>
    </div>
  );
}

export default KPIWidget;
