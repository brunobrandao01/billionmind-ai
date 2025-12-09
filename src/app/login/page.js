"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// Supabase (substitua pelos seus valores reais)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Animação de entrada
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <>
      <style jsx global>{`
        body {
          background: #000;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          font-family: "Inter", system-ui, sans-serif;
        }
        .bg-particles {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 20% 80%, rgba(244, 200, 108, 0.08), transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(244, 200, 108, 0.06), transparent 50%),
                      #000;
          z-index: 1;
        }
        .glow-center {
          position: fixed;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(244, 200, 108, 0.18), transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: pulse 12s infinite ease-in-out;
          z-index: 2;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.4); }
        }
      `}</style>

      <div className="bg-particles" />
      <div className="glow-center" />

      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(15, 15, 30, 0.55)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(244, 200, 108, 0.3)",
            borderRadius: "28px",
            padding: "48px 40px",
            width: "100%",
            maxWidth: "460px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 80px rgba(244,200,108,0.2)",
            animation: "fadeIn 1.2s ease-out forwards",
            opacity: 0,
          }}
        >
          {/* Título */}
          <h1
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "3.2rem",
              fontWeight: 900,
              textAlign: "center",
              background: "linear-gradient(90deg, #fff, #f4c86c, #fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "8px",
            }}
          >
            BillionMind AI
          </h1>
          <p
            style={{
              textAlign: "center",
              color: "#c2c3d6",
              fontSize: "1.1rem",
              marginBottom: "40px",
            }}
          >
            Acesse sua conta e entre no sistema
          </p>

          {/* Erro */}
          {error && (
            <div
              style={{
                background: "rgba(255,51,102,0.15)",
                border: "1px solid #ff3366",
                color: "#ff6b6b",
                padding: "12px 16px",
                borderRadius: "12px",
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "0.95rem",
              }}
            >
              {error}
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "16px 20px",
                marginBottom: "16px",
                background: "rgba(30,30,50,0.6)",
                border: "1px solid rgba(244,200,108,0.3)",
                borderRadius: "14px",
                color: "#fff",
                fontSize: "1rem",
                outline: "none",
                transition: "all 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f4c86c")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(244,200,108,0.3)")}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "16px 20px",
                marginBottom: "24px",
                background: "rgba(30,30,50,0.6)",
                border: "1px solid rgba(244,200,108,0.3)",
                borderRadius: "14px",
                color: "#fff",
                fontSize: "1rem",
                outline: "none",
                transition: "all 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f4c86c")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(244,200,108,0.3)")}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "18px",
                background: loading
                  ? "rgba(244,200,108,0.6)"
                  : "linear-gradient(90deg, #f4c86c, #ffd700)",
                color: "#000",
                fontSize: "1.3rem",
                fontWeight: 800,
                fontFamily: "'Orbitron', sans-serif",
                border: "none",
                borderRadius: "16px",
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: "0 12px 30px rgba(244,200,108,0.5)",
                transition: "all 0.3s",
              }}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "24px",
              color: "#aaa",
              fontSize: "0.95rem",
            }}
          >
            Não tem conta?{" "}
            <a
              href="/register"
              style={{
                color: "#f4c86c",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Criar Conta
            </a>
          </p>

          {/* Bloco de Assinaturas */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px dashed rgba(244,200,108,0.3)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#f4c86c",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              Desbloqueie todo o poder da BillionMind AI
            </p>

            <a
              href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
              target="_blank"
              style={{
                display: "block",
                marginBottom: "16px",
                padding: "16px",
                background: "linear-gradient(90deg, #f4c86c, #ffd700)",
                color: "#000",
                fontWeight: 800,
                fontSize: "1.15rem",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(244,200,108,0.4)",
              }}
            >
              Plano PRO
            </a>

            <a
              href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
              target="_blank"
              style={{
                display: "block",
                padding: "16px",
                background: "linear-gradient(90deg, #b8860b, #f4c86c)",
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.15rem",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 12px 40px rgba(244,200,108,0.6)",
              }}
            >
              Plano PREMIUM (Recomendado)
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
