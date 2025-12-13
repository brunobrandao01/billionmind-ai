// src/app/plans/page.js
"use client";

import Link from "next/link";

export default function PlansPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden px-6 py-16">
        {/* Fundo com brilho radial dourado animado */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, #f4c86c 0%, transparent 50%), radial-gradient(circle at 70% 80%, #f4c86c 0%, transparent 50%)",
              animation: "glowPulse 12s ease-in-out infinite alternate",
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
                left: `${8 + i * 8}%`,
                top: `${15 + i * 7}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${20 + i * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Botão Voltar */}
        <div className="relative z-10 max-w-7xl mx-auto mb-12">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Dashboard
          </Link>
        </div>

        {/* Título principal */}
        <div className="relative z-10 text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Escolha seu Plano
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300">
            Desbloqueie todo o poder do BillionMind AI
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* PLANO PRO */}
          <div className="group animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="h-full backdrop-blur-2xl bg-white/5 border border-yellow-600/40 rounded-3xl p-10 hover:border-yellow-500/80 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/30 transform hover:scale-105">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white">PRO</h3>
                <div className="mt-8">
                  <span className="text-6xl font-black text-yellow-400">R$ 29,98</span>
                  <span className="text-xl text-gray-400"> / mês</span>
                </div>
              </div>

              <ul className="space-y-6 text-left mb-12">
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-4 text-2xl">✓</span>
                  Respostas rápidas
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-4 text-2xl">✓</span>
                  Acesso ao chat ilimitado
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-4 text-2xl">✓</span>
                  IA com mais precisão
                </li>
              </ul>

              <a
                href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-6 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 text-black font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60"
              >
                Assinar PRO
              </a>
            </div>
          </div>

          {/* PLANO PREMIUM (com realce extra) */}
          <div className="group animate-fadeIn relative" style={{ animationDelay: "0.5s" }}>
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000" />
            <div className="relative h-full backdrop-blur-2xl bg-white/8 border-2 border-yellow-500 rounded-3xl p-10 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-yellow-500/50">
              <div className="text-center mb-10">
                <div className="inline-block px-6 py-2 bg-yellow-500/20 border border-yellow-500 rounded-full text-yellow-400 font-bold text-sm mb-6">
                  MAIS COMPLETO
                </div>
                <h3 className="text-4xl font-bold text-white">PREMIUM</h3>
                <div className="mt-8">
                  <span className="text-6xl font-black text-yellow-400">R$ 39,90</span>
                  <span className="text-xl text-gray-400"> / mês</span>
                </div>
              </div>

              <ul className="space-y-6 text-left mb-12">
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-2xl">✓</span>
                  <strong>Tudo do PRO</strong>
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-2xl">✓</span>
                  Prioridade máxima
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-2xl">✓</span>
                  Velocidade avançada
                </li>
                <li className="flex items-center text-gray-100">
                  <span className="text-green-400 mr-4 text-2xl">✓</span>
                  Acesso às futuras ferramentas
                </li>
              </ul>

              <a
                href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-6 text-center bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-600/60"
              >
                Assinar PREMIUM
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0% {
            opacity: 0.15;
            transform: scale(1);
          }
          100% {
            opacity: 0.25;
            transform: scale(1.05);
          }
        }

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
