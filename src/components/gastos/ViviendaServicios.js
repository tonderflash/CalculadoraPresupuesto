import React, { useState, useMemo } from "react";

const ViviendaServicios = ({ setViviendaServiciosData }) => {
  const formDataViviendaServicios = [
    { label: "Vivienda y Servicios" },
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
  ];

  const [formViviendaServicios, setFormViviendaServicios] = useState(formDataViviendaServicios);
  const [formData, setFormData] = useState(formDataViviendaServicios);

  const handleRangeChange = (event) => {
    const { id, value } = event.target;

    const updatedForm = formViviendaServicios.map(item => {
      if (item.id === id) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormViviendaServicios(updatedForm);
    setFormData(updatedForm);
    setViviendaServiciosData(updatedForm);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const rangeId = id.replace('Input', '');

    const updatedForm = formViviendaServicios.map(item => {
      if (item.id === rangeId) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormViviendaServicios(updatedForm);
    setFormData(updatedForm);
    setViviendaServiciosData(updatedForm);
  };

  const campos = useMemo(() => [
    { id: "rentaInput", label: "Renta" },
    { id: "prestamoHipotecarioInput", label: "Prestamo Hipotecario" },
    { id: "impuestosPropiedadInput", label: "Impuestos Propiedad" },
    { id: "seguroInmbiliarioInput", label: "Seguro Inmbiliario" },
    { id: "energíaElectricaInput", label: "Energía Electrica" },
    { id: "celularInput", label: "Celular" },
    { id: "cableInput", label: "Cable" },
    { id: "internetInput", label: "Internet" },
    { id: "gasInput", label: "Gas" },
    { id: "matenimientoInput", label: "Matenimiento" },
    { id: "servivioDomesticoInput", label: "Servivio Domestico" },
    { id: "otrosInput", label: "Otros" },
  ], []);

  return (
    <div>
      <div>
        {campos.map((campo, index) => (
          <div className="form-group m-1 p-1" key={index}>
            <label htmlFor={campo.id + "Input"}>{campo.label}</label>
            <div className="input-group">
              <span className="input-group-text">$RD</span>
              <input
                type="text"
                className="form-control"
                id={campo.id + "Input"}
                name={campo.id + "Input"}
                value={formData.find(item => item.id === campo.id).value || 0}
                onChange={handleInputChange}
              />
            </div>
            <div className='mx-4'>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100000"
                id={campo.id}
                value={formData.find(item => item.id === campo.id).value || 0}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViviendaServicios;
