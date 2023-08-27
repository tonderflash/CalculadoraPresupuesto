import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const GastosChart = ({
  ViviendaServiciosData,
  SuministroHogarData,
  AlimentosComestiblesData,
  TransporteData,
  SaludData,
  InfantilData,
  DeudasData,
}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    labels: [
      "Vivienda y Servicios",
      "Suministro del Hogar",
      "Alimentos y Comestibles",
      "Transporte",
      "Salud",
      "Infantil",
      "Deudas",
    ],
    backgroundColor: [
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(75, 192, 192, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 0, 0, 0.6)",
      "rgba(0, 255, 0, 0.6)",
    ],
  };

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: [
          ViviendaServiciosData,
          SuministroHogarData,
          AlimentosComestiblesData,
          TransporteData,
          SaludData,
          InfantilData,
          DeudasData,
        ],
        backgroundColor: chartData.backgroundColor,
      },
    ],
  };

  return (
    <div className="chart-size">
      <Pie data={data} />
    </div>
  );
};

export default GastosChart;
