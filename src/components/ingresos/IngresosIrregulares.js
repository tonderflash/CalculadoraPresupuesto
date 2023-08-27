import React, { useMemo, useState } from 'react';

const IngresosIrregulares = ({setFormIrregulares}) => {
    const formDataIngresosIrregulares = [
        { label: "Ingresos Irregulares" },
        { id: "OtrosIngresosInput", value: 0 },
    ];

    const [formIngresosIrregulares, setFormIngresosIrregulares] = useState(formDataIngresosIrregulares);
    const [formData, setFormData] = useState(formDataIngresosIrregulares);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;

        const updatedForm = formIngresosIrregulares.map(item => {
            if (item.id === id) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosIrregulares(updatedForm);
        setFormData(updatedForm);
        setFormIrregulares(updatedForm);
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const rangeId = id.replace('Input', '');

        const updatedForm = formIngresosIrregulares.map(item => {
            if (item.id === rangeId) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosIrregulares(updatedForm);
        setFormData(updatedForm);
        setFormIrregulares(updatedForm);
    };

    const campos = useMemo(() => [
        { label: "Otros Ingresos", id: "OtrosIngresosInput" },
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

export default IngresosIrregulares;
