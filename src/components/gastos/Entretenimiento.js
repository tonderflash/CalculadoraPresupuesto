import React, { useState, useMemo } from "react";

const Entretenimiento = ({ setEntreteniminetoData }) => {
  const formDataEntretenimiento = [
    { label: "Entretenimiento" },
    { id: "RestaurantesInput", value: 0 },
    { id: "CafeInput", value: 0 },
    { id: "DeliverysInput", value: 0 },
    { id: "CineInput", value: 0 },
    { id: "HobbiesInput", value: 0 },
    { id: "LoteriaApuestasInput", value: 0 },
    { id: "MembresiasInput", value: 0 },
    { id: "SuscripcionesInput", value: 0 },
    { id: "OtrosInput", value: 0 },
  ];

  const [formData, setFormData] = useState(formDataEntretenimiento);

  const handleRangeChange = (event) => {
    const { id, value } = event.target;
    const updatedForm = formData.map((item) => {
      if (item.id === id) {
        return { ...item, value: Number(value) };
      }
      return item;
    });

    setFormData(updatedForm);
    setEntreteniminetoData(updatedForm);
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
    setEntreteniminetoData(updatedForm);
  };

  const campos = useMemo(
    () => [
      { id: "RestaurantesInput", label: "Restaurantes" },
      { id: "CafeInput", label: "Café" },
      { id: "DeliverysInput", label: "Deliverys" },
      { id: "CineInput", label: "Cine" },
      { id: "HobbiesInput", label: "Hobbies" },
      { id: "LoteriaApuestasInput", label: "Lotería y Apuestas" },
      { id: "MembresiasInput", label: "Membresias" },
      { id: "SuscripcionesInput", label: "Suscripciones" },
      { id: "OtrosInput", label: "Otros" },
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

export default Entretenimiento;
