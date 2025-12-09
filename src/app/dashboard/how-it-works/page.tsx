// src/app/dashboard/how-it-works/page.tsx
"use client";

import Link from "next/link";
import { Brain, Calendar, Image, Rocket } from "lucide-react";

export default function HowItWorksPage() {
  const sections = [
    {
      title: "Chat de alta performance",
      icon: Brain,
      description:
        "O usuário conversa com a IA como se estivesse falando com um mentor: fala da rotina, dos objetivos e recebe respostas práticas e aplicáveis no mesmo dia.",
      highlights: ["Respostas diretas", "Clareza imediata", "Ajustes diários automáticos"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Planos diários e tarefas",
      icon: Calendar,
      description:
        "O BillionMind AI cria planos estruturados de 7, 21 ou 30 dias com tarefas simples, metas e check-ins — tudo para evitar excesso de informação.",
      highlights: ["Tarefas focadas", "Metas realistas", "Evolução clara"],
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Imagens de lifestyle via IA",
      icon: Image,
      description:
        "A IA sugere prompts de imagens de carros, viagens, cidades bonitas, escritórios de luxo e mais — tudo para ajudar o usuário a visualizar a vida que quer viver.",
      highlights: ["Sugestões de prompts", "Estilo premium", "Visualização do futuro"],
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      title: "Jornadas guiadas",
      icon: Rocket,
      description:
        "A IA organiza tudo em caminhos claros: disciplina, renda e lifestyle. O usuário escolhe a jornada e a IA mostra diariamente o que fazer.",
      highlights: ["Caminhos claros", "Evolução guiada", "Resultados práticos"],
      gradient: "from-emerald-500 to-teal-600",
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
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-50 animate-float"
              style={{
                left: `${8 + i * 8}%`,
                top: `${15 + i * 6}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${18 + i * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Título principal */}
          <div className="text-center mb-20 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Como o BillionMind AI funciona
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Inteligência artificial de alta performance trabalhando 24h para sua disciplina, renda e lifestyle.
            </p>
          </div>

          {/* Seções em cards premium */}
          <div className="space-y-20">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="backdrop-blur-2xl bg-white/6 border border-yellow-600/30 rounded-3xl p-12 hover:border-yellow-500/70 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/20 group">
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                      {/* Ícone grande */}
                      <div className="flex justify-center">
                        <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="md:col-span-2 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {section.title}
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                          {section.description}
                        </p>

                        {/* Destaques */}
                        <ul className="space-y-5">
                          {section.highlights.map((item, i) => (
                            <li key={i} className="flex items-center text-lg text-gray-200">
                              <span className="text-yellow-400 mr-4 text-2xl">Checkmark</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action final */}
          <div className="text-center mt-24 animate-fadeIn" style={{ animationDelay: "1.5s" }}>
            <Link
              href="/dashboard/chat"
              className="inline-block px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 text-black font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60"
            >
              Começar agora com a IA
            </Link>
          </div>

          {/* Rodapé discreto */}
          <div className="text-center mt-20 text-gray-500 text-sm">
            BillionMind AI • 2026+ • Inteligência que transforma vidas
          </div>
        </div>
      </div>

      {/* Animações globais */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(50px);
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
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
