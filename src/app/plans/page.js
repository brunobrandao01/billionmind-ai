// src/app/plans/page.tsx
"use client";

import Link from "next/link";

export default function PlansPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">
        {/* Fundo futurista com textura suave */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4C86C' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Partículas douradas flutuantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-50 animate-float"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + i * 8}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${20 + i * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Título principal */}
        <div className="relative z-10 text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Planos para qualquer realidade
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Escolha o nível de evolução que combina com você hoje.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl w-full relative z-10">

          {/* PLANO FREE */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="backdrop-blur-2xl bg-white/6 border border-yellow-600/30 rounded-3xl p-10 hover:border-yellow-500/70 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-6">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white">FREE</h3>
                <p className="text-yellow-400 text-xl font-medium mt-2">Começar hoje</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold text-white">R$ 0</span>
                  <span className="text-gray-400 text-lg"> / mês</span>
                </div>
              </div>

              <ul className="space-y-5 text-left mb-12">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Acesso ao chat com respostas básicas
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  1 jornada liberada (30 dias de disciplina)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Ideias limitadas de prompts para imagens
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Resumo semanal simples
                </li>
              </ul>

              <Link
                href="/login"
                className="block w-full py-5 text-center bg-transparent border-2 border-yellow-500 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Começar de graça
              </Link>
            </div>
          </div>

          {/* PLANO PRO — RECOMENDADO */}
          <div className="animate-fadeIn relative" style={{ animationDelay: "0.5s" }}>
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-sm rounded-full shadow-lg">
                RECOMENDADO
              </div>
            </div>
            <div className="relative backdrop-blur-2xl bg-white/10 border-2 border-yellow-500 rounded-3xl p-10 shadow-2xl transform transition-all duration-700 hover:-translate-y-8 hover:shadow-yellow-500/30">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white">PRO</h3>
                <p className="text-yellow-400 text-xl font-medium mt-2">Rotina e Renda</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold text-white">R$ 29,98</span>
                  <span className="text-gray-400 text-lg"> / mês</span>
                </div>
              </div>

              <ul className="space-y-5 text-left mb-12">
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Acesso completo ao chat
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Jornadas completas (disciplina, renda e lifestyle)
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Rotinas personalizadas pela IA
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Mais prompts de imagens
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Exportar planos como PDF ou copiar
                </li>
              </ul>

              <a
                href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 text-black font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60"
              >
                Assinar plano PRO
              </a>
            </div>
          </div>

          {/* PLANO PREMIUM */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.7s" }}>
            <div className="backdrop-blur-2xl bg-white/7 border border-yellow-600/40 rounded-3xl p-10 hover:border-yellow-500/80 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-600/20 transform hover:-translate-y-6">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white">PREMIUM</h3>
                <p className="text-yellow-400 text-xl font-medium mt-2">Jogo grande</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold text-white">R$ 39,90</span>
                  <span className="text-gray-400 text-lg"> / mês</span>
                </div>
              </div>

              <ul className="space-y-5 text-left mb-12">
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  <strong>Tudo do PRO incluso</strong>
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Limite maior de planos e jornadas
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Ideias extras de prompts por semana
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Espaço para projetos grandes
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-xl">Checkmark</span>
                  Suporte prioritário
                </li>
              </ul>

              <a
                href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 text-center bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-600/50"
              >
                Assinar PREMIUM
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé discreto */}
        <footer className="mt-20 text-center text-gray-500 text-sm">
          BillionMind AI • 2026+ • Inteligência que transforma vidas
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
            transform: translateY(-35px) rotate(10deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
