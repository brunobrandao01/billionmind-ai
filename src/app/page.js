export default function Home() {
  return (
    <main style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "38px", fontWeight: "700" }}>
        Transforme sua mente em uma <span className="gold">BillionMind</span>:
        disciplina, luxo e liberdade em um único chat.
      </h1>

      <p style={{ marginTop: 20, color: "var(--text-soft)", fontSize: 18 }}>
        BillionMind AI é um assistente de alta performance criado para qualquer pessoa 
        que quer organizar rotina, riqueza, hábitos e mentalidade em uma experiência 
        simples de chat, direto no navegador.
      </p>

      <div style={{ marginTop: 30 }}>
        <a href="/signup" className="btn-primary glow">
          Criar minha conta PRO
        </a>

        <a href="/como-funciona" className="btn-outline" style={{ marginTop: 14, display: "block" }}>
          Ver como funciona
        </a>
      </div>

      <section className="card" style={{ marginTop: 60 }}>
        <h2>Seu chat de alta performance</h2>
        <p style={{ color: "var(--text-soft)" }}>
          Rotinas diárias prontas para executar · Mensagens motivacionais · 
          Geração de imagens lifestyle via IA.
        </p>
      </section>

    </main>
  );
}
