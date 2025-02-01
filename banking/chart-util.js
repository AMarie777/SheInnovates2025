const Utils = {
    numbers({ count, min, max }) {
      return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min));
    },
    CHART_COLORS: {
      red: "#ff9999",
      orange: "#ffcc99",
      yellow: "#ffff99",
      green: "#99ff99",
      blue: "#99ccff",
    },
  };