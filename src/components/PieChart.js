import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    backgroundColor: [
      "rgba(0, 0, 255, 0.6)", // Azul
      "rgba(0, 128, 0, 0.6)", // Verde
      "rgba(255, 165, 0, 0.6)", // Naranja
      "rgba(255, 0, 0, 0.6)", // Rojo
      "rgba(128, 0, 128, 0.6)", // Púrpura
      "rgba(255, 255, 0, 0.6)", // Amarillo
      "rgba(255, 105, 180, 0.6)", // Rosa
      "rgba(128, 128, 128, 0.6)", // Gris
      "rgba(0, 128, 128, 0.6)" // Teal 
    ],
  };

  const data = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 20, 10],
        backgroundColor: chartData.backgroundColor,
      },
    ],
  };

  return (
    <div className="container">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
