import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import data from "./Shelly_bank.json"; // Import the JSON file directly

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Subscriptions = () => {
  const [chartData, setChartData] = useState(null);  // Set initial state to null to indicate data isn't loaded yet

  useEffect(() => {
    if (data && data.subscriptions) { // Ensure data and subscriptions are available
      const labels = data.subscriptions.map(item => item.description); // Subscription descriptions
      const amounts = data.subscriptions.map(item => item.amount); // Subscription amounts

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Monthly Recurring Charges ($)',
            data: amounts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      });
    } else {
      console.error("Error: Data or subscriptions not found");
    }
  }, [data]); // useEffect triggers when data is available

  if (!chartData) {
    return <div>Loading...</div>; // Display a loading message until the data is loaded
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Recurring Charges'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Subscription'
        }
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Amount ($)'
        }
      }
    }
  };

  return (
    <div>
      <h1>Subscriptions</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Subscriptions;
