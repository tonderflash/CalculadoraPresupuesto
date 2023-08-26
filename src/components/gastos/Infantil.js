import React, { useEffect, useMemo, useState } from 'react'

const Infantil = ({setInfantilData}) => {
    const formDataInfantil = {
        CuidoRange: 0,
        ActividadesSocialesRange: 0,
        OtrosRange: 0,
    }

    const [formInfantil, setFormInfantil] = useState(formDataInfantil);

    const handleRangeChange = (event) => {
        const { id, value } = event.target;
        const updatedFormInfantil = { ...formInfantil, [id]: value };
        setFormInfantil(updatedFormInfantil);
        setInfantilData(formInfantil);
    };

    const campos = useMemo(() => [
        { label: "Cuido", id: "CuidoInput", idRange: "CuidoRange" },
        { label: "Actividades Sociales", id: "ActividadesSocialesInput", idRange: "ActividadesSocialesRange" },
        { label: "Otros", id: "OtrosInput", idRange: "OtrosRange" },
    ], []);

    useEffect(() => {
        campos.forEach((campo) => {
            const inputNumber = document.getElementById(campo.id);
            if (inputNumber) {
                inputNumber.value = formInfantil[campo.idRange] || 0;
            }
        });
    }, [formInfantil, campos]);

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
                                value={formInfantil[campo.id] || 0}
                            />
                        </div>
                        <div className='mx-4'>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="100000"
                                id={campo.idRange}
                                value={formInfantil[campo.idRange] || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Infantil
