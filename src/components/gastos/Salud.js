import React, { useState, useMemo } from "react";

const Salud = ({ setSaludData }) => {
  const formDataSalud = [
    { label: "Salud" },
    { id: "SeguroMedicoInput", value: 0 },
    { id: "ConsultasMedicasInput", value: 0 },
    { id: "FarmaciaInput", value: 0 },
    { id: "otrosInput", value: 0 },
  ];

  const [formSalud, setFormSalud] = useState(formDataSalud);
  const [formData, setFormData] = useState(formDataSalud);

  const handleRangeChange = (event) => {
    const { id, value } = event.target;

    const updatedForm = formSalud.map(item => {
      if (item.id === id) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormSalud(updatedForm);
    setFormData(updatedForm);
    setSaludData(updatedForm);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const rangeId = id.replace('Input', '');

    const updatedForm = formSalud.map(item => {
      if (item.id === rangeId) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormSalud(updatedForm);
    setFormData(updatedForm);
    setSaludData(updatedForm);
  };

  const campos = useMemo(() => [
    { id: "SeguroMedicoInput", label: "Seguro Medico" },
    { id: "ConsultasMedicasInput", label: "Consultas Medicas" },
    { id: "FarmaciaInput", label: "Farmacia" },
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

export default Salud;
