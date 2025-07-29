import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI, // Make sure this is in your .env file
  dangerouslyAllowBrowser: true, // <-- Required if you're calling OpenAI from the browser (Vite dev env)
});

export async function sendMsgToOpenAi(message) {
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // Use chat models now (they're cheaper + faster)
    messages: [{ role: "user", content: message }],
    temperature: 0.7,
    max_tokens: 556,
  });

  return res.choices[0].message.content.trim();
}
