import React, { useEffect, useState } from "react";
import IngresosEmpleo from "./IngresosEmpleo";
import IngresosInversiones from "./IngresosInversiones";
import IngresosDonaciones from "./IngresosDonaciones";
import IngresosEmprendimiento from "./IngresosEmprendimiento";
import IngresosIrregulares from "./IngresosIrregulares";

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
            formIrregualres,
        });
    }, [
        formEmpleo,
        formInversiones,
        formDonaciones,
        formEmprendimiento,
        formIrregualres,
    ]);

    console.log(consolidatedDataIngresos);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="dropdown drop-size">
                        <button
                            className="btn btn-secondary dropdown-toggle button-style text-start"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEmpleo"
                            aria-expanded="false"
                            aria-controls="collapseEmpleo"
                        >
                            Ingresos por Empleo
                        </button>
                        <ul className="collapse container" id="collapseEmpleo" style={{ backgroundColor: "#d3d3d3" }}>
                            <IngresosEmpleo setFormEmpleo={setFormEmpleo} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button
                            className="btn btn-secondary dropdown-toggle button-style text-start"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseInversiones"
                            aria-expanded="false"
                            aria-controls="collapseInversiones"
                        >
                            Ingresos por Inversiones
                        </button>
                        <ul className="collapse container" id="collapseInversiones" style={{ backgroundColor: "#d3d3d3" }}>
                            <IngresosInversiones setFormInversiones={setFormInversiones} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button
                            className="btn btn-secondary dropdown-toggle button-style text-start"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseDonaciones"
                            aria-expanded="false"
                            aria-controls="collapseDonaciones"
                        >
                            Ingresos por Donaciones
                        </button>
                        <ul className="collapse container" id="collapseDonaciones" style={{ backgroundColor: "#d3d3d3" }}>
                            <IngresosDonaciones setFormDonaciones={setFormDonaciones} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button
                            className="btn btn-secondary dropdown-toggle button-style text-start"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEmprendimineto"
                            aria-expanded="false"
                            aria-controls="collapseEmprendimineto"
                        >
                            Ingresos por Emprendimiento
                        </button>
                        <ul className="collapse container" id="collapseEmprendimineto" style={{ backgroundColor: "#d3d3d3" }}>
                            <IngresosEmprendimiento
                                setFormEmprendimiento={setFormEmprendimiento}
                            />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button
                            className="btn btn-secondary dropdown-toggle button-style text-start"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseIrregulares"
                            aria-expanded="false"
                            aria-controls="collapseIrregulares"
                        >
                            Ingresos Irregulares
                        </button>
                        <ul className="collapse container" id="collapseIrregulares" style={{ backgroundColor: "#d3d3d3" }}>
                            <IngresosIrregulares setFormIrregulares={setFormIrregulares} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormIngresos;
