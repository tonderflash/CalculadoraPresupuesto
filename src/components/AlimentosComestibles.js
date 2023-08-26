import React, { useEffect, useState, useMemo } from 'react';

const AlimentosComestibles = ({setAlimentosComestiblesData}) => {
    const formDataAlimentosComestibles = {
        supermercadosRange: 0,
        necesidadesInfantilesRange: 0,
        otrosRange: 0,
    }

    const [formAlimentosComestibles, setFormAlimentosComestibles] = useState(formDataAlimentosComestibles);
    const handleRangeChange = (event) => {
        const { id, value } = event.target;
        setFormAlimentosComestibles((prevData) => ({ ...prevData, [id]: value }));
        setAlimentosComestiblesData(formAlimentosComestibles);  
    };

    const campos = useMemo(() => [
        { label: "Supermercados", id: "supermercadosInput", idRange: "supermercadosRange" },
        { label: "Necesidades Infantiles", id: "necesidadesInfantilesInput", idRange: "necesidadesInfantilesRange" },
        { label: "Otros", id: "otrosInput", idRange: "otrosRange" },
    ], []);

    useEffect(() => {
        campos.forEach((campo) => {
            const inputNumber = document.getElementById(campo.id);
            if (inputNumber) {
                inputNumber.value = formAlimentosComestibles[campo.idRange] || 0;
            }
        });
    }, [formAlimentosComestibles, campos]);

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
                                value={formAlimentosComestibles[campo.id] || 0}
                            />
                        </div>
                        <div className='mx-4'>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="100000"
                                id={campo.idRange}
                                value={formAlimentosComestibles[campo.idRange] || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlimentosComestibles
