import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ReactComponent as PromptLogo } from "../assets/img/prompt.svg";
import axios from "axios";

const ResponseGenerated = (props) => {
  const [textGenerated, setTextGenerated] = useState("");
  const [keyCounter, setKeyCounter] = useState(0);

  const YOUR_OPENAI_API_KEY =
    "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";
  const CONTEXT =
    "Eres un asesor financiero y das consejos a tus clientes sobre cómo manejar su dinero, da una respuesta no muy larga.";

  useEffect(() => {
    if (props.params) {
      setTextGenerated(props.params);
    }
  }, [props.params]);

  function filterZeroValues(data) {
    return {
      ...data,
      consolidatedDataIngresos: data.consolidatedDataIngresos
        .map((item) => ({
          ...item,
          subExpenses: item.subExpenses.filter(
            (subItem) => subItem.value !== 0
          ),
        }))
        .filter((item) => item.value !== 0 || item.subExpenses.length > 0),

      consolidatedDataAhorros: data.consolidatedDataAhorros
        .map((item) => ({
          ...item,
          subExpenses: item.subExpenses.filter(
            (subItem) => subItem.value !== 0
          ),
        }))
        .filter((item) => item.value !== 0 || item.subExpenses.length > 0),

      consolidatedDataGastos: data.consolidatedDataGastos
        .map((item) => ({
          ...item,
          subExpenses: item.subExpenses.filter(
            (subItem) => subItem.value !== 0
          ),
        }))
        .filter((item) => item.value !== 0 || item.subExpenses.length > 0),
    };
  }

  function hasData(obj) {
    return Object.values(obj).some((array) => array.length > 0);
  }

  const handleResponseFromAI = async () => {
    if (!props.budgetData || Object.keys(props.budgetData).length === 0) {
      setTextGenerated("Por favor, ingresa datos para obtener una respuesta.");
      setKeyCounter((prev) => prev + 1);
      return; // Termina la ejecución aquí si no hay datos
    }

    const userMessageContent = props.budgetData;
    const filteredData = filterZeroValues(userMessageContent);
    console.log("filteredData", filteredData);

    if (!hasData(filteredData)) {
      setTextGenerated(
        "Por favor, ingresa datos válidos para obtener una respuesta."
      );
      setKeyCounter((prev) => prev + 1);
      return; // Termina la ejecución aquí si no hay datos válidos
    }

    setTextGenerated("Cargando..."); // Antes de realizar la solicitud
    setKeyCounter((prev) => prev + 1);

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
              content: JSON.stringify(filteredData), // Asegúrate de usar filteredData
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
        setKeyCounter((prev) => prev + 1);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        switch (error.response.data.error.code) {
          case "invalid_api_key":
            setTextGenerated(
              "Lo siento, hubo un error al generar la respuesta. Por favor, intenta nuevamente más tarde."
            );
            break;
          default:
            setTextGenerated(
              "Ha ocurrido un error desconocido. Por favor, intenta de nuevo."
            );
            break;
        }
        setKeyCounter((prev) => prev + 1); // No olvides actualizar keyCounter aquí
      } else {
        console.error("Detailed error:", error);
        setTextGenerated(
          "Error desconocido al generar la respuesta. Intenta nuevamente."
        );
        setKeyCounter((prev) => prev + 1);
      }
    }
  };

  return (
   
      <div style={{width: "100%"}}>
        <div className="d-flex justify-content-center" style={{gap: "1%"}}>
          <button
            onClick={handleResponseFromAI}
            className="btn btn-ia"
            style={{minWidth: "112px"}}
          >
            <div className="d-flex align-items-center ">
              <PromptLogo style={{width: "35%"}} className="svg-logo" />
              <span style={{width: "100%"}}>Generar</span>
            </div>
          </button>
          <div className="description" style={{lineHeight: "18px"}}>
            Genera tu asesoramiento financiero con inteligencia artificial
          </div>
        </div>
        <div className="response-style mt-3">
          {textGenerated && (
            <TypeAnimation
              key={keyCounter}
              sequence={[2000, textGenerated, 2000]}
              cursor={true}
              repeat={0}
              style={{ fontSize: "2em" }}
            />
          )}
        </div>
      </div>
  );
};

export default ResponseGenerated;
