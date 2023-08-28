import React, { useContext, useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import BudgetContext from "./gastos/GastosContext";

const PieChart = () => {
  const { budgetExpenses } = useContext(BudgetContext);

  const summedData = budgetExpenses.consolidatedDataGastos.map(
    (item) => item.value
  );

  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    backgroundColor: budgetExpenses.consolidatedDataGastos.map(
      (item) => item.color
    ),
  };

  const summedDataInitialized = useMemo(() => {
    return summedData.find((item) => item !== 0);
  }, [summedData]);

  const data = {
    datasets: [
      {
        data: summedDataInitialized ? summedData : [1, 1, 1, 1, 1, 1, 1, 1, 1],
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
