import React, { useContext } from "react";
import ViviendaServicios from "./ViviendaServicios";
import BudgetContext from "./GastosContext";

const FormGastos = () => {
  const { budgetExpenses: expenses } = useContext(BudgetContext);

  return (
    <div className="container">
      <div className="row">
        {/* Vivienda y Servicios */}
        <h6>Ingresa tus Gastos</h6>
        {expenses.consolidatedDataGastos.map((expense, index) => (
          <div key={index} className="dropdown drop-size w-100">
            <button
              className="btn btn-secondary dropdown-toggle w-100 button-style text-start"
              style={{ height: "50px" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseGastos${index}`}
              aria-expanded="false"
              aria-controls={`collapseGastos${index}`}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: expense.color,
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              {expense.nombre}
            </button>
            <ul
              className="collapse container"
              id={`collapseGastos${index}`}
              style={{ backgroundColor: "#f5f5f6" }}
            >
              <ViviendaServicios
                expense={expense}
                expenseIndex={index}
                budgetGroup={"consolidatedDataGastos"}
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormGastos;
