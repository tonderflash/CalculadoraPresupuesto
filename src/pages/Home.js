import React, { useCallback, useMemo, useState } from "react";

import { TypeAnimation } from "react-type-animation";
import Gastos from "../components/gastos/Gastos";
import Ingresos from "../components/ingresos/Ingresos";
import Ahorros from "../components/ahorros/Ahorros";
import PieChart from "../components/PieChart";
import { useContext } from "react";
import BudgetContext from "../components/gastos/GastosContext";
import { NumericFormat } from "react-number-format";
import { ReactComponent as PromptLogo } from "../assets/img/prompt.svg";

import "./style.css";

const Home = () => {
  const { budgetExpenses } = useContext(BudgetContext);
  // const [counter, setCounter] = useState(0);

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

  console.log("gastos", JSON.stringify(filteredGraphLegend));
  console.log("incomes", JSON.stringify(incomes));

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
      <div className="container">
        <div className="p-2 m-2 mb-2 pb-1 mt-4 text-white">
          <h3>Calculadora de Presupuesto</h3>
          <h4 style={{ fontWeight: 200 }} className="font-weight-200">
            Aprende a tomar Control de tus gastos
          </h4>
        </div>
        <div style={{ backgroundColor: "#ffffff", borderRadius: 12 }}>
          <div className="container d-flex flex-column">
            <div className="box-style" style={{ overflowX: "hidden" }}>
              <div className="m-3">
                <p style={{ fontWeight: 400, fontSize: "0.8em" }}>
                  Utiliza esta calculadora de presupuesto para planificar tus
                  objetivos de ahorro y gestionar tus gastos. Completa todos los
                  campos que te apliquen y haz ajustes para ver cómo podrías
                  ahorrar más. En el campo de ingresos, introduce tu salario
                  neto, es decir, la cantidad que tienes después de deducir
                  impuestos, pagar beneficios o contribuir a cuentas de
                  jubilación antes de impuestos.
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
                  className="col-md-6"
                  style={{ backgroundColor: "#f5f5f6", borderRadius: 12 }}
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
                  <div className="mt-3 mb-3 text-center d-flex flex-column align-items-center ">
                    <div
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f5eef6",
                        padding: "9px",
                        alignItems: "center",
                      }}
                      className="d-flex mb-3 w-100 justify-content-between"
                    >
                      <button className="btn btn-ia mr-3 mb-0">
                        <PromptLogo className="svg-logo mr-2" />
                        Generar
                      </button>
                      <div className="description">
                        Genera tu asesoramiento financiero con inteligencia
                        artificial
                      </div>
                    </div>
                    <div className="response-style w-100">
                      <TypeAnimation
                        sequence={[
                          "One", // Types 'One'
                          1000, // Waits 1s
                          "Two", // Deletes 'One' and types 'Two'
                          2000, // Waits 2s
                          "Two Three", // Types 'Three' without deleting 'Two'
                          () => {
                            console.log("Sequence completed");
                          },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "2em", display: "inline-block" }}
                      />
                    </div>
                    <button className="btn btn-success w-100">
                      Descargar Resumen
                    </button>
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
