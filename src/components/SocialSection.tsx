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
    <section id="social" className="relative py-24 lg:py-32 bg-cream text-forest overflow-hidden">
      {/* 1. Fondo solicitado */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: "url('/02_Accion social fondo.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Valores con Propósito
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-forest-light max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
            En <strong className="text-forest font-medium">Promoción y Gestión Inmobiliaria</strong> creemos que cuidar el entorno es cuidar nuestro hogar. Junto a <strong className="text-forest font-medium">Juegaterapia</strong>, convertimos el aprendizaje en un juego para los más pequeños.
          </p>
        </div>

        {/* 2. CONTENEDOR DE LOGOS COMPACTO Y PEGADO */}
        <div className="max-w-xl mx-auto mb-20 mt-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-forest/10 flex items-center justify-center min-h-[100px]">
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza PYGI y Juegaterapia" 
              className="max-h-16 w-auto object-contain block mx-auto"
            />
          </div>
        </div>

        {/* 3. BLOQUE DE CONTENIDOS */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* COLUMNA PAPEL */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-forest/10 mb-8">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                <Leaf className="w-4 h-4 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-medium text-forest uppercase tracking-wider">Reciclaje Papel</h3>
            </div>
            <div className="space-y-6">
              {fichasPapel.map((ficha, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-cream-dark flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-semibold text-forest text-sm">{ficha.title}</h4>
                    <p className="text-forest-light text-xs">{ficha.desc}</p>
                  </div>
                  <a href={ficha.file} download><Button variant="gold" size="sm" className="gap-2 cursor-pointer"><Download className="w-3 h-3" /> PDF</Button></a>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA PLÁSTICO */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-gold/20 mb-8">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-gold-dark" />
              </div>
              <h3 className="font-display text-2xl font-medium text-gold-dark uppercase tracking-wider">Reciclaje Plástico</h3>
            </div>
            <div className="space-y-6">
              {fichasPlastico.map((ficha, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-cream-dark flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-semibold text-forest text-sm">{ficha.title}</h4>
                    <p className="text-forest-light text-xs">{ficha.desc}</p>
                  </div>
                  <a href={ficha.file} download><Button variant="gold" size="sm" className="gap-2 cursor-pointer"><Download className="w-3 h-3" /> PDF</Button></a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. CIERRE */}
        <div className="mt-20 text-center max-w-md mx-auto">
          <Heart className="w-5 h-5 text-gold mx-auto mb-3" />
          <p className="text-xs text-forest-light italic">"Pequeños gestos que transforman entornos y regalan sonrisas."</p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
