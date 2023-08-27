import React, { useState, useMemo } from "react";

const Infantil = ({ setInfantilData }) => {
  const formDataInfantil = [
    { label: "Infantil" },
    { id: "CuidoInput", value: 0 },
    { id: "ActividadesSocialesInput", value: 0 },
    { id: "OtrosInput", value: 0 },
  ];

  const [formInfantil, setFormInfantil] = useState(formDataInfantil);
  const [formData, setFormData] = useState(formDataInfantil);

  const handleRangeChange = (event) => {
    const { id, value } = event.target;

    const updatedForm = formInfantil.map(item => {
      if (item.id === id) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormInfantil(updatedForm);
    setFormData(updatedForm);
    setInfantilData(updatedForm);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const rangeId = id.replace('Input', '');

    const updatedForm = formInfantil.map(item => {
      if (item.id === rangeId) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormInfantil(updatedForm);
    setFormData(updatedForm);
    setInfantilData(updatedForm);
  };

  const campos = useMemo(() => [
    { id: "CuidoInput", label: "Cuido" },
    { id: "ActividadesSocialesInput", label: "Actividades Sociales" },
    { id: "OtrosInput", label: "Otros" },
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

export default Infantil;
