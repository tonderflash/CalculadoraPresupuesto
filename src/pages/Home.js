import React from "react";
import Gastos from "../components/gastos/Gastos";
import Ingresos from "../components/ingresos/Ingresos";
import Ahorros from "../components/ahorros/Ahorros";

const Home = () => {
  return (
    <div
      className="container-md w-100 mt-5"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="row">
        {/* Columna de la izquierda */}
        <div className="col-md-6">
          <div className="mb-4">
            <div className="card">
              <div className="card-header">Gastos</div>
              <div className="card-body">
                <Gastos />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="card">
              <div className="card-header">Ingresos</div>
              <div className="card-body">
                <Ingresos />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="card">
              <div className="card-header">Ahorros</div>
              <div className="card-body">
                <Ahorros />
              </div>
            </div>
          </div>
        </div>

        {/* Columna de la derecha con fondo gris */}
        <div className="col-md-6" style={{ backgroundColor: "#d3d3d3" }}>
          <h2>Título 1</h2>
          <p>Descripción para el título 1...</p>

          {/* Agrega más títulos y descripciones según lo necesites */}
        </div>
      </div>
    </div>
  );
};

export default Home;
