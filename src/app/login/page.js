"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  "https://lppjltjoxczooxsbtlyr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwcGpsdGpveGN6b294c2J0bHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDY4MTUsImV4cCI6MjA4MDYyMjgxNX0.AK0i5gbTk12z6dgIrNYkFoi6LQMFocSxbi9lka-GZrc"
);

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  async function login() {
    setErro("");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErro("Credenciais incorretas.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #4b0082, #8a2be2, #6a0dad, #9b30ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "22px",
          padding: "32px",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 0 40px rgba(0,0,0,0.35)",
          textAlign: "center",
        }}
      >
        {/* Avatar */}
        <img
          src="https://i.imgur.com/7yUVE3E.png"
          alt="avatar"
          style={{
            width: "82px",
            height: "82px",
            borderRadius: "50%",
            margin: "0 auto 15px auto",
            border: "2px solid rgba(255,255,255,0.2)",
          }}
        />

        <h1 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "20px" }}>
          Entrar no BillionMind
        </h1>

        {erro && (
          <p style={{ color: "#ff6b6b", marginBottom: "10px" }}>{erro}</p>
        )}

        {/* Input Email */}
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "14px",
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            fontSize: "1rem",
            outline: "none",
          }}
        />

        {/* Input Senha */}
        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "14px",
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            fontSize: "1rem",
            outline: "none",
          }}
        />

        {/* Botão de Login */}
        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg, #ffdd55, #ffbb00, #ffcc33, #ffe680)",
            border: "none",
            color: "#000",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            marginTop: "5px",
            boxShadow: "0 0 12px rgba(255,255,255,0.4)",
          }}
        >
          Entrar
        </button>

        {/* Link Criar Conta */}
        <p
          onClick={() => router.push("/signup")}
          style={{
            marginTop: "18px",
            color: "#ffdd55",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          Criar uma conta
        </p>
      </div>
    </div>
  );
}
