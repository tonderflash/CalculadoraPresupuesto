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
          { id: "AlquileresInput", value: 0 },
          { id: "DividendosInput", value: 0 },
          { id: "GananciasDeCapitalInput", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Donaciones",
        value: 0,
        subExpenses: [
          { id: "DonacionesInput", value: 0 },
          { id: "SubsidiosInput", value: 0 },
        ],
      },
      {
        nombre: "Ingresos por Emprendimiento",
        value: 0,
        subExpenses: [
          { id: "VentasBienesServiciosInput", value: 0 },
          { id: "FreelanceInput", value: 0 },
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
          { id: "FondoEmergenciaInput", value: 0 },
          { id: "FondoVacacionesInput", value: 0 },
          { id: "FondoJubilaciónInput", value: 0 },
          { id: "FondoEducacionInput", value: 0 },
          { id: "FondoReduccionDeudasInput", value: 0 },
          { id: "FondoInversionInput", value: 0 },
        ],
      },
    ],
    consolidatedDataGastos: [
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
        color: "green",
        nombre: "Entretenimiento",
        value: 0,
        subExpenses: [
          { id: "restaurantesInput", value: 0 },
          { id: "cafeInput", value: 0 },
          { id: "deliverysInput", value: 0 },
          { id: "cineInput", value: 0 },
          { id: "hobbieInput", value: 0 },
          { id: "loteriaInput", value: 0 },
          { id: "memebresiaInput", value: 0 },
          { id: "suscripcionesInput", value: 0 },
          { id: "otrosInput", value: 0 },
        ],
      },
      {
        color: "orange",
        nombre: "Suministro del Hogar",
        value: 0,
        subExpenses: [
          { id: "despensaInput", value: 0 },
          { id: "herramientasInput", value: 0 },
          { id: "lavanderiaInput", value: 0 },
          { id: "mascotasInput", value: 0 },
          { id: "cuidadoPersonalInput", value: 0 },
          { id: "comidaMascotasInput", value: 0 },
          { id: "otrosInput", value: 0 },
        ],
      },
      {
        color: "red",
        nombre: "Alimentos y Comestibles",
        value: 0,
        subExpenses: [
          { id: "supermercadoInput", value: 0 },
          { id: "necestidadesInput", value: 0 },
          { id: "otrosInput", value: 0 },
        ],
      },
      {
        color: "purple",
        nombre: "Transporte",
        value: 0,
        subExpenses: [
          { id: "gasolinaInput", value: 0 },
          { id: "seguroVehiculoInput", value: 0 },
          { id: "transporteInput", value: 0 },
          { id: "parqueoInput", value: 0 },
          { id: "presupuestoVehiculoInput", value: 0 },
          { id: "mantenimientoVehiculoInput", value: 0 },
          { id: "otrosInput", value: 0 },
        ],
      },
      {
        color: "yellow",
        nombre: "Salud",
        value: 0,
        subExpenses: [
          { id: "seguroMedicoInput", value: 0 },
          { id: "ConsultasMedicasInput", value: 0 },
          { id: "farmaciaInput", value: 0 },
          { id: "otrosInput", value: 0 },
        ],
      },
      {
        color: "pink",
        nombre: "Infantil",
        value: 0,
        subExpenses: [
          { id: "CuidoInput", value: 0 },
          { id: "ActividadesSocialesInput", value: 0 },
          { id: "otrosInput", value: 0 },
        ],
      },
      {
        color: "gray",
        nombre: "Deudas",
        value: 0,
        subExpenses: [
          { id: "PrestamoConsumoInput", value: 0 },
          { id: "TarjetaCreditoInput", value: 0 },
          { id: "MantenimientoInfantilInput", value: 0 },
          { id: "ImpuestosGubernamentalesInput", value: 0 },
          { id: "OtrosInput", value: 0 },
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
