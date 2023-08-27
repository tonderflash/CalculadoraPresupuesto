import React, { useMemo, useState } from 'react'

const IngresoAhorros = ({ setFormAhorros }) => {
    const formDataIngresoAhorros = [
        { label: "Ingreso Ahorros" },
        { id: "FondoEmergenciaInput", value: 0 },
        { id: "FondoVacacionesInput", value: 0 },
        { id: "FondoJubilaciónInput", value: 0 },
        { id: "FondoEducacionInput", value: 0 },
        { id: "FondoReduccionDeudasInput", value: 0 },
        { id: "FondoInversionInput", value: 0 },
    ];

    const [formIngresoAhorros, setFormIngresoAhorros] = useState(formDataIngresoAhorros);
    const [formData, setFormData] = useState(formDataIngresoAhorros);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;

        const updatedForm = formIngresoAhorros.map(item => {
            if (item.id === id) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresoAhorros(updatedForm);
        setFormData(updatedForm);
        setFormAhorros(updatedForm);
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const rangeId = id.replace('Input', '');

        const updatedForm = formIngresoAhorros.map(item => {
            if (item.id === rangeId) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresoAhorros(updatedForm);
        setFormData(updatedForm);
        setFormAhorros(updatedForm);
    };

    const campos = useMemo(() => [
        { id: "FondoEmergenciaInput", label: "Fondo de Emergencia" },
        { id: "FondoVacacionesInput", label: "Fondo de Vacaciones" },
        { id: "FondoJubilaciónInput", label: "Fondo de Jubilación" },
        { id: "FondoEducacionInput", label: "Fondo de Educación" },
        { id: "FondoReduccionDeudasInput", label: "Fondo de Reducción de Deudas" },
        { id: "FondoInversionInput", label: "Fondo de Inversión" },
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
    )
}

export default IngresoAhorros
