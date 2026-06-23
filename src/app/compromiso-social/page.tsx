"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";
import { useIdioma } from "@/components/IdiomaContext";

const textos = {
  es: {
    tag: "Valores con Propósito",
    titulo: "Nuestro ",
    tituloItalic: "compromiso social",
    descripcion: '"En Promoción y Gestión Inmobiliaria creemos que cuidar el entorno es cuidar nuestro hogar. Junto a Juegaterapia, convertimos el aprendizaje en un juego para los más pequeños."',
    seccionPapel: "Reciclaje Papel",
    seccionPlastico: "Reciclaje Plástico",
    botonDescarga: "Descargar PDF",
    cita: '"Pequeños gestos que transforman entornos y regalan sonrisas."',
    papelFichas: [
      { 
        title: 'Papel: Versión Color', 
        file: '/papel_color.pdf', 
        thumb: '/pre_papel_color.jpg', 
        desc: 'Ficha educativa completa con los colores de Juegaterapia.' 
      },
      { 
        title: 'Papel: Para Colorear', 
        file: '/papel_bn.pdf', 
        thumb: '/pre_papel_bn.jpg', 
        desc: 'Versión en blanco y negro ideal para pintar en casa.' 
      },
      { 
        title: 'Guía: Qué sí y qué no', 
        file: '/papel_guia.pdf', 
        thumb: '/pre_papel_guia.jpg', 
        desc: 'Manual rápido para identificar residuos de papel y cartón.' 
      },
    ],
    plasticoFichas: [
      { 
        title: 'Plástico: Versión Color', 
        file: '/plastico_color.pdf', 
        thumb: '/pre_plastico_color.jpg', 
        desc: 'Ficha didáctica para aprender sobre el contenedor amarillo.' 
      },
      { 
        title: 'Plástico: Para Colorear', 
        file: '/plastico_bn.pdf', 
        thumb: '/pre_plastico_bn.jpg', 
        desc: 'Divertida ficha para colorear mientras aprenden a reciclar.' 
      },
      { 
        title: 'Guía: Qué sí y qué no', 
        file: '/plastico_guia.pdf', 
        thumb: '/pre_plastico_guia.jpg', 
        desc: 'Aprende qué envases van realmente al cubo de plástico.' 
      },
    ]
  },
  en: {
    tag: "Values with Purpose",
    titulo: "Our ",
    tituloItalic: "social commitment",
    descripcion: '"At Promoción y Gestión Inmobiliaria, we believe that caring for the environment is caring for our home. Together with Juegaterapia, we turn learning into a game for the little ones."',
    seccionPapel: "Paper Recycling",
    seccionPlastico: "Plastic Recycling",
    botonDescarga: "Download PDF",
    cita: '"Small gestures that transform environments and bring smiles."',
    papelFichas: [
      { 
        title: 'Paper: Color Version', 
        file: '/papel_color.pdf', 
        thumb: '/pre_papel_color.jpg', 
        desc: 'Complete educational sheet featuring Juegaterapia colors.' 
      },
      { 
        title: 'Paper: Coloring Sheet', 
        file: '/papel_bn.pdf', 
        thumb: '/pre_papel_bn.jpg', 
        desc: 'Black and white version ideal for painting at home.' 
      },
      { 
        title: 'Guide: Do\'s and Don\'ts', 
        file: '/papel_guia.pdf', 
        thumb: '/pre_papel_guia.jpg', 
        desc: 'Quick guide to properly identify paper and cardboard waste.' 
      },
    ],
    plasticoFichas: [
      { 
        title: 'Plastic: Color Version', 
        file: '/plastico_color.pdf', 
        thumb: '/pre_plastico_color.jpg', 
        desc: 'Didactic sheet to learn all about the yellow container.' 
      },
      { 
        title: 'Plastic: Coloring Sheet', 
        file: '/plastico_bn.pdf', 
        thumb: '/pre_plastico_bn.jpg', 
        desc: 'Fun sheet for coloring while learning how to recycle.' 
      },
      { 
        title: 'Guide: Do\'s and Don\'ts', 
        file: '/plastico_guia.pdf', 
        thumb: '/pre_plastico_guia.jpg', 
        desc: 'Learn which containers actually go into the plastic bin.' 
      },
    ]
  }
};

