// src/app/dashboard/chat/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Eu sou o BillionMind AI — sua inteligência de alta performance. Estou aqui para organizar sua rotina, disciplina, finanças e lifestyle. Como posso te ajudar hoje?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulação de resposta da IA
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Entendido. Estou estruturando sua próxima ação com precisão. Vamos construir disciplina absoluta e renda exponencial — juntos.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
        {/* Fundo futurista */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-black" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4C86C' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Partículas douradas */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-40 animate-float"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + i * 6}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${22 + i * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Header Premium */}
        <header className="relative z-20 backdrop-blur-2xl bg-white/5 border-b border-yellow-600/20">
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link
                href="/dashboard"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                <ArrowLeft className="w-6 h-6 text-yellow-400" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  BillionMind AI · Chat de Alta Performance
                </h1>
                <p className="text-sm text-gray-400">Online • Respostas em tempo real</p>
              </div>
            </div>
          </div>
        </header>

        {/* Área de Mensagens */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`max-w-lg px-6 py-4 rounded-2xl backdrop-blur-xl border ${
                    msg.sender === "user"
                      ? "bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/40 text-white"
                      : "bg-white/8 border-yellow-600/30 text-gray-100"
                  } shadow-xl shadow-yellow-500/10`}
                >
                  <p className="text-lg leading-relaxed">{msg.text}</p>
                  <span className="text-xs text-gray-400 mt-2 block">
                    {msg.timestamp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))

            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className="px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/8 border border-yellow-600/30 shadow-xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Box Premium */}
        <div className="relative z-20 border-t border-yellow-600/20 backdrop-blur-2xl bg-black/50">
          <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem para a IA…"
                className="flex-1 px-6 py-5 bg-white/10 border border-yellow-600/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 text-lg"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl hover:from-yellow-400 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-500/60 flex items-center justify-center"
              >
                <Send className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animações */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
