export const metadata = {
  title: "BillionMind AI",
  description: "Seu aplicativo de alta performance e inteligência artificial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          background: "#000",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
