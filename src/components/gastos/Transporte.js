import React, { useState, useMemo } from "react";

const Transporte = ({ setTransporteData }) => {
  const formDataTransporte = [
    { label: "Transporte" },
    { id: "GasolinaInput", value: 0 },
    { id: "SeguroVehiculoInput", value: 0 },
    { id: "TransporteInput", value: 0 },
    { id: "ParqueoInput", value: 0 },
    { id: "PrestamoInput", value: 0 },
    { id: "manteniminetoVehiculoInput", value: 0 },
    { id: "otrosInput", value: 0 },
  ];

  const [formTransporte, setFormTransporte] = useState(formDataTransporte);
  const [formData, setFormData] = useState(formDataTransporte);

  const handleRangeChange = (event) => {
    const { id, value } = event.target;

    const updatedForm = formTransporte.map(item => {
      if (item.id === id) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormTransporte(updatedForm);
    setFormData(updatedForm);
    setTransporteData(updatedForm);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const rangeId = id.replace('Input', '');

    const updatedForm = formTransporte.map(item => {
      if (item.id === rangeId) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormTransporte(updatedForm);
    setFormData(updatedForm);
    setTransporteData(updatedForm);
  };

  const campos = useMemo(() => [
    { id: "GasolinaInput", label: "Gasolina" },
    { id: "SeguroVehiculoInput", label: "Seguro Vehiculo" },
    { id: "TransporteInput", label: "Transporte Vehicular" },
    { id: "ParqueoInput", label: "Parqueo" },
    { id: "PrestamoInput", label: "Prestamo Vehiculo" },
    { id: "manteniminetoVehiculoInput", label: "Mantenimineto Vehiculo" },
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

export default Transporte;
