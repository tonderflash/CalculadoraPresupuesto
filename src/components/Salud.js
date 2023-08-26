import React, { useEffect, useMemo, useState } from 'react'

const Salud = ({setSaludData}) => {
    const formDataSalud = {
        SeguroMedicoRange: 0,
        ConsultasMedicasRange: 0,
        FarmaciaRange: 0,
        otrosRange: 0,
    }

    const [formSalud, setFormSalud] = useState(formDataSalud);
    const handleRangeChange = (event) => {
        const { id, value } = event.target;
        setFormSalud((prevData) => ({ ...prevData, [id]: value }));
        setSaludData(formSalud);  
    };

    const campos = useMemo(() => [
        { label: "Seguro Medico", id: "SeguroMedicoInput", idRange: "SeguroMedicoRange" },
        { label: "Consultas Medicas", id: "ConsultasMedicasInput", idRange: "ConsultasMedicasRange" },
        { label: "Farmacia", id: "FarmaciaInput", idRange: "FarmaciaRange" },
        { label: "Otros", id: "otrosInput", idRange: "otrosRange" },
    ], []);

    useEffect(() => {
        campos.forEach((campo) => {
            const inputNumber = document.getElementById(campo.id);
            if (inputNumber) {
                inputNumber.value = formSalud[campo.idRange] || 0;
            }
        });
    }, [formSalud, campos]);

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
                                value={formSalud[campo.id] || 0}
                            />
                        </div>
                        <div className='mx-4'>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="100000"
                                id={campo.idRange}
                                value={formSalud[campo.idRange] || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Salud
