import React, { useState } from 'react'
import ViviendaServicios from './ViviendaServicios'
import SuministroHogar from './SuministroHogar'
import AlimentosComestibles from './AlimentosComestibles'
import Transporte from './Transporte'
import Salud from './Salud'
import Infantil from './Infantil'
import Deudas from './Deudas'
import Entretenimiento from './Entretenimiento'
import GastosChart from '../GastosChart'

const FormGastos = () => {
    const [ ViviendaServiciosData, setViviendaServiciosData ] = useState([]);
    const [ SuministroHogarData, setSuministroHogarData ] = useState([]);
    const [ AlimentosComestiblesData, setAlimentosComestiblesData ] = useState([]);
    const [ TransporteData, setTransporteData ] = useState([]);
    const [ SaludData, setSaludData ] = useState([]);
    const [ InfantilData, setInfantilData ] = useState([]);
    const [ DeudasData, setDeudasData ] = useState([]);
    const [ EntretenimientoData, setEntreteniminetoData ] = useState([]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="drop-size mb-2">
                        <label htmlFor="IngresosInput" className="form-label">Ingresos Mensuales</label>
                        <input type="text" className="form-control" id="IngresosInput" />
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Vivienda y Servicios
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <ViviendaServicios setViviendaServiciosData={setViviendaServiciosData} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle d-inline-block button-style btn-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Entretenimiento
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <Entretenimiento setEntreteniminetoData={setEntreteniminetoData} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle d-inline-block button-style btn-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Suministro del Hogar
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <SuministroHogar setSuministroHogarData={setSuministroHogarData} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle d-inline-block button-style btn-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Alimentos y Comestibles
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <AlimentosComestibles setAlimentosComestiblesData={setAlimentosComestiblesData} />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle d-inline-block button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Transporte
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <Transporte
                                setTransporteData={setTransporteData}
                            />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle d-inline-block button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Salud
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <Salud
                                setSaludData={setSaludData}
                            />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle d-inline-block button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Infantil
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <Infantil
                                setInfantilData={setInfantilData}
                            />
                        </ul>
                    </div>
                    <div className="dropdown drop-size">
                        <button className="btn btn-secondary dropdown-toggle d-inline-block button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Deudas
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <Deudas
                                setDeudasData={setDeudasData}
                            />
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <GastosChart ViviendaServiciosData={ViviendaServiciosData}
                        SuministroHogarData={SuministroHogarData}
                        AlimentosComestiblesData={AlimentosComestiblesData}
                        TransporteData={TransporteData}
                        SaludData={SaludData}
                        InfantilData={InfantilData}
                        DeudasData={DeudasData}
                        setEntreteniminetoData={EntretenimientoData}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormGastos