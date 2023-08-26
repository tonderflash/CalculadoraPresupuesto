import React, { useEffect, useMemo, useState } from 'react'

const Transporte = ({setTransporteData}) => {
    const formDataTransporte = {
        gasolinaRange: 0,
        seguroVehiculoRange: 0,
        transporteRange: 0,
        parqueoRange: 0,
        PrestamoRange: 0,
        manteniminetoVehiculoRange: 0,
        otrosRange: 0,
    }

    const [formTransporte, setFormTransporte] = useState(formDataTransporte);
    const handleRangeChange = (event) => {
        const { id, value } = event.target;
        setFormTransporte((prevData) => ({ ...prevData, [id]: value }));
        setTransporteData(formTransporte);  
    };

    const campos = useMemo(() => [
        { label: "Gasolina", id: "Gasolina", idRange: "gasolinaRange" },
        { label: "Seguro Vehiculo", id: "SeguroVehiculo", idRange: "seguroVehiculoRange" },
        { label: "Transporte Vehicular", id: "Transporte", idRange: "transporteRange" },
        { label: "Parqueo", id: "Parqueo", idRange: "parqueoRange" },
        { label: "Prestamo Vehiculo", id: "PrestamoInput", idRange: "PrestamoRange" },
        { label: "Mantenimineto Vehiculo", id: "manteniminetoVehiculoInput", idRange: "manteniminetoVehiculoRange" },
        { label: "Otros", id: "otrosInput", idRange: "otrosRange" },
    ], []);

    useEffect(() => {
        campos.forEach((campo) => {
            const inputNumber = document.getElementById(campo.id);
            if (inputNumber) {
                inputNumber.value = formTransporte[campo.idRange] || 0;
            }
        });
    }, [formTransporte, campos]);

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
                                value={formTransporte[campo.id] || 0}
                            />
                        </div>
                        <div className='mx-4'>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="100000"
                                id={campo.idRange}
                                value={formTransporte[campo.idRange] || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Transporte
