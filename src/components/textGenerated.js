import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ReactComponent as PromptLogo } from "../assets/img/prompt.svg";

const TextGenerated = () => {
  const [mostrarTextGenerated, setMostrarTextGenerated] = useState(false);
  const [messages, setMessages] = useState([]);
  const apiKey = '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';
  const staticMessage = "hola como estas";

  const handleClickGenerar = async () => {
    try {
      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are a helpful assistant." }],
      };

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          "Authorization": "Bearer " + apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody),
      });

      if (!response.ok) {
        throw new Error(`La solicitud no se completó correctamente. Código de estado: ${response.status}`);
      }

      const data = await response.json();
      const generatedMessage = data.choices[0].message.content;
      setMessages([...messages, { text: staticMessage, type: 'user' }, { text: generatedMessage, type: 'ai' }]);
      setMostrarTextGenerated(true);
    } catch (error) {
      console.error('Error al realizar la solicitud a la API:', error);
    }
  };

  console.log(messages);

  useEffect(() => {
    handleClickGenerar();
  }, []);

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
                  "The error message you're seeing, or an array as the first argumentjhscviusdyfvuysdfvuy ygidfughfiug udfgihdigufh iudghiudfhgiuf iuhgidufhg",
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

export default TextGenerated;
