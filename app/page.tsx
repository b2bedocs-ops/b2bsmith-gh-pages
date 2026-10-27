"use client";

import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Welcome to B2B eDocs. We streamline the transmission of your supply chain and medical documents, taking your data workflows to the next level with end-to-end automation.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "We streamline the transmission of your supply chain and medical documents, taking your data workflows to the next level with end-to-end automation.",
          sender: "bot",
        },
      ]);
    }, 800);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", overflow: "hidden" }}>
      
      {/* Header Nav -> Styled with Deep Navy Background */}
      <header style={{ backgroundColor: "var(--brand-navy)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", zIndex: 10 }}>
        <div>
          <span style={{ fontWeight: "bold", fontSize: "1.25rem", letterSpacing: "-0.025em", color: "var(--brand-blue)" }}>
            b2bEdocs
          </span>
        </div>
        {/* <nav style={{ display: "flex", gap: "24px", fontSize: "0.875rem", fontWeight: 500 }}>
          <a href="#" style={{ color: "#e5e7eb", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ color: "#e5e7eb", textDecoration: "none" }}>About</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "#e5e7eb", textDecoration: "none" }}>GitHub</a>
        </nav> */}
      </header>

      {/* Main Content Area - Centers the Chat Box */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", padding: "16px", minHeight: 0 }}>
        
        {/* Chat Box Container */}
        <div style={{ width: "100%", maxWidth: "512px", height: "550px", backgroundColor: "#ffffff", borderRadius: "16px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", border: "1px solid rgba(90, 162, 255, 0.2)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          
          {/* Chat Header -> Deep Navy */}
          <div style={{ backgroundColor: "var(--brand-navy)", padding: "16px 24px", color: "#ffffff", display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid rgba(90, 162, 255, 0.3)" }}>
            <div className="status-pulse" style={{ width: "10px", height: "10px", backgroundColor: "var(--brand-accent)", borderRadius: "50%" }}></div>
            <h2 style={{ fontWeight: 600, fontSize: "1rem", color: "#f3f4f6" }}>Coming Soon!</h2>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "rgba(249, 250, 251, 0.5)" }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{ display: "flex", justifyContent: msg.sender === "user" ? "flex-end" : "flex-start" }}
              >
                <div
                  style={{
                    maxWidth: "75%",
                    borderRadius: "16px",
                    padding: "10px 16px",
                    fontSize: "0.875rem",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                    backgroundColor: msg.sender === "user" ? "var(--brand-blue)" : "#ffffff",
                    color: msg.sender === "user" ? "#ffffff" : "var(--brand-navy)",
                    border: msg.sender === "user" ? "none" : "1px solid var(--gray-border)",
                    borderTopRightRadius: msg.sender === "user" ? "0px" : "16px",
                    borderTopLeftRadius: msg.sender === "user" ? "16px" : "0px",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} style={{ padding: "16px", backgroundColor: "#ffffff", borderTop: "1px solid var(--gray-border)", display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, border: "1px solid var(--gray-border)", borderRadius: "12px", padding: "10px 16px", fontSize: "0.875rem", outline: "none" }}
            />
            <button
              type="submit"
              style={{ backgroundColor: "var(--brand-blue)", color: "#ffffff", border: "none", fontWeight: 500, fontSize: "0.875rem", padding: "10px 20px", borderRadius: "12px", cursor: "pointer", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