export default function CompromisoSocialPage() {
  const { idioma } = useIdioma();
  
  // Asignamos un fallback robusto en caso de que el contexto tarde en cargar
  const t = textos[idioma || "es"] || textos.es;

  return (
    <div className="bg-emerald-950 min-h-screen text-white relative selection:bg-gold selection:text-emerald-950">
      
      {/* 🌌 FONDO GLOBAL DE LA PÁGINA */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none">
        <img 
          src="/fondo-social.png" 
          alt="Fondo Estrellas Compromiso Social" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-emerald-950/80" />
      </div>

      {/* Contenido por encima del fondo */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="pt-40 pb-24 flex-grow">
          
          {/* 1. SECCIÓN HERO / MANIFIESTO */}
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <span className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 block drop-shadow-sm">
              {t.tag}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 drop-shadow-md">
              {t.titulo}<span className="italic font-semibold">{t.tituloItalic}</span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto drop-shadow-sm">
              {t.descripcion}
            </p>
          </div>

          {/* 2. BANNER DE COLABORACIÓN INSTITUCIONAL */}
          <section className="max-w-4xl mx-auto mb-24 px-4">
            <div className="w-full relative aspect-[16/7] bg-white rounded-3xl shadow-2xl border border-white/10 transition-all duration-500 hover:shadow-gold/10 overflow-hidden">
              <img 
                src="/logo-colaboracion.png" 
                alt="Alianza PYGI y Juegaterapia" 
                className="w-full h-full object-cover block mx-auto rounded-3xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('logo-colaboracion.png.png')) {
                    target.src = "/logo-colaboracion.png.png";
                  }
                }}
              />
            </div>
          </section>

          {/* 3. GRID DE MATERIALES DIDÁCTICOS */}
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
              
              {/* COLUMNA PAPEL */}
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-8">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shadow-sm">
                    <Leaf className="w-4 h-4 text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-medium tracking-wide uppercase text-white">
                    {t.seccionPapel}
                  </h2>
                </div>

                <div className="space-y-6">
                  {t.papelFichas.map((ficha, i) => (
                    <div key={`${idioma}-papel-${i}`} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      <div className="w-full sm:w-24 h-32 bg-cream rounded-xl flex-shrink-0 overflow-hidden shadow-inner border border-cream-dark relative">
                        <img src={ficha.thumb} alt={ficha.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-sans font-semibold text-forest text-lg mb-1">{ficha.title}</h3>
                          <p className="text-xs text-forest-light leading-relaxed mb-4">{ficha.desc}</p>
                        </div>
                        <a href={ficha.file} download className="block w-full sm:w-fit">
                          <Button variant="gold" size="sm" className="w-full sm:w-auto gap-2 text-xs cursor-pointer">
                            <Download className="w-3.5 h-3.5" />
                            {t.botonDescarga}
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMNA PLÁSTICO */}
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-8">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shadow-sm">
                    <Leaf className="w-4 h-4 text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-medium tracking-wide uppercase text-white">
                    {t.seccionPlastico}
                  </h2>
                </div>

                <div className="space-y-6">
                  {t.plasticoFichas.map((ficha, i) => (
                    <div key={`${idioma}-plastico-${i}`} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      <div className="w-full sm:w-24 h-32 bg-cream rounded-xl flex-shrink-0 overflow-hidden shadow-inner border border-cream-dark relative">
                        <img src={ficha.thumb} alt={ficha.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-sans font-semibold text-forest text-lg mb-1">{ficha.title}</h3>
                          <p className="text-xs text-forest-light leading-relaxed mb-4">{ficha.desc}</p>
                        </div>
                        <a href={ficha.file} download className="block w-full sm:w-fit">
                          <Button variant="gold" size="sm" className="w-full sm:w-auto gap-2 text-xs cursor-pointer">
                            <Download className="w-3.5 h-3.5" />
                            {t.botonDescarga}
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* 4. CIERRE AFECTIVO */}
          <div className="mt-24 text-center max-w-md mx-auto px-4">
            <Heart className="w-5 h-5 text-gold mx-auto mb-3 animate-pulse" />
            <p className="text-xs text-white/70 italic">
              {t.cita}
            </p>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}
