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
          { role: "system", content: "You help users choose assistive devices, explain maintenance, and guide them to services." },
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