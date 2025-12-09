"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Planos() {
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        window.location.href = "/login";
        return;
      }

      setUser(data.user);
      checkPlan(data.user.id);
    }
    load();
  }, []);

  async function checkPlan(userId) {
    const { data } = await supabase
      .from("profiles")
      .select("plan")
      .eq("id", userId)
      .single();

    if (data?.plan && data.plan !== "free") {
      window.location.href = "/dashboard";
      return;
    }

    setPlan(data?.plan || "free");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1b1b1f, #0b0b0d 60%, #000 100%)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            color: "#f4c86c",
            letterSpacing: "2px",
            marginBottom: "10px",
            fontSize: "2rem",
          }}
        >
          Escolha seu plano
        </h1>

        <p style={{ color: "#bbb", marginBottom: "40px" }}>
          Desbloqueie todo o poder do BillionMind AI.
        </p>

        {/* GRID DOS PLANOS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {/* FREE */}
          <div
            style={{
              padding: "25px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2 style={{ color: "#f4c86c", marginBottom: "10px" }}>Plano Free</h2>
            <p style={{ marginBottom: "18px", color: "#bbb" }}>
              Acesso ao chat básico ilimitado.
            </p>
            <p style={{ color: "#888" }}>R$ 0 / mês</p>
          </div>

          {/* PRO */}
          <div
            style={{
              padding: "25px",
              background:
                "linear-gradient(145deg, rgba(244,200,108,0.18), rgba(255,255,255,0.05))",
              borderRadius: "16px",
              border: "1px solid rgba(244,200,108,0.35)",
              boxShadow: "0 0 20px rgba(244,200,108,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              style={{
                color: "#f4c86c",
                marginBottom: "10px",
                fontSize: "1.3rem",
              }}
            >
              🚀 PRO
            </h2>
            <p style={{ marginBottom: "18px", color: "#ddd" }}>
              Ferramentas avançadas + criação automática + prioridade.
            </p>

            <p
              style={{
                color: "#f4c86c",
                fontSize: "1.5rem",
                marginBottom: "16px",
              }}
            >
              R$ 29,98 / mês
            </p>

            <button
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                background: "#f4c86c",
              }}
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/14AcN5buodjRewI8cQcAo01")
              }
            >
              Assinar PRO
            </button>
          </div>

          {/* PREMIUM */}
          <div
            style={{
              padding: "25px",
              background:
                "linear-gradient(145deg, rgba(244,200,108,0.3), rgba(255,255,255,0.05))",
              borderRadius: "16px",
              border: "1px solid rgba(244,200,108,0.6)",
              boxShadow: "0 0 25px rgba(244,200,108,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              style={{
                color: "#f4c86c",
                marginBottom: "10px",
                fontSize: "1.3rem",
              }}
            >
              👑 PREMIUM
            </h2>
            <p style={{ marginBottom: "18px", color: "#ddd" }}>
              Acesso total + módulos extras + IA avançada ilimitada.
            </p>

            <p
              style={{
                color: "#f4c86c",
                fontSize: "1.5rem",
                marginBottom: "16px",
              }}
            >
              R$ 39,90 / mês
            </p>

            <button
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                background: "#f4c86c",
              }}
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02")
              }
            >
              Assinar PREMIUM
            </button>
          </div>
        </div>

        {/* VOLTAR */}
        <p
          onClick={() => (window.location.href = "/dashboard")}
          style={{
            marginTop: "35px",
            cursor: "pointer",
            color: "#aaa",
            textDecoration: "underline",
          }}
        >
          Voltar ao Dashboard
        </p>
      </div>
    </div>
  );
}
