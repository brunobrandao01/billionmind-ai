export const metadata = {
  title: "BillionMind AI",
  description: "Alta performance, disciplina e liberdade em um único chat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
