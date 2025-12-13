// src/app/signup/page.js
"use client";

import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    setLoading(true);
    setError(null);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      // Insere perfil básico com plano free
      const { error: profileError } = await supabase
        .from("profiles")
        .upsert({
          id: data.user.id,
          email: email.toLowerCase(),
          plan: "free",
          created_at: new Date().toISOString(),
        });

      if (profileError) {
        setError("Erro ao criar perfil. Tente novamente.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } else {
      setError("Erro inesperado. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-6">
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
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-50 animate-float"
              style={{
                left: `${10 + i * 9}%`,
                top: `${20 + i * 8}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${20 + i * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Cartão de signup premium */}
        <div className="relative z-10 w-full max-w-md">
          <div className="backdrop-blur-2xl bg-white/5 border border-yellow-600/30 rounded-3xl shadow-2xl shadow-yellow-600/20 p-10 animate-fadeIn">
            <div className="text-center mb-10">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                BillionMind AI
              </h1>
              <p className="mt-6 text-xl text-gray-300">Crie sua conta e comece agora</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 border border-yellow-600/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 border border-yellow-600/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300"
                  placeholder="Mínimo 6 caracteres"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 border border-yellow-600/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300"
                  placeholder="Repita a senha"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-900/30 border border-red-600/50 rounded-2xl text-red-300 text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 disabled:opacity-70 text-black font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/60 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Criando conta...
                  </>
                ) : (
                  "Criar conta"
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link
                href="/login"
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Já tem conta? Entrar
              </Link>
            </div>

            {/* Botões de assinatura */}
            <div className="mt-12 space-y-5">
              <a
                href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 text-center bg-white/10 border-2 border-yellow-500/60 text-yellow-400 font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Plano PRO – R$ 29,98/mês
              </a>

              <a
                href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 text-center bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-600/50"
              >
                Plano PREMIUM – R$ 39,90/mês
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

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
                  }
