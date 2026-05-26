"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";

const SocialSection = () => {
  const fichasPapel = [
    { title: 'Papel: Versión Color', file: '/00_PAPEL a color.pdf', desc: 'Ficha educativa completa con los colores de Juegaterapia.' },
    { title: 'Papel: Para Colorear', file: '/00_PAPEL blanco y negro.pdf', desc: 'Versión en blanco y negro ideal para pintar en casa.' },
    { title: 'Guía: Qué sí y qué no', file: '/01_GUIA_PAPEL.pdf', desc: 'Manual rápido para resolver dudas frecuentes sobre el contenedor azul.' }
  ];

  const fichasPlastico = [
    { title: 'Plástico: Versión Color', file: '/00_PLASTICO a color.pdf', desc: 'Ficha didáctica para aprender sobre el contenedor amarillo.' },
    { title: 'Plástico: Para Colorear', file: '/00_PLASTICO blanco y negro.pdf', desc: 'Divertida ficha para colorear mientras aprenden a reciclar.' },
    { title: 'Guía: Qué sí y qué no', file: '/01_GUIA_PLASTICO.pdf', desc: 'Manual práctico para identificar correctamente envases y bricks.' }
  ];

  return (
    <section 
      id="social" 
      className="relative py-24 text-forest overflow-hidden"
    >
      {/* 1. CAPA DE IMAGEN DE FONDO */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/fondo-social.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* 2. CAPA OVERLAY (Blanco semitransparente para que el texto se lea bien) */}
      <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* ENCABEZADO */}
        {/* Se ha reducido el margin-bottom para que el logo se acerque más */}
        <div className="text-center mb-6">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block drop-shadow-sm">
            Valores con Propósito
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h2>
          <p className="text-forest-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light mb-8">
            En Promoción y Gestión Inmobiliaria creemos que cuidar el entorno es cuidar nuestro hogar. Junto a Juegaterapia, convertimos el aprendizaje en un juego para los más pequeños.
          </p>
        </div>

        {/* RECTÁNGULO DE LOGOS */}
        {/* Subido con margen negativo severo (-mt-4) y ancho ajustado (w-72) */}
        <div className="flex justify-center -mt-4 mb-16 relative z-20">
          <div className="bg-cream px-6 py-4 rounded-xl shadow-md border border-forest/10 w-72 flex items-center justify-center">
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza PYGI y Juegaterapia" 
              className="h-12 w-auto object-contain block mx-auto"
            />
          </div>
        </div>

        {/* 3. BLOQUE DE CONTENIDOS */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* COLUMNA PAPEL */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-forest/20 mb-8">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center shadow-sm">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-display text-2xl font-medium text-forest uppercase tracking-wider">Reciclaje Papel</h3>
            </div>
            <div className="space-y-6">
              {fichasPapel.map((ficha, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-forest/10 flex justify-between items-center gap-4 hover:shadow-md transition-shadow">
                  <div>
                    <h4 className="font-semibold text-forest text-sm">{ficha.title}</h4>
                    <p className="text-forest-light text-xs mt-1">{ficha.desc}</p>
                  </div>
                  <a href={ficha.file} download>
                    <Button variant="default" size="sm" className="gap-2 cursor-pointer bg-forest text-white hover:bg-forest-light">
                      <Download className="w-3 h-3" /> PDF
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA PLÁSTICO */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-gold/40 mb-8">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-sm">
                <Leaf className="w-4 h-4 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-medium text-gold-dark uppercase tracking-wider">Reciclaje Plástico</h3>
            </div>
            <div className="space-y-6">
              {fichasPlastico.map((ficha, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gold/20 flex justify-between items-center gap-4 hover:shadow-md transition-shadow">
                  <div>
                    <h4 className="font-semibold text-forest text-sm">{ficha.title}</h4>
                    <p className="text-forest-light text-xs mt-1">{ficha.desc}</p>
                  </div>
                  <a href={ficha.file} download>
                    <Button variant="default" size="sm" className="gap-2 cursor-pointer bg-gold text-forest hover:bg-gold-light">
                      <Download className="w-3 h-3" /> PDF
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. CIERRE */}
        <div className="mt-20 text-center max-w-md mx-auto">
          <Heart className="w-5 h-5 text-gold mx-auto mb-3" />
          <p className="text-xs text-forest-light italic bg-white/50 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
            "Pequeños gestos que transforman entornos y regalan sonrisas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
