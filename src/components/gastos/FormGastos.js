import React, { useState, useEffect } from "react";
import ViviendaServicios from "./ViviendaServicios";
import SuministroHogar from "./SuministroHogar";
import AlimentosComestibles from "./AlimentosComestibles";
import Transporte from "./Transporte";
import Salud from "./Salud";
import Infantil from "./Infantil";
import Deudas from "./Deudas";
import Entretenimiento from "./Entretenimiento";
import GastosChart from "../GastosChart";

const FormGastos = () => {
  const [ViviendaServiciosData, setViviendaServiciosData] = useState([]);
  const [SuministroHogarData, setSuministroHogarData] = useState([]);
  const [AlimentosComestiblesData, setAlimentosComestiblesData] = useState([]);
  const [TransporteData, setTransporteData] = useState([]);
  const [SaludData, setSaludData] = useState([]);
  const [InfantilData, setInfantilData] = useState([]);
  const [DeudasData, setDeudasData] = useState([]);
  const [EntretenimientoData, setEntreteniminetoData] = useState([]);

  const [consolidatedData, setConsolidatedData] = useState({});

  useEffect(() => {
    setConsolidatedData({
      ViviendaServiciosData,
      SuministroHogarData,
      AlimentosComestiblesData,
      TransporteData,
      SaludData,
      InfantilData,
      DeudasData,
      EntretenimientoData,
    });
  }, [
    ViviendaServiciosData,
    SuministroHogarData,
    AlimentosComestiblesData,
    TransporteData,
    SaludData,
    InfantilData,
    DeudasData,
    EntretenimientoData,
  ]);
  console.log(consolidatedData);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Vivienda y Servicios */}
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
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Vivienda y Servicios
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <ViviendaServicios
                setViviendaServiciosData={setViviendaServiciosData}
              />
            </ul>
          </div>

          {/* Entretenimiento */}
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
                  backgroundColor: "green",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Entretenimiento
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <Entretenimiento
                setEntreteniminetoData={setEntreteniminetoData}
              />
            </ul>
          </div>

          {/* Suministro del Hogar */}
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
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Suministro del Hogar
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <SuministroHogar
                setSuministroHogarData={setSuministroHogarData}
              />
            </ul>
          </div>

          {/* Alimentos y Comestibles */}
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
                  backgroundColor: "red",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Alimentos y Comestibles
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <AlimentosComestibles
                setAlimentosComestiblesData={setAlimentosComestiblesData}
              />
            </ul>
          </div>

          {/* Transporte */}
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
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Transporte
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <Transporte setTransporteData={setTransporteData} />
            </ul>
          </div>

          {/* Salud */}
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
                  backgroundColor: "yellow",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Salud
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <Salud setSaludData={setSaludData} />
            </ul>
          </div>

          {/* Infantil */}
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
                  backgroundColor: "pink",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Infantil
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <Infantil setInfantilData={setInfantilData} />
            </ul>
          </div>

          {/* Deudas */}
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
                  backgroundColor: "gray",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Deudas
            </button>
            <ul className="dropdown-menu col-12 menu-size">
              <Deudas setDeudasData={setDeudasData} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormGastos;
