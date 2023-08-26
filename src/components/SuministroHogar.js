import React, { useEffect, useState, useMemo } from 'react';

const SuministroHogar = ({setSuministroHogarData}) => {
    const formDataSuministroHogar = {
        decoracionesRange: 0,
        herramientasRange: 0,
        lavanderiaRange: 0,
        mascotasRange: 0,
        cuidadoPersonalRange: 0,
        comisionesBancariasRange: 0,
        otrosRange: 0,
    };
    const [formSuministroHogar, setFormSuministroHogar] = useState(formDataSuministroHogar);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;
        setFormSuministroHogar((prevData) => ({ ...prevData, [id]: value }));
        setSuministroHogarData(formSuministroHogar);
    };

    const campos = useMemo(() => [
        { label: "Decoraciones", id: "decoracionesInput", idRange: "decoracionesRange" },
        { label: "Herramientas", id: "herramientasInput", idRange: "herramientasRange" },
        { label: "Lavandería", id: "lavanderiaInput", idRange: "lavanderiaRange" },
        { label: "Mascotas", id: "mascotasInput", idRange: "mascotasRange" },
        { label: "Cuidado Personal", id: "cuidadoPersonalInput", idRange: "cuidadoPersonalRange" },
        { label: "Comisiones Bancarias", id: "comisionesBancariasInput", idRange: "comisionesBancariasRange" },
        { label: "Otros", id: "otrosInput", idRange: "otrosRange" },
    ], []);

    useEffect(() => {
        campos.forEach((campo) => {
            const inputNumber = document.getElementById(campo.id);
            if (inputNumber) {
                inputNumber.value = formSuministroHogar[campo.idRange] || 0;
            }
        });
    }, [formSuministroHogar, campos]);

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
                                value={formSuministroHogar[campo.id] || 0}
                            />
                        </div>
                        <div className='mx-4'>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="100000"
                                id={campo.idRange}
                                value={formSuministroHogar[campo.idRange] || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SuministroHogar
