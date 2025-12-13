
// src/app/chat/page.js
"use client";

import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Eu sou o BillionMind AI — sua inteligência de alta performance. Como posso ajudar você hoje com disciplina, rotina ou renda?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userPlan, setUserPlan] = useState<"free" | "pro" | "premium">("free");
  const [authChecked, setAuthChecked] = useState(false);

  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const checkAuthAndPlan = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", user.id)
        .single();

      if (!error && data) {
        setUserPlan(data.plan || "free");
      }

      setAuthChecked(true);
    };

    checkAuthAndPlan();
  }, [router]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "Desculpe, não consegui processar sua mensagem.",
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Erro de conexão. Tente novamente.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isPremium = userPlan === "pro" || userPlan === "premium";

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-yellow-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
        {/* Fundo com brilho animado */}
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

        {/* Partículas douradas */}
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

        {/* Área do chat */}
        <div className="flex-1 overflow-y-auto px-6 py-8 relative">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`max-w-2xl px-6 py-4 rounded-3xl backdrop-blur-xl border ${
                    msg.sender === "user"
                      ? "bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/50 text-white shadow-lg shadow-yellow-500/30"
                      : "bg-white/8 border-yellow-600/30 text-gray-100"
                  }`}
                >
                  <p className="text-lg leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className="px-6 py-4 rounded-3xl backdrop-blur-xl bg-white/8 border border-yellow-600/30">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-150" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Bloqueio para plano free */}
        {!isPremium && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-20">
            <div className="text-center max-w-md">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Chat requer assinatura
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Desbloqueie o chat completo com plano PRO ou PREMIUM.
              </p>
              <div className="space-y-5">
                <a
                  href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-10 py-5 bg-white/10 border-2 border-yellow-500/60 text-yellow-400 font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  Assinar PRO – R$ 29,98/mês
                </a>
                <a
                  href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-600/50"
                >
                  Assinar PREMIUM – R$ 39,90/mês
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Input fixo na parte inferior */}
        <div className="relative z-30 border-t border-yellow-600/20 backdrop-blur-2xl bg-black/60">
          <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={!isPremium || loading}
                placeholder={isPremium ? "Digite sua mensagem..." : "Requer plano PRO ou PREMIUM"}
                className="flex-1 px-6 py-5 bg-white/10 border border-yellow-600/40 rounded-3xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 text-lg disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!isPremium || loading || !input.trim()}
                className="p-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-500/60 flex items-center justify-center"
              >
                <Send className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0% { opacity: 0.15; transform: scale(1); }
          100% { opacity: 0.25; transform: scale(1.05); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(10deg); }
        }

        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        .animate-float { animation: float linear infinite; }
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </>
  );
              }
