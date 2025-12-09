"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState("free");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Carrega usuário automaticamente
  useEffect(() => {
    async function load() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        window.location.href = "/login";
        return;
      }
      setUser(data.user);
      loadPlan(data.user.id);
    }
    load();
  }, []);

  // Carrega plano do usuário
  async function loadPlan(userId) {
    const { data } = await supabase
      .from("profiles")
      .select("plan")
      .eq("id", userId)
      .single();

    if (data?.plan) setPlan(data.plan);
  }

  // Envia mensagem ao endpoint /api/chat
  async function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    const userMessage = input;
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      { from: "ai", text: data.reply || "Erro ao processar resposta." },
    ]);
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1b1b1f 0%, #0b0b0d 60%, #000 100%)",
        paddingBottom: "50px",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "20px 30px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 style={{ color: "#f4c86c", letterSpacing: "2px" }}>
          BillionMind AI
        </h1>

        <div
          style={{
            padding: "6px 16px",
            borderRadius: "30px",
            border: "1px solid rgba(244,200,108,0.25)",
            background: "rgba(255,255,255,0.05)",
            color: "#f4c86c",
            fontWeight: "bold",
          }}
        >
          Plano: {plan.toUpperCase()}
        </div>
      </header>

      {/* CONTAINER */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >
        {/* CHAT FREE */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "20px",
            backdropFilter: "blur(8px)",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#f4c86c",
              marginBottom: "14px",
              letterSpacing: "1px",
            }}
          >
            Chat Inteligente
          </h2>

          <div
            style={{
              height: "280px",
              overflowY: "auto",
              padding: "10px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: "12px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.from === "user" ? "right" : "left",
                  marginBottom: "10px",
                  color: m.from === "user" ? "#f4c86c" : "#fff",
                }}
              >
                {m.from === "user" ? "Você: " : "AI: "}
                {m.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              style={{
                flex: 1,
                padding: "12px",
                background: "rgba(255,255,255,0.08)",
                border: "none",
                borderRadius: "10px",
                color: "white",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "12px 20px",
                background: "linear-gradient(135deg, #f4c86c, #d9a84f)",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Enviar
            </button>
          </div>
        </div>

        {/* ÁREA PRO / PREMIUM */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "20px",
            backdropFilter: "blur(8px)",
            marginBottom: "20px",
            opacity: plan === "free" ? 0.4 : 1,
            position: "relative",
          }}
        >
          <h2
            style={{
              color: "#f4c86c",
              marginBottom: "14px",
            }}
          >
            Ferramentas Avançadas
          </h2>

          <p>Criação automática, estratégias, análises premium e muito mais.</p>

          {plan === "free" && (
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0,0,0,0.7)",
                padding: "10px 18px",
                borderRadius: "12px",
                border: "1px solid rgba(244,200,108,0.3)",
                color: "#f4c86c",
                fontWeight: "bold",
              }}
            >
              Disponível apenas para PRO / PREMIUM
            </div>
          )}
        </div>

        {/* UPGRADE BUTTONS */}
        {plan === "free" && (
          <>
            <button
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/14AcN5buodjRewI8cQcAo01")
              }
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "12px",
                borderRadius: "999px",
                border: "none",
                background: "#f4c86c",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              🔓 Desbloquear Plano PRO – R$ 29,98/mês
            </button>

            <button
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02")
              }
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "999px",
                border: "none",
                background: "#e6b85c",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              🚀 Desbloquear Plano PREMIUM – R$ 39,90/mês
            </button>
          </>
        )}

        {/* LOGOUT */}
        <p
          onClick={logout}
          style={{
            marginTop: "20px",
            textAlign: "center",
            cursor: "pointer",
            color: "#aaa",
          }}
        >
          Sair da conta
        </p>
      </div>
    </div>
  );
}
