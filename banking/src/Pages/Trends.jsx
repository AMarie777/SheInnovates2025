import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./Trends.css";
import data from "./Shelly_bank.json"; 

ChartJS.register(ArcElement, Tooltip, Legend);

const getCurrentMonthTransactions = (transactions) => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    return transactions.filter(transaction => {
        if (!transaction.transaction_date) return false; // Ensure date exists
        const [year, month, day] = transaction.transaction_date.split("-").map(Number);
        return year === currentYear && month - 1 === currentMonth; // Month is 0-indexed
    });
};

//Categorize transactions based on category property
const categorizeTransactions = (transactions) => {
  const categories = {};
  
  transactions.forEach(transaction => {
    const category = transaction.category;
    categories[category] = (categories[category] || 0) + transaction.amount; // Sum up amounts
  });

  return categories;
};

const Trends = () => {
  const [filterOption, setFilterOption] = useState("month"); // Default to monthly view
  const [key, setKey] = useState(0);// force reset 
  const handleFilterChange = (option) => {
    setFilterOption(option);
    setKey(prevKey => prevKey + 1);
  };
  const allTransactions = data.transactions.filter(trans => trans.user_id === 1);
  const filteredTransactions = filterOption === "month" ? getCurrentMonthTransactions(allTransactions) : allTransactions;

  const categorizedData = categorizeTransactions(filteredTransactions);
  const labels = Object.keys(categorizedData);
  const dataValues = Object.values(categorizedData);

  const chartData = {
    labels: labels, 
    datasets: [
      {
        label: "Spending Breakdown",
        data: dataValues,
        backgroundColor: ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff", "#C8A2C8", "#Fb6f92"],
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
            return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
          }
        }
      }
    }
  };

  return (
    <div className="trends">
      <h1>Trends&#128202;</h1>
      <p><b>View your monthly spending insights and trends</b></p>

      {/* Toggle Buttons */}
      <div className="filter-buttons">
      <button 
         className={filterOption === "month" ? "active" : ""}
         onClick={() => handleFilterChange("month")}
              >
                This Month
              </button>
              <button
                  className={filterOption === "all" ? "active" : ""}
                  onClick={() => handleFilterChange("all")}
              >
                  All Transactions
              </button>
      </div>

      <div style={{ padding: '50px', width: '60%', margin: 'auto' }}>
      <Pie key={key} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Trends;
