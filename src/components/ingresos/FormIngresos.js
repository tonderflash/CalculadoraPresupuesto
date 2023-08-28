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
            <>
              <div className="dropdown drop-size">
                <button
                  className="btn btn-secondary dropdown-toggle button-style text-start"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                <ul className="dropdown-menu col-12 menu-size">
                  <ViviendaServicios expense={expense} expenseIndex={index} />
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormIngresos;
