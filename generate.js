import 'dotenv/config'; //securing my api key
import { GoogleGenAI } from '@google/genai'; // google gen ai library

async function main() {
  const prompt = process.argv.slice(2).join(' ');
  if (!prompt) {
    console.error(' Usage: node generate.js <your question>');
    process.exit(1);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });

    console.log(' AI Response:\n', response.text);
  } catch (error) {
    console.error(' Error while generating content:', error.message || error);
    process.exit(1); 
  }
}

main();
