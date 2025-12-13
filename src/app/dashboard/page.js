// src/app/dashboard/page.js
"use client";

import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState<string>("free");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);

      // Busca o plano na tabela profiles
      const { data, error } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", user.id)
        .single();

      if (!error && data) {
        setPlan(data.plan || "free");
      }

      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-yellow-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  const isPremium = plan === "premium" || plan === "pro";

  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Fundo com brilho animado sutil */}
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Cabeçalho de boas-vindas */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Bem-vindo de volta
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Seu plano atual: <span className="text-yellow-400 font-bold capitalize">{plan}</span>
            </p>
          </div>

          {/* Área principal */}
          <div className="backdrop-blur-2xl bg-white/5 border border-yellow-600/30 rounded-3xl p-12 text-center shadow-2xl shadow-yellow-600/20 animate-fadeIn animation-delay-300">
            <h2 className="text-4xl font-bold text-white mb-6">
              Chat de Alta Performance
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Fale com a IA que organiza sua rotina, disciplina, finanças e lifestyle.
            </p>

            <Link
              href="/dashboard/chat"
              className="inline-block px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 text-black font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60"
            >
              Abrir Chat IA
            </Link>
          </div>

          {/* Área Premium Bloqueada (se free) */}
          {!isPremium && (
            <div className="relative mt-16 animate-fadeIn animation-delay-600">
              <div className="backdrop-blur-md bg-white/5 border border-yellow-600/30 rounded-3xl p-12 text-center filter blur-sm">
                <h3 className="text-3xl font-bold text-white mb-6">Área Premium</h3>
                <p className="text-xl text-gray-400">
                  Desbloqueie jornadas completas, rotinas avançadas e suporte prioritário.
                </p>
              </div>

              {/* Overlay de upgrade */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl text-yellow-400 font-bold mb-8">
                  Atualize seu plano para acessar
                </p>
                <div className="space-y-5">
                  <a
                    href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-10 py-5 bg-white/10 border-2 border-yellow-500/60 text-yellow-400 font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Upgrade para PRO – R$ 29,98/mês
                  </a>

                  <a
                    href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-600/50"
                  >
                    Upgrade para PREMIUM – R$ 39,90/mês
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Botão de logout */}
          <div className="text-center mt-20">
            <button
              onClick={handleSignOut}
              className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
            >
              Sair da conta
            </button>
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(10deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
