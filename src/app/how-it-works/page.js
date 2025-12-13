// src/app/how-it-works/page.js
"use client";

import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      title: "Crie sua conta",
      text: "Basta usar seu e-mail para entrar no sistema.",
      icon: "UserPlus",
    },
    {
      number: "2",
      title: "Escolha um plano",
      text: "Selecione PRO ou PREMIUM para acesso total.",
      hasButtons: true,
    },
    {
      number: "3",
      title: "Acesse o Dashboard",
      text: "Você desbloqueia ferramentas e IA avançada.",
      icon: "LayoutDashboard",
    },
    {
      number: "4",
      title: "Comece a criar",
      text: "Use o poder da IA para criar, planejar e evoluir.",
      icon: "Sparkles",
    },
  ];

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
            className="inline-flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
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
            Como o BillionMind AI Funciona
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300">
            Simples. Poderoso. Imediato.
          </p>
        </div>

        {/* Seções de passos */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group animate-fadeIn"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="backdrop-blur-2xl bg-white/5 border border-yellow-600/30 rounded-3xl p-12 hover:border-yellow-500/70 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:scale-103">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  {/* Número + Ícone */}
                  <div className="flex-shrink-0 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl mb-6 md:mb-0 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl font-black text-black">{step.number}</span>
                    </div>
                    {step.icon && (
                      <div className="text-6xl text-yellow-400">{step.icon}</div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {step.title}
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {step.text}
                    </p>

                    {/* Botões exclusivos do passo 2 */}
                    {step.hasButtons && (
                      <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                        <a
                          href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-10 py-5 bg-white/10 border-2 border-yellow-500/60 text-yellow-400 font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
                        >
                          Assinar PRO – R$ 29,98/mês
                        </a>
                        <a
                          href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-600/50"
                        >
                          Assinar PREMIUM – R$ 39,90/mês
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
