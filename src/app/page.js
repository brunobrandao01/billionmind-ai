export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0d] text-white">
      {/* NAVBAR */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-transparent fixed top-0 left-0 right-0 z-20">
        <h1 className="text-2xl font-semibold tracking-wide">
          <span className="text-white">BILLION</span>
          <span className="text-[#f4c86c]">MIND</span> <span className="text-[#f4c86c]">AI</span>
        </h1>

        <nav className="flex gap-6 text-sm text-gray-300">
          <a href="#funciona" className="hover:text-white transition">Como funciona</a>
          <a href="#jornadas" className="hover:text-white transition">Jornadas</a>
          <a href="#planos" className="hover:text-white transition">Planos</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-28 px-6 text-left max-w-3xl mx-auto">
        <p className="text-[#f4c86c] text-sm mb-3">
          Seu chat de alta performance, estilo de vida e disciplina.
        </p>

        <h1 className="text-4xl font-bold leading-tight text-white mb-5">
          Transforme sua mente em uma <span className="text-[#f4c86c]">BillionMind</span>:
          disciplina, luxo e liberdade em um único chat.
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          BillionMind AI é um assistente de alta performance criado para qualquer pessoa
          que queira organizar rotina, riqueza, hábitos e mentalidade em uma experiência
          simples de chat, direto no navegador.
        </p>

        <div className="flex gap-4">
          <a
            href="/signup"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f4c86c] to-[#d3a654] text-black font-semibold shadow-lg"
          >
            Criar minha conta PRO
          </a>

          <a
            href="#funciona"
            className="px-6 py-3 rounded-full border border-[#f4c86c] text-[#f4c86c] font-semibold"
          >
            Ver como funciona
          </a>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="funciona" className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Como BillionMind AI funciona na prática.</h2>

        <p className="text-gray-300 mb-10 text-lg">
          O app foi projetado para qualquer pessoa no mundo: você abre, escreve o que quer mudar
          e o chat monta rotinas, tarefas, frases e imagens para apoiar sua nova mentalidade –
          tudo em uma única página.
        </p>

        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <div className="bg-[#101016] p-6 rounded-xl shadow-lg border border-[#1f1f24]">
            <h3 className="text-xl font-semibold mb-2">Chat de alta performance</h3>
            <p className="text-gray-400 leading-relaxed">
              Você conversa com a IA como se estivesse falando com um mentor: fala da sua rotina,
              da sua vida e dos seus objetivos, e recebe respostas diretas, práticas e aplicáveis
              no mesmo dia.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#101016] p-6 rounded-xl shadow-lg border border-[#1f1f24]">
            <h3 className="text-xl font-semibold mb-2">Planos diários e tarefas</h3>
            <p className="text-gray-400 leading-relaxed">
              O app cria planos estruturados de 7, 21 ou 30 dias com tarefas diárias, metas de foco
              e checagens simples para você seguir sem se perder no excesso de informação.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#101016] p-6 rounded-xl shadow-lg border border-[#1f1f24]">
            <h3 className="text-xl font-semibold mb-2">Imagens de lifestyle via IA</h3>
            <p className="text-gray-400 leading-relaxed">
              Você pede e a IA sugere prompts de imagens de carros, cidades, viagens, escritórios e
              cenas de luxo para gerar em qualquer gerador de imagens do mundo.
            </p>
          </div>
        </div>
      </section>

      {/* JORNADAS */}
      <section id="jornadas" className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Jornadas guiadas que qualquer pessoa pode seguir.
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          Em vez de só responder perguntas, BillionMind AI organiza sua evolução em “caminhos”
          claros. Você escolhe a jornada e o chat mostra o que fazer hoje, amanhã e nas próximas semanas.
        </p>

        <div className="flex flex-col gap-8">

          {/* Jornada 1 */}
          <div className="bg-[#0f0f14] p-6 rounded-xl border border-[#1f1f24] shadow-lg">
            <h4 className="text-sm text-[#7aa7ff] mb-1">JORNADA 01</h4>
            <h3 className="text-xl font-semibold mb-3">30 dias de disciplina absoluta</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Despertar com propósito e horários definidos.</li>
              <li>• Blocos de foco para trabalho, estudo ou projeto.</li>
              <li>• Rituais noturnos para encerrar o dia com consciência.</li>
            </ul>
          </div>

          {/* Jornada 2 */}
          <div className="bg-[#0f0f14] p-6 rounded-xl border border-[#1f1f24] shadow-lg">
            <h4 className="text-sm text-[#7aa7ff] mb-1">JORNADA 02</h4>
            <h3 className="text-xl font-semibold mb-3">Renda extra e mentalidade de dono</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Mapeamento de habilidades e oportunidades.</li>
              <li>• Uma ação de dinheiro por dia (simples e objetiva).</li>
              <li>• Revisão semanal de ganhos, erros e ajustes.</li>
            </ul>
          </div>

          {/* Jornada 3 */}
          <div className="bg-[#0f0f14] p-6 rounded-xl border border-[#1f1f24] shadow-lg">
            <h4 className="text-sm text-[#7aa7ff] mb-1">JORNADA 03</h4>
            <h3 className="text-xl font-semibold mb-3">Lifestyle de luxo consciente</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Mentalidade de riqueza aplicada ao estilo de vida.</li>
              <li>• Ritual semanal de organização e clareza mental.</li>
              <li>• Hábitos de autocuidado e estética premium.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="px-6 pb-32 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Planos simples para qualquer realidade.</h2>

        <p className="text-gray-300 mb-10 text-lg">
          Escolha se quer experimentar gratuitamente ou destravar todo o poder da BillionMind AI com
          acesso PRO e ELITE. Você pode mudar ou cancelar o plano a qualquer momento.
        </p>

        {/* FREE */}
        <div className="bg-[#101016] p-6 rounded-xl mb-10 border border-[#1f1f24]">
          <h3 className="text-xl font-semibold mb-1">FREE · Começar hoje</h3>
          <p className="text-gray-300 mb-4">Para qualquer pessoa dar o primeiro passo sem pagar nada.</p>

          <p className="text-3xl font-bold mb-2">R$ 0 <span className="text-lg font-normal">/ mês</span></p>

          <ul className="text-gray-300 mb-6 space-y-2">
            <li>✓ Acesso ao chat com respostas básicas.</li>
            <li>✓ 1 jornada liberada (30 dias de disciplina).</li>
            <li>✓ Ideias limitadas de prompts para imagens.</li>
            <li>✓ Resumo semanal simples de progresso.</li>
          </ul>

          <a
            href="/signup"
            className="px-6 py-3 rounded-full bg-transparent border border-[#f4c86c] text-[#f4c86c] font-semibold block text-center"
          >
            Começar de graça
          </a>
        </div>

        {/* PRO */}
        <div className="bg-[#101016] p-6 rounded-xl mb-10 border border-[#f4c86c]/40 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">PRO · Rotina e Renda</h3>
            <span className="text-xs bg-[#f4c86c] text-black px-2 py-1 rounded-full">Recomendado</span>
          </div>

          <p className="text-gray-300 mb-4">Para quem quer viver na prática o que a BillionMind AI sugere todos os dias.</p>

          <p className="text-3xl font-bold mb-2">R$ 49 <span className="text-lg font-normal">/ mês</span></p>

          <ul className="text-gray-300 mb-6 space-y-2">
            <li>✓ Acesso completo ao chat de alta performance.</li>
            <li>✓ Jornadas completas de disciplina, renda e lifestyle.</li>
            <li>✓ Rotinas personalizadas a partir da sua realidade.</li>
            <li>✓ Mais prompts e ideias de imagens de luxo via IA.</li>
            <li>✓ Exportar planos em PDF ou copiar para notas.</li>
          </ul>

          <a
            href="/plans"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f4c86c] to-[#d3a654] text-black font-semibold block text-center"
          >
            Assinar plano PRO
          </a>
        </div>

        {/* ELITE */}
        <div className="bg-[#101016] p-6 rounded-xl mb-10 border border-[#1f1f24] shadow-lg">
          <h3 className="text-xl font-semibold mb-2">ELITE · Jogo grande</h3>

          <p className="text-gray-300 mb-4">
            Para quem leva disciplina, dinheiro e lifestyle como projeto de vida.
          </p>

          <p className="text-3xl font-bold mb-2">R$ 99 <span className="text-lg font-normal">/ mês</span></p>

          <ul className="text-gray-300 mb-6 space-y-2">
            <li>✓ Tudo do PRO incluso.</li>
            <li>✓ Limite ainda maior de planos e jornadas ativas.</li>
            <li>✓ Mais ideias de prompts para imagens por semana.</li>
            <li>✓ Espaço para planejar projetos grandes.</li>
            <li>✓ Prioridade máxima em suporte e novidades.</li>
          </ul>

          <a
            href="/plans"
            className="px-6 py-3 rounded-full border border-[#f4c86c] text-[#f4c86c] font-semibold block text-center"
          >
            Assinar plano ELITE
          </a>
        </div>
      </section>
    </div>
  );
}
