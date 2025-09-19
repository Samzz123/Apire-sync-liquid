import React, { useState, useRef, useEffect } from "react";

export default function CareerAIChat({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "👋 Hi! I’m your Career AI. I’ll give you structured 90-day career roadmaps in bullet points. What career path are you curious about?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  if (!open) return null;

  async function sendMessage(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    const userMsg = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "gemini-1.5-flash",
          messages: [
            {
              role: "system",
              text: "You are a career counselor. Always reply with concise bullet points. Structure answers as step-by-step 90-day career plans (Day 0–30, Day 31–60, Day 61–90). Give actionable items like learning resources, practice tasks, and portfolio building ideas."
            },
            ...messages,
            userMsg
          ]
        })
      });
      const data = await res.json();
      const assistantText = data.reply ?? "Sorry, no response.";
      setMessages((m) => [...m, { role: "assistant", text: assistantText }]);
    } catch (err) {
      setMessages((m) => [...m, { role: "assistant", text: "⚠️ Error: " + err.message }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ai-chat-overlay">
      <div className="ai-chat-window">
        <div className="ai-chat-header">
          <h3>Career AI Chat</h3>
          <button onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="ai-chat-body" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`ai-msg ${m.role}`}>
              {m.text}
            </div>
          ))}
          {loading && <div className="ai-msg assistant">Typing…</div>}
        </div>
        <form onSubmit={sendMessage} className="ai-chat-footer">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about careers…" />
          <button type="submit" disabled={loading}>Send</button>
        </form>
      </div>
    </div>
  );
}
