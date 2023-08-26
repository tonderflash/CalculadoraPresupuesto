import React, { useEffect, useMemo, useState } from 'react'

const Deudas = ({setDeudasData}) => {
    const formDataDeudas = {
        PrestamoConsumoRange: 0,
        TarjetaCreditoRange: 0,
        MantenimientoInfantilRange: 0,
        ImpuestosGubernamentalesRange: 0,
        OtrosRange: 0,
    }

    const [formDeudas, setFormDeudas] = useState(formDataDeudas);
    const handleRangeChange = (event) => {
        const { id, value } = event.target;
        setFormDeudas((prevData) => ({ ...prevData, [id]: value }));
        setDeudasData(formDeudas);  
    };

    const campos = useMemo(() => [
        { label: "Prestamo Consumo", id: "PrestamoConsumoInput", idRange: "PrestamoConsumoRange" },
        { label: "Tarjeta de Crédito", id: "TarjetaCreditoInput", idRange: "TarjetaCreditoRange" },
        { label: "Mantenimiento Infantil", id: "MantenimientoInfantilInput", idRange: "MantenimientoInfantilRange" },
        { label: "Impuestos Gubernamentales", id: "ImpuestosGubernamentalesInput", idRange: "ImpuestosGubernamentalesRange" },
        { label: "Otros", id: "OtrosInput", idRange: "OtrosRange" },
    ], []);

    useEffect(() => {
        campos.forEach((campo) => {
            const inputNumber = document.getElementById(campo.id);
            if (inputNumber) {
                inputNumber.value = formDeudas[campo.idRange] || 0;
            }
        });
    }, [formDeudas, campos]);

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
                                value={formDeudas[campo.id] || 0}
                            />
                        </div>
                        <div className='mx-4'>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="100000"
                                id={campo.idRange}
                                value={formDeudas[campo.idRange] || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Deudas
