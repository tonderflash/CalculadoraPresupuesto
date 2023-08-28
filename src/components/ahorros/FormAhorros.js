import React, { useContext } from "react";
import ViviendaServicios from "../gastos/ViviendaServicios";
import BudgetContext from "../gastos/GastosContext";

const FormAhorros = () => {
  const { budgetExpenses: expenses } = useContext(BudgetContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Vivienda y Servicios */}
          {expenses.consolidatedDataAhorros.map((expense, index) => (
            <div key={index} className="dropdown drop-size">
              <button
                className="btn btn-secondary dropdown-toggle button-style text-start"
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
              <ul className="collapse container" id={`collapseAhorro${index}`} style={{ backgroundColor: "#d3d3d3" }}>
                <ViviendaServicios expense={expense} expenseIndex={index} />
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormAhorros;
