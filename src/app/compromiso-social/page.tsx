"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";

export default function CompromisoSocialPage() {
  // 📚 Aquí están declaradas todas tus fichas educativas (Papel)
  const papelFichas = [
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
  ];

  // 📚 Aquí están declaradas todas tus fichas educativas (Plástico)
  const plasticoFichas = [
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
  ];

  return (
    <div className="bg-cream min-h-screen text-forest selection:bg-forest selection:text-white">
      <Header />
      
      <main className="pt-32 pb-24">
        
        {/* 1. SECCIÓN HERO / MANIFIESTO CORPORATIVO (Limpio y elegante en fondo crema) */}
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Valores con Propósito
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-forest mb-8">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-forest-light leading-relaxed font-light italic max-w-3xl mx-auto">
            "En Promoción y Gestión Inmobiliaria creemos que cuidar el entorno es cuidar nuestro hogar. 
            Junto a Juegaterapia, convertimos el aprendizaje en un juego para los más pequeños."
          </p>
        </div>

        {/* 2. BANNER DE COLABORACIÓN INSTITUCIONAL (Con fondo en las zonas laterales coloreadas en azul) */}
        <section className="relative w-full bg-emerald-950 py-14 mb-24 overflow-hidden shadow-inner">
          
          {/* Imagen de fondo aplicada exclusivamente a los laterales de esta sección */}
          <img 
            src="/fondo-social.png" 
            alt="Fondo Decorativo Compromiso" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none"
          />
          
          {/* Capa de brillo sutil para amalgamar el patrón */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

          {/* Tarjeta contenedora del logo (Se mantiene centrada y limpia sobre el fondo) */}
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="w-full relative aspect-[16/7] bg-white rounded-3xl shadow-md border border-cream-dark transition-all duration-500 hover:shadow-xl overflow-hidden">
              <img 
                src="/logo-colaboracion.png" 
                alt="Alianza Promoción y Gestión Inmobiliaria y Juegaterapia" 
                className="w-full h-full object-cover block mx-auto rounded-3xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('logo-colaboracion.png.png')) {
                    target.src = "/logo-colaboracion.png.png";
                  }
                }}
              />
            </div>
          </div>
        </section>

        {/* 3. GRID DE MATERIALES DIDÁCTICOS (Limpio y legible sobre fondo crema) */}
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
            
            {/* COLUMNA PAPEL */}
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-forest/10 mb-8">
                <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center shadow-sm">
                  <Leaf className="w-4 h-4 text-gold" />
                </div>
                <h2 className="font-display text-2xl font-medium tracking-wide uppercase text-forest">
                  Reciclaje Papel
                </h2>
              </div>

              <div className="space-y-6">
                {papelFichas.map((ficha, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white border border-cream-dark shadow-sm hover:shadow-md transition-all duration-300 group">
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
                          Descargar PDF
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA PLÁSTICO */}
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-gold/20 mb-8">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shadow-sm">
                  <Leaf className="w-4 h-4 text-gold-dark" />
                </div>
                <h2 className="font-display text-2xl font-medium tracking-wide uppercase text-gold-dark">
                  Reciclaje Plástico
                </h2>
              </div>

              <div className="space-y-6">
                {plasticoFichas.map((ficha, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white border border-cream-dark shadow-sm hover:shadow-md transition-all duration-300 group">
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
                          Descargar PDF
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
        <div className="mt-24 text-center max-w-md mx-auto px-4 relative z-10">
          <Heart className="w-5 h-5 text-gold mx-auto mb-3" />
          <p className="text-xs text-forest-light italic">
            "Pequeños gestos que transforman entornos y regalan sonrisas."
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
