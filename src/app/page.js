export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0a0f, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "360px",
          background: "rgba(255,255,255,0.04)",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#f4c86c", marginBottom: "20px" }}>
          BillionMind AI
        </h1>

        <p style={{ fontSize: "0.95rem", color: "#ccc", marginBottom: "20px" }}>
          Entre para acessar a inteligência artificial, ferramentas exclusivas e
          área premium.
        </p>

        <a
          href="/login"
          style={{
            display: "block",
            padding: "12px",
            borderRadius: "10px",
            background: "linear-gradient(120deg, #f4c86c, #e1a93f)",
            color: "#000",
            fontWeight: "bold",
            textDecoration: "none",
            marginBottom: "12px",
          }}
        >
          Fazer Login
        </a>

        <a
          href="/signup"
          style={{
            display: "block",
            padding: "12px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            fontWeight: "bold",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          Criar Conta
        </a>
      </div>
    </main>
  );
}
