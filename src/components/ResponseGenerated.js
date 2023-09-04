import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ReactComponent as PromptLogo } from "../assets/img/prompt.svg";

const ResponseGenerated = () => {
  const [mostrarTextGenerated, setMostrarTextGenerated] = useState(false);
  const handleClickGenerar = async () => {
    setMostrarTextGenerated(true);
  };

  return (
    <div>
      <div>
        <div className="d-flex align-items-center">
          <button onClick={handleClickGenerar} className="btn btn-ia mr-3 mb-0 m-1">
            <PromptLogo className="svg-logo mr-2" />
            Generar
          </button>
          <div className="description m-1">
            Genera tu asesoramiento financiero con inteligencia artificial
          </div>
        </div>
        <div className="response-style w-100">
          {mostrarTextGenerated &&
            <div>
              <TypeAnimation
                sequence={[
                  1000,
                  "Hola, soy tu asesor financiero virtual. Te ayudaré a tomar las mejores decisiones para tu futuro financiero.",
                  1000,
                ]}
                cursor={true}
                repeat={0}
                style={{ fontSize: "2em" }}
              />
            </div>}
        </div>
      </div>
    </div >
  );
};

export default ResponseGenerated;