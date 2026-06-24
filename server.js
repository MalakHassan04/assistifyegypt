const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Load config
let OPENAI_API_KEY = "";
try {
  const CONFIG = require("./config.js");
  OPENAI_API_KEY = CONFIG.GROQ_API_KEY;
} catch (e) {
  OPENAI_API_KEY = process.env.GROQ_API_KEY || "";
}

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are a specialized Assistify support assistant for Assistify Egypt. Your responses MUST be structured, professional, and EXCLUSIVELY use bullet points for information. DO NOT use long paragraphs. Keep information concise and easy to read. You must ONLY respond to topics directly related to: Assistive and adaptive equipment, Mobility aids, Wheelchairs, Walkers, Crutches, Prosthetics, Bathroom and daily living aids, Equipment maintenance and repairs, Product recommendations available on Assistify, Accessibility and assistive technology, Website navigation and support, and Assistify Egypt services. If the user asks about ANY unrelated topic (including politics, sports, entertainment, coding, math, general knowledge, personal advice, etc.), you must politely refuse and redirect the conversation back to Assistify by replying EXACTLY with: \"I'm here to help with Assistify Egypt services, assistive equipment, accessibility solutions, and maintenance support. Please ask me a question related to assistive technology or products available through Assistify.\" Do not provide any other text or general-purpose AI responses for unrelated topics. If you detect or the user mentions a serious issue or malfunction, you MUST tell them in a prominent bullet point to submit a request from our Services page so we can send a technician right away." },
          { role: "user", content: userMessage }
        ]
      })
    });

    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));