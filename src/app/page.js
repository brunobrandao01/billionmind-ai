// src/app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">
        {/* Fundo futurista com textura suave e movimento */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4C86C' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: "slowMove 40s linear infinite",
            }}
          />
        </div>

        {/* Partículas douradas flutuantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-50 animate-float"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + i * 7}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${22 + i * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Título principal */}
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-fadeIn">
            BillionMind AI
          </h1>

          <p className="mt-8 text-3xl md:text-5xl font-bold text-gray-100 animate-fadeIn animation-delay-300">
            Sua mente. Seu sistema. Sua ascensão.
          </p>

          <p className="mt-10 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fadeIn animation-delay-600">
            O aplicativo que transforma disciplina, criatividade e inteligência artificial em resultados reais. 
            Uma experiência completa para quem quer evoluir, ganhar dinheiro e viver no controle da própria vida.
          </p>

          {/* Botões principais */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn animation-delay-900">
            <Link
              href="/login"
              className="w-full sm:w-auto px-10 py-6 backdrop-blur-xl bg-white/10 border-2 border-yellow-500/60 text-yellow-400 font-bold text-xl rounded-2xl hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/30"
            >
              Entrar
            </Link>

            <Link
              href="/signup"
              className="w-full sm:w-auto px-10 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 text-black font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60"
            >
              Criar Conta
            </Link>

            <Link
              href="/plans"
              className="w-full sm:w-auto px-10 py-6 bg-transparent border-2 border-yellow-500/50 text-yellow-400 font-bold text-xl rounded-2xl hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Ver Planos
            </Link>
          </div>
        </div>

        {/* Seção de Benefícios */}
        <div className="relative z-10 mt-32 w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Chat Inteligente",
                desc: "Gere respostas naturais e detalhadas, personalize estratégias e desbloqueie novas ideias em segundos.",
                delay: "1.2s",
              },
              {
                title: "Jornadas diárias",
                desc: "Rotinas para disciplina, renda e evolução, com acompanhamento e progresso claro.",
                delay: "1.4s",
              },
              {
                title: "Ambiente premium",
                desc: "Visual poderoso, com design que inspira foco, clareza e mentalidade forte.",
                delay: "1.6s",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-2xl bg-white/6 border border-yellow-600/30 rounded-3xl p-10 hover:border-yellow-500/70 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/20 group animate-fadeIn"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-3xl">
                    {i === 0 ? "Brain" : i === 1 ? "Target" : "Sparkles"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé discreto */}
        <footer className="absolute bottom-8 text-center text-gray-500 text-sm">
          BillionMind AI • 2026+ • A nova era da mente lucrativa
        </footer>
      </div>

      {/* Animações globais */}
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) rotate(12deg);
          }
        }
        @keyframes slowMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100px 100px;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
