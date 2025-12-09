// src/app/dashboard/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const userName = "Alexandre"; // Simulação — futuramente virá do Supabase

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
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
                left: `${5 + i * 10}%`,
                top: `${10 + i * 7}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${20 + i * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Navigation Bar Premium */}
        <nav className="relative z-20 backdrop-blur-2xl bg-white/5 border-b border-yellow-600/20">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-10">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                BillionMind AI
              </h1>
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: "Dashboard", active: true },
                  { name: "Chat IA", href: "/dashboard/chat" },
                  { name: "Jornadas", href: "/dashboard/journeys" },
                  { name: "Planos", href: "/plans" },
                  { name: "Perfil", href: "/dashboard/profile" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href || "#"}
                    className={`text-lg font-medium transition-all duration-300 ${
                      item.active
                        ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-400">Olá, {userName}</div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-16">

          {/* Painel de Boas-vindas */}
          <div className="backdrop-blur-2xl bg-white/8 border border-yellow-600/30 rounded-3xl p-10 text-center animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Bem-vindo à sua evolução, {userName}!
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              Sua mente, disciplina e lifestyle começam aqui.
            </p>
            <Link
              href="/dashboard/chat"
              className="inline-block mt-10 px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-xl hover:from-yellow-400 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/50"
            >
              Abrir Chat IA
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Dias de Disciplina", value: "12", color: "from-green-500 to-emerald-600" },
              { label: "Jornadas Ativas", value: "3", color: "from-blue-500 to-cyan-600" },
              { label: "Planos Criados", value: "7", color: "from-purple-500 to-pink-600" },
            ].map((stat, i) => (
              <div
                key={i}
                className="backdrop-blur-2xl bg-white/6 border border-yellow-600/20 rounded-2xl p-8 text-center hover:border-yellow-500/60 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 animate-fadeIn"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className="mt-3 text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Suas Jornadas */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-yellow-400">Suas jornadas</h3>
              <Link
                href="/dashboard/journeys"
                className="text-yellow-400 hover:text-yellow-300 font-medium transition"
              >
                Ver todas →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "30 dias de disciplina absoluta", progress: 68 },
                { title: "Rotina e renda", progress: 42 },
                { title: "Lifestyle de luxo", progress: 15 },
              ].map((journey, i) => (
                <div
                  key={i}
                  className="backdrop-blur-2xl bg-white/5 border border-yellow-600/20 rounded-2xl p-6 hover:border-yellow-500/70 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10"
                >
                  <h4 className="text-xl font-semibold text-white mb-3">{journey.title}</h4>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${journey.progress}%` }}
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-400">{journey.progress}% concluído</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preview Chat IA */}
          <div className="backdrop-blur-2xl bg-white/6 border border-yellow-600/30 rounded-3xl p-10 text-center">
            <h3 className="text-4xl font-bold text-yellow-400 mb-6">Chat de Alta Performance</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Fale com a IA que organiza sua rotina, disciplina, finanças e lifestyle. Tudo em um só lugar.
            </p>
            <Link
              href="/dashboard/chat"
              className="inline-block px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-xl hover:from-yellow-400 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60"
            >
              Abrir Chat
            </Link>
          </div>
        </div>
      </div>

      {/* Animações */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(6deg); }
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
