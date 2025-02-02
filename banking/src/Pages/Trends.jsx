import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./Trends.css";
import data from "./Shelly_bank.json"; // Import the JSON file

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

// Categorize transactions based on category property
const categorizeTransactions = (transactions) => {
  const categories = {};

  transactions.forEach(transaction => {
    const category = transaction.category; 
    if (categories[category]) {
      categories[category] += transaction.amount; // add up
    } else {
      categories[category] = transaction.amount;
    }
  });

  return categories;
};

const transactions = data.transactions.filter(trans => trans.user_id === 1); 
const categorizedData = categorizeTransactions(transactions);

const labels = Object.keys(categorizedData); 
const dataValues = Object.values(categorizedData); 

const chartData = {
  labels: labels, 
  datasets: [
    {
      label: "Spending Breakdown",
      data: dataValues, 
      backgroundColor: ["#ff9999", "#ffcc99", "#ffff99", "#99ff99", "#99ccff", "#C8A2C8", "#Fb6f92"], 
      borderColor: "#ffffff",
      borderWidth: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          const label = tooltipItem.label || '';
          const value = tooltipItem.raw;
          return `${label}: $${value.toFixed(2)}`; // Format dollas
        }
      }
    }
  }
};

const Trends = () => {
  return (
    <div className="trends">
      <h1>Trends</h1>
      <p>View your monthly spending insights and trends</p>

      <div
        style={{
          padding: '50px',
          width: '60%',
          margin: 'auto'
        }}>

        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Trends;
