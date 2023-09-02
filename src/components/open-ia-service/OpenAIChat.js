import React, { useState } from "react";
import axios from "axios";

const OpenAIChat = ({ prompt }) => {
  const [input, setInput] = useState(prompt || ""); // Se inicializa con el valor de 'prompt' o vacío si no se proporciona
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content: input,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      if (result.data.choices && result.data.choices.length > 0) {
        setResponse(result.data.choices[0].message.content);
      }
    } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
    }
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default OpenAIChat;
