import React, { useEffect, useMemo, useState } from 'react'

const Entretenimiento = ({setEntreteniminetoData}) => {
    const formDataEntretenimiento = {
        RestaurantesRange: 0,
        CafeRange: 0,
        DeliverysRange: 0,
        CineRange: 0,
        HobbiesRange: 0,
        LoteriaApuestasRange: 0,
        MembresiasRange: 0,
        SuscripcionesRange: 0,
        OtrosRange: 0,
    }

    const [formEntretenimiento, setEntretenimiento] = useState(formDataEntretenimiento);
    const handleRangeChange = (event) => {
        const { id, value } = event.target;
        setEntretenimiento((prevData) => ({ ...prevData, [id]: value }));
        setEntreteniminetoData(formEntretenimiento);  
    };

    const campos = useMemo(() => [
        { label: "Restaurantes", id: "RestaurantesInput", idRange: "RestaurantesRange" },
        { label: "Café", id: "CafeInput", idRange: "CafeRange" },
        { label: "Deliverys", id: "DeliverysInput", idRange: "DeliverysRange" },
        { label: "Cine", id: "CineInput", idRange: "CineRange" },
        { label: "Hobbies", id: "HobbiesInput", idRange: "HobbiesRange" },
        { label: "Lotería y Apuestas", id: "LoteriaApuestasInput", idRange: "LoteriaApuestasRange" },
        { label: "Membresias", id: "MembresiasInput", idRange: "MembresiasRange" },
        { label: "Suscripciones", id: "SuscripcionesInput", idRange: "SuscripcionesRange" },
        { label: "Otros", id: "OtrosInput", idRange: "OtrosRange" },
    ], []);

    useEffect(() => {
        campos.forEach((campo) => {
            const inputNumber = document.getElementById(campo.id);
            if (inputNumber) {
                inputNumber.value = formEntretenimiento[campo.idRange] || 0;
            }
        });
    }, [formEntretenimiento, campos]);

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
                                value={formEntretenimiento[campo.id] || 0}
                            />
                        </div>
                        <div className='mx-4'>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="100000"
                                id={campo.idRange}
                                value={formEntretenimiento[campo.idRange] || 0}
                                onChange={handleRangeChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Entretenimiento
