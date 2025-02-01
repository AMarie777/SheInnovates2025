document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myDoughnutChart").getContext("2d");
  
    const data = {
      labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
      datasets: [
        {
          label: "Dataset 1",
          data: [20, 90, 25, 15, 10], // Example values
          backgroundColor: ["#ff9999", "#ffcc99", "#ffff99", "#99ff99", "#99ccff"], // Pastel colors
          borderColor: "#ffffff",
          borderWidth: 4,
        },
      ],
    };
  
    const config = {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Financial Tracker",
            font: {
              size: 18,
            },
          },
        },
      },
    };
  
    new Chart(ctx, config);
  });