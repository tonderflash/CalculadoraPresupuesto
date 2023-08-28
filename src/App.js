import React, { useState } from "react";
import Home from "./pages/Home";
import BudgetContext from "./components/gastos/GastosContext";

function App() {
  const [budgetExpenses, setBudgetExpenses] = useState({
    consolidatedDataIngresos: [
      {
        nombre: "Ingresos por Salario",
        value: 0,
        subExpenses: [
          { id: "salario", value: 0 },
          { id: "incentivo", value: 0 },
          { id: "pensiones", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por inversiones",
        value: 0,
        subExpenses: [
          { id: "Alquileres", value: 0 },
          { id: "Dividendos", value: 0 },
          { id: "GananciasDeCapital", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Donaciones",
        value: 0,
        subExpenses: [
          { id: "Donaciones", value: 0 },
          { id: "Subsidios", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Emprendimiento",
        value: 0,
        subExpenses: [
          { id: "VentasBienesServicios", value: 0 },
          { id: "Freelance", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Irregulares",
        value: 0,
        subExpenses: [{ id: "Otros Ingresos", value: 0 }],
      },
    ],
    consolidatedDataAhorros: [
      {
        color: "teal",
        nombre: "Ahorros",
        value: 0,
        subExpenses: [
          { id: "FondoEmergencia", value: 0 },
          { id: "FondoVacaciones", value: 0 },
          { id: "FondoJubilación", value: 0 },
          { id: "FondoEducacion", value: 0 },
          { id: "FondoReduccionDeudas", value: 0 },
          { id: "FondoInversion", value: 0 },
        ],
      },
    ],
    consolidatedDataGastos: [
      {
        color: "blue",
        nombre: "Vivienda y Servicios",
        value: 0,
        subExpenses: [
          { id: "renta", value: 0 },
          { id: "prestamoHipotecario", value: 0 },
          { id: "impuestosPropiedad", value: 0 },
          { id: "seguroInmbiliario", value: 0 },
          { id: "energíaElectrica", value: 0 },
          { id: "celular", value: 0 },
          { id: "cable", value: 0 },
          { id: "internet", value: 0 },
          { id: "gas", value: 0 },
          { id: "matenimiento", value: 0 },
          { id: "servivioDomestico", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "green",
        nombre: "Entretenimiento",
        value: 0,
        subExpenses: [
          { id: "restaurantes", value: 0 },
          { id: "cafe", value: 0 },
          { id: "deliverys", value: 0 },
          { id: "cine", value: 0 },
          { id: "hobbie", value: 0 },
          { id: "loteria", value: 0 },
          { id: "memebresia", value: 0 },
          { id: "suscripciones", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "orange",
        nombre: "Suministro del Hogar",
        value: 0,
        subExpenses: [
          { id: "despensa", value: 0 },
          { id: "herramientas", value: 0 },
          { id: "lavanderia", value: 0 },
          { id: "mascotas", value: 0 },
          { id: "cuidadoPersonal", value: 0 },
          { id: "comidaMascotas", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "red",
        nombre: "Alimentos y Comestibles",
        value: 0,
        subExpenses: [
          { id: "supermercado", value: 0 },
          { id: "necestidades", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "purple",
        nombre: "Transporte",
        value: 0,
        subExpenses: [
          { id: "gasolina", value: 0 },
          { id: "seguroVehiculo", value: 0 },
          { id: "transporte", value: 0 },
          { id: "parqueo", value: 0 },
          { id: "presupuestoVehiculo", value: 0 },
          { id: "mantenimientoVehiculo", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "yellow",
        nombre: "Salud",
        value: 0,
        subExpenses: [
          { id: "seguroMedico", value: 0 },
          { id: "ConsultasMedicas", value: 0 },
          { id: "farmacia", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "pink",
        nombre: "Infantil",
        value: 0,
        subExpenses: [
          { id: "Cuido", value: 0 },
          { id: "ActividadesSociales", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "gray",
        nombre: "Deudas",
        value: 0,
        subExpenses: [
          { id: "PrestamoConsumo", value: 0 },
          { id: "TarjetaCredito", value: 0 },
          { id: "MantenimientoInfantil", value: 0 },
          { id: "ImpuestosGubernamentales", value: 0 },
          { id: "Otros", value: 0 },
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
      <div className='background-color'>
        <Home />
      </div>
    </BudgetContext.Provider>
  );
}

export default App;
