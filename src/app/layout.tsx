import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Header from "@/components/Header";

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
        {/* 🌟 CSS oculto para limpiar el diseño del widget de Google Translate */}
        <style>{`
          /* Oculta la barra superior azul/gris de Google */
          .goog-te-banner-frame.skiptranslate, .goog-te-banner-frame { 
            display: none !important; 
          }
          body { 
            top: 0px !important; 
          }
          /* Oculta el logo "Con la tecnología de Google" */
          .goog-logo-link, .goog-te-gadget span { 
            display: none !important; 
          }
          .goog-te-gadget { 
            color: transparent !important; 
            font-size: 0 !important;
          }
          /* Estilo básico para integrarlo en el Header */
          #google_translate_element select {
            background-color: transparent;
            color: inherit;
            border: 1px solid rgba(0,0,0,0.15);
            padding: 4px 8px;
            border-radius: 9999px;
            font-size: 13px;
            cursor: pointer;
            outline: none;
          }
          /* Si el header está en fondo transparente (texto blanco) cambiamos el borde del select */
          header:not(.bg-white\/95) #google_translate_element select {
            border-color: rgba(255,255,255,0.3);
            color: #ffffff;
            background-color: rgba(0,0,0,0.2);
          }
          header:not(.bg-white\/95) #google_translate_element select option {
            color: #000000;
          }
        `}</style>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          
          <Header /> 
          
          {children}

        </ClientBody>

        {/* 🌟 SCRIPTS OFICIALES DE GOOGLE TRANSLATE */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'es',
                includedLanguages: 'en,es',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
      </body>
    </html>
  );
}
