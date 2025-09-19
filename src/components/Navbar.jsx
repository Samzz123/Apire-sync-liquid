import React from "react";
import { useState } from "react";
import CareerAIChat from "./CareerAIChat";

export default function Navbar() {
  const [aiOpen, setAiOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        {/* existing navbar code */}
        <button className="nav-ai-btn" onClick={() => setAiOpen(true)} title="Career AI">
          💬
        </button>
      </nav>
      <CareerAIChat open={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
