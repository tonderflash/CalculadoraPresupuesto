import React, { useState } from "react";
import Home from "./pages/Home";
import BudgetContext from "./components/gastos/GastosContext";

function App() {
  const [budgetExpenses, setBudgetExpenses] = useState({
    consolidatedDataAhorros: [],
    consolidatedDataGastos: [
      // { color: "green", nombre: "Entretenimiento", value: 0 },
      // { color: "orange", nombre: "Suministro del Hogar", value: 0 },
      // { color: "red", nombre: "Alimentos y Comestibles", value: 0 },
      // { color: "purple", nombre: "Transporte", value: 0 },
      // { color: "yellow", nombre: "Salud", value: 0 },
      // { color: "pink", nombre: "Infantil", value: 0 },
      // { color: "gray", nombre: "Deudas", value: 0 },

      {
        color: "blue",
        nombre: "Vivienda y Servicios",
        value: 0,
        subExpenses: [
          { id: "rentaInput", value: 0 },
          { id: "prestamoHipotecarioInput", value: 0 },
          { id: "impuestosPropiedadInput", value: 0 },
          { id: "seguroInmbiliarioInput", value: 0 },
          { id: "energíaElectricaInput", value: 0 },
          { id: "celularInput", value: 0 },
          { id: "cableInput", value: 0 },
          { id: "internetInput", value: 0 },
          { id: "gasInput", value: 0 },
          { id: "matenimientoInput", value: 0 },
          { id: "servivioDomesticoInput", value: 0 },
          { id: "otrosInput", value: 0 },
        ],
      },
      {
        color: "teal",
        nombre: "Ahorros",
        value: 0,
        subExpenses: [
          { id: "FondoEmergenciaInput", value: 0 },
          { id: "FondoVacacionesInput", value: 0 },
          { id: "FondoJubilaciónInput", value: 0 },
          { id: "FondoEducacionInput", value: 0 },
          { id: "FondoReduccionDeudasInput", value: 0 },
          { id: "FondoInversionInput", value: 0 },
        ],
      },
    ],
  });

  const setExpense = (expense, value) => {
    setBudgetExpenses((prev) => ({
      ...prev,
      [expense]: value,
    }));
  };

  return (
    <BudgetContext.Provider value={{ budgetExpenses, setExpense }}>
      <div>
        <Home />
      </div>
    </BudgetContext.Provider>
  );
}

export default App;
