export const metadata = {
  title: "BillionMind AI",
  description: "Disciplina, foco, renda e lifestyle em um único chat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
