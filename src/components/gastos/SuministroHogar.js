import React, { useState, useMemo } from "react";

const SuministroHogar = ({ setSuministroHogarData }) => {
  const formDataSuministroHogar = [
    { label: "Suministro Hogar" },
    { id: "decoracionesInput", value: 0 },
    { id: "herramientasInput", value: 0 },
    { id: "lavanderiaInput", value: 0 },
    { id: "mascotasInput", value: 0 },
    { id: "cuidadoPersonalInput", value: 0 },
    { id: "comisionesBancariasInput", value: 0 },
    { id: "otrosInput", value: 0 },
  ];

  const [formData, setFormData] = useState(formDataSuministroHogar);

  const handleRangeChange = (event) => {
    const { id, value } = event.target;
    const updatedForm = formData.map((item) => {
      if (item.id === id) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormData(updatedForm);
    setSuministroHogarData(updatedForm);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const rangeId = id.replace("Input", "");

    const updatedForm = formData.map((item) => {
      if (item.id === rangeId) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormData(updatedForm);
    setSuministroHogarData(updatedForm);
  };

  const campos = useMemo(
    () => [
      { id: "decoracionesInput", label: "Decoraciones" },
      { id: "herramientasInput", label: "Herramientas" },
      { id: "lavanderiaInput", label: "Lavandería" },
      { id: "mascotasInput", label: "Mascotas" },
      { id: "cuidadoPersonalInput", label: "Cuidado Personal" },
      { id: "comisionesBancariasInput", label: "Comisiones Bancarias" },
      { id: "otrosInput", label: "Otros" },
    ],
    []
  );

  return (
    <div>
      <div>
        {campos.map((campo, index) => (
          <div className="form-group m-1 p-1" key={index}>
            <label htmlFor={campo.id}>{campo.label}</label>
            <div className="input-group">
              <span className="input-group-text">$RD</span>
              <input
                type="text"
                className="form-control"
                id={campo.id}
                name={campo.id}
                value={formData.find((item) => item.id === campo.id).value || 0}
                onChange={handleInputChange}
              />
            </div>
            <div className="mx-4">
              <input
                type="range"
                className="form-range"
                min="0"
                max="100000"
                id={campo.id}
                value={formData.find((item) => item.id === campo.id).value || 0}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuministroHogar;
