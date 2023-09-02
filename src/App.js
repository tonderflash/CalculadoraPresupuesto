import React, { useState } from "react";
import Home from "./pages/Home";
import BudgetContext from "./components/gastos/GastosContext";
import Navbar from "./components/Navbar";

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
          { id: "Ganancias De Capital", value: 0 },
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
          { id: "Ventas Bienes Servicios", value: 0 },
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
          { id: "Fondo Emergencia", value: 0 },
          { id: "Fondo Vacaciones", value: 0 },
          { id: "Fondo Jubilación", value: 0 },
          { id: "Fondo Educacion", value: 0 },
          { id: "Fondo ReduccionDeudas", value: 0 },
          { id: "Fondo Inversion", value: 0 },
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
          { id: "prestamo Hipotecario", value: 0 },
          { id: "impuestos Propiedad", value: 0 },
          { id: "seguro Inmbiliario", value: 0 },
          { id: "energía Electrica", value: 0 },
          { id: "celular", value: 0 },
          { id: "cable", value: 0 },
          { id: "internet", value: 0 },
          { id: "gas", value: 0 },
          { id: "matenimiento", value: 0 },
          { id: "servivio Domestico", value: 0 },
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
          { id: "cuidado Personal", value: 0 },
          { id: "comida MascotasInput", value: 0 },
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
          { id: "seguro Vehiculo", value: 0 },
          { id: "transporte", value: 0 },
          { id: "parqueo", value: 0 },
          { id: "presupuesto Vehiculo", value: 0 },
          { id: "mantenimiento Vehiculo", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "yellow",
        nombre: "Salud",
        value: 0,
        subExpenses: [
          { id: "seguro Medico", value: 0 },
          { id: "Consultas Medicas", value: 0 },
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
          { id: "Actividades Sociales", value: 0 },
          { id: "otros", value: 0 },
        ],
      },
      {
        color: "gray",
        nombre: "Deudas",
        value: 0,
        subExpenses: [
          { id: "Prestamo Consumo", value: 0 },
          { id: "Tarjeta Credito", value: 0 },
          { id: "Mantenimiento Infantil", value: 0 },
          { id: "Impuestos Gubernamentales", value: 0 },
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
      <div className="background-color">
        <div className="fixed-top">
          {" "}
          {/* This will keep the Navbar at the top */}
          <Navbar />
        </div>
        <div className="mt-5">
          <Home />
        </div>
      </div>
    </BudgetContext.Provider>
  );
}

export default App;
