import React, { useState, useMemo } from 'react';

const ViviendaServicios = ({ setViviendaServiciosData }) => {

    const formDataViviendaServicios = [
        { id: 'renta', value: 0, prioridad: "importante" },
        { id: 'prestamoHipotecario', value: 0 },
        { id: 'impuestosPropiedad', value: 0 },
        { id: 'seguroInmbiliario', value: 0 },
        { id: 'energíaElectrica', value: 0 },
        { id: 'celular', value: 0 },
        { id: 'cable', value: 0 },
        { id: 'internet', value: 0 },
        { id: 'gas', value: 0 },
        { id: 'matenimiento', value: 0 },
        { id: 'servivioDomestico', value: 0 },
        { id: 'otros', value: 0 },
    ];

    const [formViviendaServicios, setFormViviendaServicios] = useState(formDataViviendaServicios);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;

        const updatedForm = formViviendaServicios.map(item => {
            if (item.id === id) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormViviendaServicios(updatedForm);
        setViviendaServiciosData(updatedForm);
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const rangeId = id.replace('Input', '');

        const updatedForm = formViviendaServicios.map(item => {
            if (item.id === rangeId) {
                return { ...item, value: Number(value) };
            }
            return item;
        });

        setFormViviendaServicios(updatedForm);
        setViviendaServiciosData(updatedForm);
    };

    const campos = useMemo(() => [
        { label: "Renta", id: "renta" },
        { label: "Prestamo Hipotecario", id: "prestamoHipotecario" },
        { label: "Impuestos Propiedad", id: "impuestosPropiedad" },
        { label: "Seguro Inmbiliario", id: "seguroInmbiliario" },
        { label: "Energía Electrica", id: "energíaElectrica" },
        { label: "Celular", id: "celular" },
        { label: "Cable", id: "cable" },
        { label: "Internet", id: "internet" },
        { label: "Gas", id: "gas" },
        { label: "Matenimiento", id: "matenimiento" },
        { label: "Servicio Domestico", id: "servivioDomestico" },
        { label: "Otros", id: "otros" },
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
                                value={formViviendaServicios.find(item => item.id === campo.id).value || 0}
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
                                value={formViviendaServicios.find(item => item.id === campo.id).value || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViviendaServicios;
