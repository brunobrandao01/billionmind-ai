// src/app/plans/page.tsx
"use client";

import Link from "next/link";

export default function PlansPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black px-6 py-12">
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
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-50 animate-float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${18 + i * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-fadeIn">
            Escolha seu plano BillionMind AI
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn animation-delay-300">
            Desbloqueie o poder da inteligência artificial para construir disciplina, rotina e renda no piloto automático.
          </p>
        </div>

        {/* Cartões de Planos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full relative z-10">

          {/* PLANO FREE */}
          <div className="group animate-fadeIn animation-delay-500">
            <div className="backdrop-blur-2xl bg-white/5 border border-yellow-600/30 rounded-3xl p-8 hover:border-yellow-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">FREE</h3>
                <p className="text-yellow-400 text-lg font-medium">Começar agora</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold text-white">R$ 0</span>
                  <span className="text-gray-400 text-lg"> / mês</span>
                </div>
              </div>

              <ul className="mt-10 space-y-5 text-left">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Acesso ao chat básico
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  1 jornada liberada (30 dias disciplina)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Prompts limitados
                </li>
              </ul>

              <div className="mt-12">
                <Link
                  href="/signup"
                  className="block w-full py-5 text-center bg-transparent border-2 border-yellow-500 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Criar conta grátis
                </Link>
              </div>
            </div>
          </div>

          {/* PLANO PRO */}
          <div className="group animate-fadeIn animation-delay-700 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
            <div className="relative backdrop-blur-2xl bg-white/8 border-2 border-yellow-500 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:-translate-y-6">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500 rounded-full text-yellow-400 text-sm font-bold mb-4">
                  MAIS POPULAR
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">PRO</h3>
                <p className="text-yellow-400 text-lg font-medium">Rotina e Renda</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold text-white">R$ 29,98</span>
                  <span className="text-gray-400 text-lg"> / mês</span>
                </div>
              </div>

              <ul className="mt-10 space-y-5 text-left">
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Acesso completo ao chat de alta performance
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Jornadas completas
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Rotinas personalizadas
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Prompts de imagens premium
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Exportar rotinas em PDF
                </li>
              </ul>

              <div className="mt-12">
                <a
                  href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  Assinar PRO
                </a>
              </div>
            </div>
          </div>

          {/* PLANO PREMIUM */}
          <div className="group animate-fadeIn animation-delay-900">
            <div className="backdrop-blur-2xl bg-white/6 border border-yellow-600/40 rounded-3xl p-8 hover:border-yellow-500/80 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-600/20 transform hover:-translate-y-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">PREMIUM</h3>
                <p className="text-yellow-400 text-lg font-medium">Jogo Grande</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold text-white">R$ 39,90</span>
                  <span className="text-gray-400 text-lg"> / mês</span>
                </div>
              </div>

              <ul className="mt-10 space-y-5 text-left">
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  <strong>Tudo do PRO incluso</strong>
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Mais jornadas e metas avançadas
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Ideias de prompts exclusivas semanais
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">Checkmark</span>
                  Suporte prioritário
                </li>
              </ul>

              <div className="mt-12">
                <a
                  href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 text-center bg-gradient-to-r from-yellow-600 to-amber-600 text-black font-bold text-lg rounded-xl hover:from-yellow-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  Assinar PREMIUM
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé discreto */}
        <footer className="mt-20 text-center text-gray-500 text-sm">
          BillionMind AI • 2026+ • Construindo o futuro da disciplina e renda
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: translateY(-30px) rotate(8deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.9s ease-out forwards;
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
