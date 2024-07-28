import { GoogleGenerativeAI } from "@google/generative-ai"

  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyACb66UGSjHnYB-wm2oTwlobZbCIJPhs-Q";

  async function runChat(prompt){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        top_p: 1,
        top_k: 1,
        max_output_tokens: 2048,
    };
    const safetySettings = [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ];

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
      });

      const result = await chat.sendMessage(prompt);
      const response = result.response;
      console.log(response.text());
      return response.text();
  }

  export default runChat;