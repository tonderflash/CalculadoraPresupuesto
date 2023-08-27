import React, { useMemo, useState } from 'react'

const IngresosEmpleo = ({ setFormEmpleo }) => {
    const formDataIngresosEmpleo = [
        { label: "Ingresos por empleo" },
        { id: "SalariosInput", value: 0 },
        { id: "IncentivosInput", value: 0 },
        { id: "PensionesInput", value: 0 },
    ];

    const [formIngresosEmpleo, setFormIngresosEmpleo] = useState(formDataIngresosEmpleo);
    const [formData, setFormData] = useState(formDataIngresosEmpleo);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;

        const updatedForm = formIngresosEmpleo.map(item => {
            if (item.id === id) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosEmpleo(updatedForm);
        setFormData(updatedForm);
        setFormEmpleo(updatedForm);

    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const rangeId = id.replace('Input', '');

        const updatedForm = formIngresosEmpleo.map(item => {
            if (item.id === rangeId) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosEmpleo(updatedForm);
        setFormData(updatedForm);
        setFormEmpleo(updatedForm);
    };

    const campos = useMemo(() => [
        { label: "Salarios", id: "SalariosInput" },
        { label: "Incentivos", id: "IncentivosInput" },
        { label: "Pensiones", id: "PensionesInput" },
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

export default IngresosEmpleo
