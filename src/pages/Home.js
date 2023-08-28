import React, { useCallback, useMemo } from "react";

import Gastos from "../components/gastos/Gastos";
import Ingresos from "../components/ingresos/Ingresos";
import Ahorros from "../components/ahorros/Ahorros";
import PieChart from "../components/PieChart";
import { useContext } from "react";
import BudgetContext from "../components/gastos/GastosContext";
import { NumericFormat } from "react-number-format";

const Home = () => {
  const { budgetExpenses } = useContext(BudgetContext);

  const graphLegend = budgetExpenses.consolidatedDataGastos.concat(
    budgetExpenses.consolidatedDataAhorros
  );

  const calculateTotal = useCallback(
    (budgetGroup) => {
      return budgetExpenses[budgetGroup].reduce((acc, item) => {
        return acc + item.value;
      }, 0);
    },
    [budgetExpenses]
  );

  const summary = useMemo(() => {
    const totalIncome = calculateTotal("consolidatedDataIngresos");
    const totalExpenses = calculateTotal("consolidatedDataGastos");
    const totalSavings = calculateTotal("consolidatedDataAhorros");

    return {
      totalIncome,
      totalExpenses: totalExpenses + totalSavings,
      totalRemaining: totalIncome - totalExpenses - totalSavings,
    };
  }, [budgetExpenses]);

  return (
    <div>
      <div className="mt-4" style={{ backgroundColor: "#ffffff", borderRadius: 12 }}>
        <div className="container d-flex flex-column">
          <div className="p-2 m-2 text-style">
            <h3>Budgeting Calculator</h3>
            <h4>Learn how to gain control of your saving and spending</h4>
          </div>
          <div className="box-style">
            <div className="m-3">
              <p>Use this budget calculator to plan for your savings goals and manage your expenses.
                Fill out all fields that apply to you, and make adjustments to see how you could
                save more. In the income field, enter your take-home pay—the amount you have after
                withholding taxes, paying for benefits, or contributing to pre-tax retirement
                accounts.</p>
            </div>
            <div className="row m-4">
              {/* Left Column */}
              <div className="col-md-6 mb-4">
                <div className="mt-3">
                  <Ingresos />
                </div>
                <div>
                  <Gastos />
                </div>
                <div>
                  <Ahorros />
                </div>
              </div>
              {/* Right Column with Gray Background */}
              <div className="col-md-6" style={{ backgroundColor: "#f5f5f6", borderRadius: 12 }}>
                <h5 className="text-center mt-1">DESGLOSE DEL PRESUPUESTO MENSUAL</h5>
                <div className="container chart-size">
                  <PieChart />
                </div>
                <div>
                  {graphLegend.map((elemento, index) => (
                    <div className="flex-container" key={index}>
                      <span
                        style={{ backgroundColor: elemento.color }}
                        className="color-circle"
                      ></span>
                      <p className="p-16" style={{ flex: 1 }}>
                        {elemento.nombre}
                      </p>
                      <p className="p-17">
                        <NumericFormat
                          value={elemento.value}
                          displayType={"text"}
                          thousandSeparator={true}
                        />{" "}
                        RD$
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="card mt-2 mb-2" style={{ backgroundColor: "#f5f5f6", borderRadius: 0 }}>
                    <div className="card-body">
                      <div className="card-text custom-text">
                        <div className="d-flex justify-content-between">
                          Ingreso mensual total
                          <span>
                            RD$
                            <NumericFormat
                              value={summary.totalIncome}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </span>
                        </div>
                        <div className="card-text custom-text">
                          <div className="d-flex justify-content-between">
                            Gastos mensuales totales
                            <span>
                              RD$
                              <NumericFormat
                                value={summary.totalExpenses}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </span>{" "}
                          </div>
                        </div>
                        <hr />
                        <div className="card-text custom-text">
                          <div className="d-flex justify-content-between">
                            Fondos mensuales restantes
                            <span>
                              RD${" "}
                              <NumericFormat
                                value={summary.totalRemaining}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Home;
