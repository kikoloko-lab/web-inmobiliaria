import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Header from "@/components/Header";
import { IdiomaProvider } from "@/components/IdiomaContext"; // 🌟 1. Importamos el nuevo proveedor de idioma

export const metadata: Metadata = {
  title: "Promocion y Gestion Inmobiliaria | Madrid",
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
        {/* 🌟 LIMPIEZA: Se eliminó todo el bloque de estilos de Google Translate que causaba conflictos */}
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          
          {/* 🌟 2. Envolvemos el Header y las páginas (children) para que compartan el mismo idioma */}
          <IdiomaProvider>
            <Header /> 
            {children}
          </IdiomaProvider>

        </ClientBody>
      </body>
    </html>
  );
}
