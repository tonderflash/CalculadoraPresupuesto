import React, { useState, useEffect } from "react";
import ViviendaServicios from "./ViviendaServicios";
import SuministroHogar from "./SuministroHogar";
import AlimentosComestibles from "./AlimentosComestibles";
import Transporte from "./Transporte";
import Salud from "./Salud";
import Infantil from "./Infantil";
import Deudas from "./Deudas";
import Entretenimiento from "./Entretenimiento";

const FormGastos = () => {
  const [ViviendaServiciosData, setViviendaServiciosData] = useState([]);
  const [SuministroHogarData, setSuministroHogarData] = useState([]);
  const [AlimentosComestiblesData, setAlimentosComestiblesData] = useState([]);
  const [TransporteData, setTransporteData] = useState([]);
  const [SaludData, setSaludData] = useState([]);
  const [InfantilData, setInfantilData] = useState([]);
  const [DeudasData, setDeudasData] = useState([]);
  const [EntretenimientoData, setEntreteniminetoData] = useState([]);

  const [consolidatedDataGastos, setConsolidatedDataGastos] = useState({});

  useEffect(() => {
    setConsolidatedDataGastos({
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

  console.log(consolidatedDataGastos);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Vivienda y Servicios */}
          <div className="dropdown drop-size">
            <button
              className="btn btn-secondary dropdown-toggle button-style text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseViviendaServicios"
              aria-expanded="false"
              aria-controls="collapseViviendaServicios"
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
            <ul className="collapse container" id="collapseViviendaServicios" style={{ backgroundColor: "#d3d3d3" }}>
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
              data-bs-toggle="collapse"
              data-bs-target="#collapseEntretenimiento"
              aria-expanded="false"
              aria-controls="collapseEntretenimiento"
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
            <ul className="collapse container" id="collapseEntretenimiento" style={{ backgroundColor: "#d3d3d3" }}>
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
              data-bs-toggle="collapse"
              data-bs-target="#collapseSuministros"
              aria-expanded="false"
              aria-controls="collapseSuministros"
              
              
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
            <ul className="collapse container" id="collapseSuministros" style={{ backgroundColor: "#d3d3d3" }}>
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
              data-bs-toggle="collapse"
              data-bs-target="#collapseAlimentosComestibles"
              aria-expanded="false"
              aria-controls="collapseAlimentosComestibles"
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
            <ul className="collapse container" id="collapseAlimentosComestibles" style={{ backgroundColor: "#d3d3d3" }}>
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
              data-bs-toggle="collapse"
              data-bs-target="#collapseTransporte"
              aria-expanded="false"
              aria-controls="collapseTransporte"
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
            <ul className="collapse container" id="collapseTransporte" style={{ backgroundColor: "#d3d3d3" }}>
              <Transporte setTransporteData={setTransporteData} />
            </ul>
          </div>

          {/* Salud */}
          <div className="dropdown drop-size">
            <button
              className="btn btn-secondary dropdown-toggle button-style text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSalud"
              aria-expanded="false"
              aria-controls="collapseSalud"
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
            <ul className="collapse container" id="collapseSalud" style={{ backgroundColor: "#d3d3d3" }}>
              <Salud setSaludData={setSaludData} />
            </ul>
          </div>

          {/* Infantil */}
          <div className="dropdown drop-size">
            <button
              className="btn btn-secondary dropdown-toggle button-style text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseInfantil"
              aria-expanded="false"
              aria-controls="collapseInfantil"
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
            <ul className="collapse container" id="collapseInfantil" style={{ backgroundColor: "#d3d3d3" }}>
              <Infantil setInfantilData={setInfantilData} />
            </ul>
          </div>

          {/* Deudas */}
          <div className="dropdown drop-size">
            <button
              className="btn btn-secondary dropdown-toggle button-style text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDeudas"
              aria-expanded="false"
              aria-controls="collapseDeudas"
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
            <ul className="collapse container" id="collapseDeudas" style={{ backgroundColor: "#d3d3d3" }}>
              <Deudas setDeudasData={setDeudasData} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormGastos;
