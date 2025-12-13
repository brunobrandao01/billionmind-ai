// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "BillionMind AI",
  description: "Sua mente. Seu sistema. Sua ascensão.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen text-white relative overflow-x-hidden`}
        style={{
          background: "radial-gradient(circle at center, #0a0a0f 0%, #000000 70%)",
        }}
      >
        {/* Fundo com brilho */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20 glow-bg"
          />
        </div>

        {/* Header Premium */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-yellow-500/20 shadow-lg shadow-yellow-600/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              BillionMind AI
            </h1>
          </div>
        </header>

        {/* Espaço abaixo do header */}
        <div className="pt-20" />

        <main className="relative z-10 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-8 fade-in">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
