import React, { useMemo, useState } from 'react'

const IngresosEmprendimiento = ({setFormEmprendimiento}) => {
    const formDataIngresosEmprendimiento = [
        { label: "Ingresos Emprendimiento" },
        { id: "VentasBienesServiciosInput", value: 0 },
        { id: "FreelanceInput", value: 0 },
    ];

    const [formIngresosEmprendimiento, setFormIngresosEmprendimiento] = useState(formDataIngresosEmprendimiento);
    const [formData, setFormData] = useState(formDataIngresosEmprendimiento);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;

        const updatedForm = formIngresosEmprendimiento.map(item => {
            if (item.id === id) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosEmprendimiento(updatedForm);
        setFormData(updatedForm);
        setFormEmprendimiento(updatedForm);
        
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const rangeId = id.replace('Input', '');

        const updatedForm = formIngresosEmprendimiento.map(item => {
            if (item.id === rangeId) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosEmprendimiento(updatedForm);
        setFormData(updatedForm);
        setFormEmprendimiento(updatedForm);
    };

    const campos = useMemo(() => [
        { id: "VentasBienesServiciosInput", label: "Ventas de Bienes y Servicios" },
        { id: "FreelanceInput", label: "Freelance" },
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
}

export default IngresosEmprendimiento
