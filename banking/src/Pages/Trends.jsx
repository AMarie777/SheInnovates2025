import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const data = {
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 90, 25, 15, 10], // Example values
        backgroundColor: ["#ff9999", "#ffcc99", "#ffff99", "#99ff99", "#99ccff"], // Pastel colors
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };
  const options = {}

const Trends = () => {

    return (

        /*JSX elements must have at least one parent element */

        <div>

            <h1>Trends</h1>

            <p>View your monthly spending insights and trends</p>
        <div
            style={
            {
                padding: '100px',
                width: '50%'
            }
            } >
            <Pie
            data = {data}
            options = {options}
            >

            </Pie>

            </div>
        </div>

    );
}

export default Trends