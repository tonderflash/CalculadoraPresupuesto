import React, { useContext } from "react";
import ViviendaServicios from "../gastos/ViviendaServicios";
import BudgetContext from "../gastos/GastosContext";

const FormIngresos = () => {
  const { budgetExpenses: expenses } = useContext(BudgetContext);

  return (
    <div className="container">
      <div className="row">
        {/* Vivienda y Servicios */}
        <h6>Registra tus Ingresos</h6>
        {expenses.consolidatedDataIngresos.map((expense, index) => (
          <div key={index} className="dropdown drop-size w-100">
            <button
              className="btn btn-secondary dropdown-toggle button-style w-100 text-start"
              style={{ height: "50px" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseIngresos${index}`}
              aria-expanded="false"
              aria-controls={`collapseIngresos${index}`}
            >
              {expense.nombre}
            </button>
            <ul
              className="collapse container"
              id={`collapseIngresos${index}`}
              style={{ backgroundColor: "#f5f5f6" }}
            >
              <ViviendaServicios
                expense={expense}
                expenseIndex={index}
                budgetGroup={"consolidatedDataIngresos"}
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormIngresos;
