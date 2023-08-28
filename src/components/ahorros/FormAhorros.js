import React, { useContext } from "react";
import ViviendaServicios from "../gastos/ViviendaServicios";
import BudgetContext from "../gastos/GastosContext";

const FormAhorros = () => {
  const { budgetExpenses: expenses } = useContext(BudgetContext);

  return (
    <div className="container">
      <div className="row">
        {/* Vivienda y Servicios */}
        {expenses.consolidatedDataAhorros.map((expense, index) => (
          <div key={index} className="dropdown drop-size w-100">
            <button
              className="btn btn-secondary dropdown-toggle w-100 button-style text-start"
              style={{ height: "50px" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseAhorro${index}`}
              aria-expanded="false"
              aria-controls={`collapseAhorro${index}`}
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
              id={`collapseAhorro${index}`}
              style={{ backgroundColor: "#f5f5f6" }}
            >
              <ViviendaServicios
                expense={expense}
                expenseIndex={index}
                budgetGroup={"consolidatedDataAhorros"}
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormAhorros;
