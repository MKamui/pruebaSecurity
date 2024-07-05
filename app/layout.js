import "./globals.css";

export const metadata = {
  title: "Prueba Mario Franco",
  description: "Prueba para desarrollador frontend en Security and System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-slate-200">{children}</body>
    </html>
  );
}
