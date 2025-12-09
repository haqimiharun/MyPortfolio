
import { GoogleGenAI } from "@google/genai";
import { profile, experience, projects, skills, education, certifications, activities } from '../data';

// Polyfill for process to avoid TypeScript errors in the browser build
declare const process: any;

// Construct a context string from the data to feed into the AI
const contextData = JSON.stringify({
  profile,
  experience,
  education,
  certifications,
  projects,
  skills,
  activities
}, null, 2);

const SYSTEM_INSTRUCTION = `
You are an intelligent AI assistant for ${profile.name}'s portfolio website.
Your goal is to answer questions about ${profile.name}'s professional background, skills, education, and projects based STRICTLY on the provided context data.

Context Data:
${contextData}

Rules:
1. Be professional, concise, and friendly.
2. If the answer is not in the context data, politely say you don't have that information but suggest contacting ${profile.name} directly.
3. Do not hallucinate experience or skills not listed.
4. Keep answers brief (under 3 sentences) unless asked for elaboration.
5. Refer to ${profile.name} in the third person (e.g., "Muhammad has experience with...") or first person if you prefer to embody a "digital twin" persona.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    // Note: API_KEY is injected by Vite's define plugin during build
    if (!process.env.API_KEY) {
      return "Error: API Key is missing in the environment variables.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const text = response.text;
    return text || "I'm sorry, I couldn't generate a response.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};
