import React, { useContext } from "react";
import BudgetContext from "./GastosContext";

const ViviendaServicios = ({ expense, expenseIndex }) => {
  const { budgetExpenses, setExpense } = useContext(BudgetContext);

  const handleInputChange = (event, rangeId) => {
    const { value } = event.target;

    const expenseTMP = { ...expense };

    const budgetTMP = [...budgetExpenses.consolidatedDataGastos];
    let expenseTotal = 0;

    expenseTMP.subExpenses.map((item) => {
      if (item.id === rangeId) {
        item.value = value;
      }

      expenseTotal += parseInt(item.value);

      return item;
    });

    expenseTMP.value = expenseTotal;

    budgetTMP[expenseIndex] = expenseTMP;

    setExpense("consolidatedDataGastos", budgetTMP);
  };

  return (
    <div>
      <div>
        {expense.subExpenses.map((campo, index) => (
          <div className="form-group m-1 p-1" key={index}>
            <label htmlFor={campo.id + "Input"}>{campo.id}</label>
            <div className="input-group">
              <span className="input-group-text">$RD</span>
              <input
                type="number"
                className="form-control"
                id={campo.id + "Input"}
                name={campo.id + "Input"}
                value={campo.value || 0}
                onChange={(event) => handleInputChange(event, campo.id)}
              />
            </div>
            <div className="mx-4">
              <input
                type="range"
                className="form-range"
                min="0"
                max="100000"
                id={campo.id}
                value={campo.value || 0}
                onChange={(event) => handleInputChange(event, campo.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViviendaServicios;
