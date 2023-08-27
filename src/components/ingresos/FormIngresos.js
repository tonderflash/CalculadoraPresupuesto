import React, { useEffect, useState } from 'react'
import IngresosEmpleo from './IngresosEmpleo'
import IngresosInversiones from './IngresosInversiones'
import IngresosDonaciones from './IngresosDonaciones'
import IngresosEmprendimiento from './IngresosEmprendimiento'
import IngresosIrregulares from './IngresosIrregulares'

const FormIngresos = () => {
    const [formEmpleo, setFormEmpleo] = useState([]);
    const [formInversiones, setFormInversiones] = useState([]);
    const [formDonaciones, setFormDonaciones] = useState([]);
    const [formEmprendimiento, setFormEmprendimiento] = useState([]);
    const [formIrregualres, setFormIrregulares] = useState([]);

    const [consolidatedDataIngresos, setConsolidatedDataIngresos] = useState({});

    useEffect(() => {
        setConsolidatedDataIngresos({
            formEmpleo,
            formInversiones,
            formDonaciones,
            formEmprendimiento,
            formIrregualres
        });
    }, [formEmpleo, formInversiones, formDonaciones, formEmprendimiento, formIrregualres]);

    console.log(consolidatedDataIngresos);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="dropdown drop-size">
                        <button className="btn btn-primary dropdown-toggle button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ingresos por Empleo
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <IngresosEmpleo setFormEmpleo={setFormEmpleo} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-primary dropdown-toggle button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ingresos por Inversiones
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <IngresosInversiones
                                setFormInversiones={setFormInversiones}
                            />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-primary dropdown-toggle button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ingresos por Donaciones
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <IngresosDonaciones
                                setFormDonaciones={setFormDonaciones}
                            />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-primary dropdown-toggle button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ingresos por Emprendimiento
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <IngresosEmprendimiento
                                setFormEmprendimiento={setFormEmprendimiento}
                            />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-primary dropdown-toggle button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ingresos Irregulares
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <IngresosIrregulares
                                setFormIrregulares={setFormIrregulares}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormIngresos
