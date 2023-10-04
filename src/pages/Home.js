import React, { useCallback, useMemo } from "react";
import Gastos from "../components/gastos/Gastos";
import Ingresos from "../components/ingresos/Ingresos";
import Ahorros from "../components/ahorros/Ahorros";
import PieChart from "../components/PieChart";
import { useContext } from "react";
import BudgetContext from "../components/gastos/GastosContext";
import { NumericFormat } from "react-number-format";
import "./style.css";
import ExportFiles from "../components/ExportFiles";
import ResponseGenerated from "../components/ResponseGenerated";

const Home = () => {
  const { budgetExpenses } = useContext(BudgetContext);
  const graphLegend = budgetExpenses.consolidatedDataGastos.concat(
    budgetExpenses.consolidatedDataAhorros
  );

  const filteredGraphLegend = graphLegend
    .map((item) => {
      return {
        ...item,
        subExpenses: item.subExpenses.filter((subItem) => subItem.value !== 0),
      };
    })
    .filter((item) => item.value !== 0 || item.subExpenses.length > 0);

  const calculateTotal = useCallback(
    (budgetGroup) => {
      return budgetExpenses[budgetGroup].reduce((acc, item) => {
        return acc + item.value;
      }, 0);
    },
    [budgetExpenses]
  );

  const incomes = budgetExpenses.consolidatedDataIngresos;
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

  console.log("summary", summary);

  return (
    <div>
      <div style={{ maxWidth: "951px" }}>
        <div className="p-2 m-2 mb-2 pb-1 mt-4 text-black">
          <h3>Calculadora de Presupuesto</h3>
          <h4 style={{ fontWeight: 200 }} className="font-weight-200">
            Aprende a tomar Control de tus gastos
          </h4>
        </div>
        <div style={{ backgroundColor: "#ffffff", borderRadius: 12 }}>
          <div className=" d-flex flex-column">
            <div className="box-style" style={{ overflowX: "hidden" }}>
              <div className="m-3">
                <p style={{ fontWeight: 400, fontSize: "0.8em" }}>
                  {/* descripcion aqui */}
                </p>
              </div>
              <div className="row ml-0">
                {/* Left Column */}
                <div
                  className="col-md-6 mb-4"
                  style={{
                    maxHeight: "100vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                >
                  <div className="mt-2">
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
                <div
                  style={{ backgroundColor: "#f5f5f6", borderRadius: 12 }}
                  className="col-md-6 p-4"
                >
                  <h5 className="text-center mt-1">
                    DESGLOSE DEL PRESUPUESTO MENSUAL
                  </h5>
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
                        <p style={{ fontWeight: 300 }} className="p-17">
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
                    <div
                      className="card mt-2 mb-2"
                      style={{ backgroundColor: "#f5f5f6", borderRadius: 0 }}
                    >
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
            <div className="mt-3 mb-3 text-center d-flex">
              <div
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#f5eef6",
                  width: "100%",
                  padding: "5px",
                  alignItems: "center",
                }}
                className="d-flex mb-3 width-100"
              >
                <ResponseGenerated budgetData={budgetExpenses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
