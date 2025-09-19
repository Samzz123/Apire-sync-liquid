// api/gemini-chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }
  try {
    const { model, messages } = req.body;
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      })
    });
    const json = await upstream.json();
    let reply = json?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply.";
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
