export default function PlansPage() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "system-ui, sans-serif",
        background: "#000",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#f4c86c" }}>Escolha seu plano</h1>
      <p style={{ opacity: 0.7, marginBottom: "30px" }}>
        Liberamos acesso imediato após o pagamento.
      </p>

      {/* PLANO PRO */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2>Plano PRO – R$ 29,98/mês</h2>
        <p>Acesso desbloqueado às ferramentas avançadas.</p>
        <a
          href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "12px 20px",
            borderRadius: "10px",
            background: "#f4c86c",
            color: "#000",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Assinar PRO
        </a>
      </div>

      {/* PLANO PREMIUM */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2>Plano PREMIUM – R$ 39,90/mês</h2>
        <p>Acesso total ao aplicativo.</p>
        <a
          href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "12px 20px",
            borderRadius: "10px",
            background: "linear-gradient(120deg,#f4c86c,#d8a84f)",
            color: "#000",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Assinar PREMIUM
        </a>
      </div>
    </main>
  );
}
