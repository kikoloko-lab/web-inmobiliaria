import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Header from "@/components/Header"; // 🌟 1. IMPORTANTE: Importamos el Header aquí.
// Nota: Si tu componente Header no está en esa ruta exacta, cambia el "@components/Header" por la tuya (por ejemplo: "../components/Header")

export const metadata: Metadata = {
  title: "Promocion y Gestion Inmobiliaria | Hoyo de Manzanares",
  description: "Especialistas en Hoyo de Manzanares y la Sierra de Guadarrama. Compra, venta y gestion de propiedades exclusivas con el trato humano que mereces. Carmen y Elena te acompañan a casa.",
  keywords: "inmobiliaria hoyo de manzanares, casas sierra de guadarrama, vender casa hoyo, comprar casa hoyo de manzanares, la pedriza, propiedades exclusivas madrid",
  authors: [{ name: "Promocion y Gestion Inmobiliaria" }],
  openGraph: {
    title: "Promocion y Gestion Inmobiliaria | Hoyo de Manzanares",
    description: "Tu hogar en la Sierra, gestionado con alma. Especialistas en Hoyo de Manzanares.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          
          {/* 🌟 2. Añadimos el Header aquí dentro */}
          <Header /> 
          
          {/* Aquí Next.js cargará la página en la que estés (la Home, Quiénes Somos, etc.) */}
          {children}

        </ClientBody>
      </body>
    </html>
  );
}
