import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function SalesChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sales-chart-data/')
      .then(res => {
        const data = res.data;
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Sales',
              data: data.sales,
              fill: false,
              borderColor: 'blue',
              tension: 0.1,
            },
          ],
        });
      })
      .catch(err => console.error('Error loading sales chart data:', err));
  }, []);

  return (
    <div>
      <h2>Sales Chart</h2>
      <Line data={chartData} />
    </div>
  );
}

export default SalesChart;
