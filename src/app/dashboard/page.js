
"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState("free");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // 1 — CHECAR LOGIN
  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        window.location.href = "/login";
        return;
      }
      setUser(data.user);
      loadPlan(data.user.id);
    }
    loadUser();
  }, []);

  // 2 — PEGAR PLANO DO SUPABASE
  async function loadPlan(id) {
    const { data } = await supabase
      .from("profiles")
      .select("plan")
      .eq("id", id)
      .single();

    if (data) setPlan(data.plan);
  }

  // 3 — ENVIAR MENSAGEM PARA A API DO CHAT
  async function sendMessage() {
    if (!message.trim()) return;

    setChat((old) => [...old, { from: "user", text: message }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const json = await res.json();

    setChat((old) => [...old, { from: "ai", text: json.reply }]);
    setMessage("");
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ color: "#f4c86c" }}>BillionMind AI</h1>

      <p style={{ opacity: 0.7 }}>
        Plano atual: <strong>{plan.toUpperCase()}</strong>
      </p>

      {/* CHAT LIVRE */}
      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
          border: "1px solid #333",
        }}
      >
        <h2 style={{ color: "#f4c86c" }}>Chat Inteligente</h2>

        <div
          style={{
            height: "260px",
            overflowY: "auto",
            marginBottom: "12px",
            background: "#000",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #222",
          }}
        >
          {chat.map((c, i) => (
            <div
              key={i}
              style={{
                textAlign: c.from === "user" ? "right" : "left",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  color: c.from === "user" ? "#f4c86c" : "#ddd",
                }}
              >
                {c.from === "user" ? "Você" : "AI"}: {c.text}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              background: "#222",
              color: "white",
              border: "none",
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              background: "#f4c86c",
              color: "#000",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </div>
      </div>

      {/* ÁREA PREMIUM BLOQUEADA */}
      {plan === "free" && (
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            marginTop: "30px",
            borderRadius: "16px",
            border: "1px solid #333",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#f4c86c" }}>Área Premium</h2>
          <p style={{ opacity: 0.6 }}>
            Funções avançadas disponíveis apenas para PRO e PREMIUM.
          </p>

          <a
            href="/plans"
            style={{
              marginTop: "12px",
              display: "inline-block",
              padding: "12px 20px",
              background: "#f4c86c",
              borderRadius: "999px",
              color: "#000",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            🔓 Fazer upgrade agora
          </a>
        </div>
      )}

      <p
        onClick={logout}
        style={{
          marginTop: "40px",
          textAlign: "center",
          opacity: 0.7,
          cursor: "pointer",
        }}
      >
        Sair da conta
      </p>
    </div>
  );
}
