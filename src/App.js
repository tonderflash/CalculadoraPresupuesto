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
          { id: "SALARIO", value: 0 },
          { id: "INCENTIVO", value: 0 },
          { id: "PENSIONES", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Inversiones",
        value: 0,
        subExpenses: [
          { id: "ALQUILERES", value: 0 },
          { id: "DIVIDENDOS", value: 0 },
          { id: "GANANCIAS DE CAPITAL", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Donaciones",
        value: 0,
        subExpenses: [
          { id: "DONACIONES", value: 0 },
          { id: "SUBSIDIOS", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Emprendimiento",
        value: 0,
        subExpenses: [
          { id: "VENTAS BIENES Y SERVICIOS", value: 0 },
          { id: "FREELANCE", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Irregulares",
        value: 0,
        subExpenses: [{ id: "OTROS INGRESOS", value: 0 }],
      },
    ],
    consolidatedDataAhorros: [
      {
        color: "#ADD8E6", // Azul pastel
        nombre: "Ahorros",
        value: 0,
        subExpenses: [
          { id: "FONDO EMERGENCIA", value: 0 },
          { id: "FONDO VACACIONES", value: 0 },
          { id: "FONDO JUBILACIÓN", value: 0 },
          { id: "FONDO EDUCACIÓN", value: 0 },
          { id: "FONDO REDUCCIÓN DEUDAS", value: 0 },
          { id: "FONDO INVERSIÓN", value: 0 },
        ],
      },
    ],
    consolidatedDataGastos: [
      {
        color: "#98FB98", // Verde pastel
        nombre: "Vivienda y Servicios",
        value: 0,
        subExpenses: [
          { id: "RENTA", value: 0 },
          { id: "PRÉSTAMO HIPOTECARIO", value: 0 },
          { id: "IMPUESTOS PROPIEDAD", value: 0 },
          { id: "SEGURO INMOBILIARIO", value: 0 },
          { id: "ENERGÍA ELÉCTRICA", value: 0 },
          { id: "CELULAR", value: 0 },
          { id: "CABLE", value: 0 },
          { id: "INTERNET", value: 0 },
          { id: "GAS", value: 0 },
          { id: "MANTENIMIENTO", value: 0 },
          { id: "SERVICIO DOMÉSTICO", value: 0 },
          { id: "OTROS", value: 0 },
        ],
      },
      {
        color: "#FFFF99", // Amarillo pastel
        nombre: "Entretenimiento",
        value: 0,
        subExpenses: [
          { id: "RESTAURANTES", value: 0 },
          { id: "CAFÉ", value: 0 },
          { id: "DELIVERYS", value: 0 },
          { id: "CINE", value: 0 },
          { id: "HOBBIE", value: 0 },
          { id: "LOTERÍA", value: 0 },
          { id: "MEMBRESÍA", value: 0 },
          { id: "SUSCRIPCIONES", value: 0 },
          { id: "OTROS", value: 0 },
        ],
      },
      {
        color: "#FFB6C1", // Rosa pastel
        nombre: "Suministro del Hogar",
        value: 0,
        subExpenses: [
          { id: "DESPENSA", value: 0 },
          { id: "HERRAMIENTAS", value: 0 },
          { id: "LAVANDERÍA", value: 0 },
          { id: "MASCOTAS", value: 0 },
          { id: "CUIDADO PERSONAL", value: 0 },
          { id: "COMIDA MASCOTAS", value: 0 },
          { id: "OTROS", value: 0 },
        ],
      },
      {
        color: "#FFA07A", // Salmón pastel
        nombre: "Alimentos y Comestibles",
        value: 0,
        subExpenses: [
          { id: "SUPERMERCADO", value: 0 },
          { id: "NECESIDADES", value: 0 },
          { id: "OTROS", value: 0 },
        ],
      },
      {
        color: "#FF6B6B", // Rojo pastel
        nombre: "Transporte",
        value: 0,
        subExpenses: [
          { id: "GASOLINA", value: 0 },
          { id: "SEGURO VEHÍCULO", value: 0 },
          { id: "TRANSPORTE", value: 0 },
          { id: "PARQUEO", value: 0 },
          { id: "PRESUPUESTO VEHÍCULO", value: 0 },
          { id: "MANTENIMIENTO VEHÍCULO", value: 0 },
          { id: "OTROS", value: 0 },
        ],
      },
      {
        color: "#FFD700", // Naranja pastel
        nombre: "Salud",
        value: 0,
        subExpenses: [
          { id: "SEGURO MÉDICO", value: 0 },
          { id: "CONSULTAS MÉDICAS", value: 0 },
          { id: "FARMACIA", value: 0 },
          { id: "OTROS", value: 0 },
        ],
      },
      {
        color: "#DA70D6", // Morado pastel
        nombre: "Infantil",
        value: 0,
        subExpenses: [
          { id: "CUIDO", value: 0 },
          { id: "ACTIVIDADES SOCIALES", value: 0 },
          { id: "OTROS", value: 0 },
        ],
      },
      {
        color: "#D3D3D3", // Gris claro pastel
        nombre: "Deudas",
        value: 0,
        subExpenses: [
          { id: "PRÉSTAMO CONSUMO", value: 0 },
          { id: "TARJETA CRÉDITO", value: 0 },
          { id: "MANTENIMIENTO INFANTIL", value: 0 },
          { id: "IMPUESTOS GUBERNAMENTALES", value: 0 },
          { id: "OTROS", value: 0 },
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
          {/* navbar aqui */}
        </div>
        <div className="mt-5">
          <Home />
        </div>
      </div>
    </BudgetContext.Provider>
  );
}

export default App;
