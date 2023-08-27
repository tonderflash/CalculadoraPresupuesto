import React, { useMemo, useState } from 'react'

const IngresosInversiones = ({setFormInversiones}) => {
    const formDataIngresosInversiones = [
        { label: "Ingresos Inversiones" },
        { id: "AlquileresInput", value: 0 },
        { id: "InteresesInput", value: 0 },
        { id: "DividendosInput", value: 0 },
        { id: "GananciasDeCapitalInput", value: 0 },
    ];

    const [formIngresosInversiones, setFormIngresosInversiones] = useState(formDataIngresosInversiones);
    const [formData, setFormData] = useState(formDataIngresosInversiones);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;

        const updatedForm = formIngresosInversiones.map(item => {
            if (item.id === id) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosInversiones(updatedForm);
        setFormData(updatedForm);
        setFormInversiones(updatedForm);
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const rangeId = id.replace('Input', '');

        const updatedForm = formIngresosInversiones.map(item => {
            if (item.id === rangeId) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormIngresosInversiones(updatedForm);
        setFormData(updatedForm);
        setFormInversiones(updatedForm);
    };

    const campos = useMemo(() => [
        { id: "AlquileresInput", label: "Alquileres" },
        { id: "InteresesInput", label: "Intereses" },
        { id: "DividendosInput", label: "Dividendos" },
        { id: "GananciasDeCapitalInput", label: "Ganancias de Capital" },
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

export default IngresosInversiones
