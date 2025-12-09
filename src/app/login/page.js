"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin() {
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Preencha todos os campos.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at top, #1b1b1f 0%, #0b0b0d 60%, #000 100%)",
      }}
    >
      <div
        className="fade-in"
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "32px",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#f4c86c",
            fontSize: "1.8rem",
            marginBottom: "20px",
          }}
        >
          Entrar na BillionMind
        </h1>

        {/* ERROR */}
        {errorMsg && (
          <p
            style={{
              color: "#ff6b6b",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            {errorMsg}
          </p>
        )}

        {/* INPUT EMAIL */}
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "12px",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "white",
            fontSize: "1rem",
          }}
        />

        {/* INPUT SENHA */}
        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "18px",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "white",
            fontSize: "1rem",
          }}
        />

        {/* BOTÃO LOGIN */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #f4c86c, #d9a84f)",
            color: "#000",
            fontWeight: "700",
            fontSize: "1.05rem",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(244,200,108,0.25)",
            transition: "0.25s",
          }}
        >
          Entrar
        </button>

        {/* LINK PARA CRIAR CONTA */}
        <p
          style={{
            textAlign: "center",
            marginTop: "14px",
            color: "#f4c86c",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/signup")}
        >
          Criar conta
        </p>
      </div>
    </div>
  );
}
