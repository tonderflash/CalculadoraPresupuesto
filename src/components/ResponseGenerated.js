import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ReactComponent as PromptLogo } from "../assets/img/prompt.svg";
import axios from "axios"; 

const ResponseGenerated = (props) => {
  const [mostrarTextGenerated, setMostrarTextGenerated] = useState(false);
  const [textGenerated, setTextGenerated] = useState("");

  const YOUR_OPENAI_API_KEY = 'sk-...'
  const CONTEXT = 'Eres un asesor financiero y das consejos a tus clientes sobre cómo manejar su dinero.'

  useEffect(() => {
    if (props.params) {
      setTextGenerated(props.params);
    }
  }, [props.params]);

  const handleResponseFromAI = async () => {
    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `${CONTEXT} con estos datos:`,
            },
            {
              role: "user",
              content: props.params,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${YOUR_OPENAI_API_KEY}`,
          },
        }
      );

      if (result.data.choices && result.data.choices.length > 0) {
        setTextGenerated(result.data.choices[0].message.content);
        setMostrarTextGenerated(true);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        switch (error.response.data.error.code) {
          case "invalid_api_key":
            setTextGenerated("Lo siento, hubo un error al generar la respuesta. Por favor, intenta nuevamente más tarde.");
            break;
          default:
            setTextGenerated("Ha ocurrido un error desconocido. Por favor, intenta de nuevo.");
            break;
        }
      } else {
        setTextGenerated("Error desconocido al generar la respuesta. Intenta nuevamente.");
      }
      setMostrarTextGenerated(true);
    }
  };

  return (
    <div>
      <div>
        <div className="d-flex align-items-center">
          <button onClick={handleResponseFromAI} className="btn btn-ia mr-3 mb-0 m-1">
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
                  textGenerated,
                  1000,
                ]}
                cursor={true}
                repeat={0}
                style={{ fontSize: "2em" }}
              />
            </div>}
        </div>
      </div>
    </div>
  );
};

export default ResponseGenerated;