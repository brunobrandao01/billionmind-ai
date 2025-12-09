// src/app/dashboard/journeys/page.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JourneysPage() {
  const journeys = [
    {
      id: 1,
      title: "30 dias de disciplina absoluta",
      subtitle: "Foco em construir consistência. Ideal para quem sente que sempre começa e para.",
      color: "from-blue-500 to-cyan-600",
      icon: "Target",
      benefits: [
        "Despertar com propósito e horários definidos",
        "Blocos de foco para trabalho, estudo ou projeto",
        "Rituais noturnos para encerrar o dia com consciência",
      ],
    },
    {
      id: 2,
      title: "Renda extra e mentalidade de dono",
      subtitle: "Para quem quer sair do 'só sobreviver' e começar a construir renda com o que já sabe.",
      color: "from-purple-500 to-pink-600",
      icon: "DollarSign",
      benefits: [
        "Mapeamento de habilidades",
        "Uma ação simples de dinheiro por dia",
        "Revisão semanal de ganhos e ajustes",
      ],
    },
    {
      id: 3,
      title: "Lifestyle de luxo consciente",
      subtitle: "Ideal para quem gosta de carros, viagens, roupas e cidades bonitas — mas quer viver isso com responsabilidade.",
      color: "from-yellow-500 to-amber-600",
      icon: "Sparkles",
      benefits: [
        "Planejamento de metas de lifestyle",
        "Conexão entre imagem e disciplina",
        "Prompts de imagens para visualizar sua vida futura",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Fundo futurista com textura suave */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-black" />
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
                left: `${10 + i * 9}%`,
                top: `${15 + i * 7}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${20 + i * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Título principal */}
          <div className="text-center mb-20 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Jornadas guiadas por IA
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Escolha um caminho e deixe o BillionMind AI estruturar sua evolução com clareza.
            </p>
          </div>

          {/* Cards das Jornadas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {journeys.map((journey, index) => (
              <div
                key={journey.id}
                className="group animate-fadeIn"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="h-full backdrop-blur-2xl bg-white/6 border border-yellow-600/30 rounded-3xl p-10 hover:border-yellow-500/70 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-6">
                  {/* Emblema superior */}
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${journey.color} flex items-center justify-center shadow-xl`}>
                    <span className="text-4xl">{journey.icon}</span>
                  </div>

                  {/* Título da jornada */}
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                    {journey.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-300 text-center text-lg leading-relaxed mb-10">
                    {journey.subtitle}
                  </p>

                  {/* Benefícios */}
                  <ul className="space-y-5 mb-12">
                    {journey.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-gray-200">
                        <span className="text-yellow-400 mr-4 mt-1 text-xl">Checkmark</span>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botão dourado */}
                  <Link
                    href="/dashboard/chat"
                    className="block w-full py-5 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 text-black font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60 flex items-center justify-center gap-3 group"
                  >
                    Iniciar Jornada 0{journey.id}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé discreto */}
          <div className="text-center mt-20 text-gray-500 text-sm">
            BillionMind AI • 2026+ • Sua evolução começa com um clique
          </div>
        </div>
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
