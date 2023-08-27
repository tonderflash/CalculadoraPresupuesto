import React, { useState } from 'react'
import IngresoAhorros from './IngresoAhorros';

const FormAhorros = () => {
    const [FormAhorros, setFormAhorros] = useState([]);

    console.log(FormAhorros);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="dropdown drop-size">
                        <button className="btn btn-success dropdown-toggle button-style" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ahorros
                        </button>
                        <ul className="dropdown-menu col-12 menu-size">
                            <IngresoAhorros setFormAhorros={setFormAhorros} />
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    )
}

export default FormAhorros
