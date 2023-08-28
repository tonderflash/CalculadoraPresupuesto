import React, { useContext } from "react";
import ViviendaServicios from "../gastos/ViviendaServicios";
import BudgetContext from "../gastos/GastosContext";

const FormIngresos = () => {
  const { budgetExpenses: expenses } = useContext(BudgetContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Vivienda y Servicios */}
          {expenses.consolidatedDataIngresos.map((expense, index) => (
            <div key={index} className="dropdown drop-size">
              <button
                className="btn btn-secondary dropdown-toggle button-style text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseIngresos${index}`}
                aria-expanded="false"
                aria-controls={`collapseIngresos${index}`}
              >
                {expense.nombre}
              </button>
              <ul className="collapse container" id={`collapseIngresos${index}`} style={{ backgroundColor: "#d3d3d3" }}>
                <ViviendaServicios expense={expense} expenseIndex={index} />
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormIngresos;
