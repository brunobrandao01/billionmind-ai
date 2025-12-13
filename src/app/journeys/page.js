// src/app/journeys/page.js
"use client";

import Link from "next/link";

export default function JourneysPage() {
  const journeys = [
    {
      title: "Foco & Disciplina",
      text: "Estruturas para manter a consistência e eliminar distrações.",
      icon: "Target",
    },
    {
      title: "Riqueza & Mentalidade",
      text: "Rotinas e insights para desenvolver a mentalidade milionária.",
      icon: "DollarSign",
    },
    {
      title: "Produtividade Absoluta",
      text: "IA cria sua rotina personalizada em segundos.",
      icon: "Zap",
    },
    {
      title: "Equilíbrio Emocional",
      text: "Ferramentas para clareza mental e controle emocional.",
      icon: "Heart",
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

        {/* Título principal */}
        <div className="relative z-10 text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Jornadas da Mente
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300">
            Evolução guiada. Um passo por vez.
          </p>
        </div>

        {/* Grid de Jornadas */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {journeys.map((journey, index) => (
            <div
              key={index}
              className="group animate-fadeIn"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="h-full backdrop-blur-2xl bg-white/5 border border-yellow-600/30 rounded-3xl p-12 hover:border-yellow-500/70 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:scale-105">
                {/* Ícone dourado */}
                <div className="w-24 h-24 mx-auto mb-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl">{journey.icon}</span>
                </div>

                {/* Conteúdo */}
                <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
                  {journey.title}
                </h3>
                <p className="text-xl text-gray-300 text-center leading-relaxed">
                  {journey.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Voltar ao Dashboard */}
        <div className="relative z-10 text-center mt-20">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-4 px-10 py-5 bg-white/10 border-2 border-yellow-500/60 text-yellow-400 font-bold text-xl rounded-2xl hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Dashboard
          </Link>
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
