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
      className="relative py-24 text-forest"
    >
      {/* FONDO: Asegúrate de que 02_Accion social fondo.png esté en /public */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/02_Accion social fondo.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          opacity: 0.15 // Ajusta la visibilidad aquí
        }} 
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-6">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-2 block">
            Valores con Propósito
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-forest mb-4">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h2>
        </div>

        {/* CONTENEDOR CREMA: Más pequeño y subido (margen negativo) */}
        <div className="max-w-sm mx-auto mb-16 -mt-2">
          <div className="bg-cream rounded-xl p-3 shadow-sm border border-forest/10 flex items-center justify-center">
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza PYGI y Juegaterapia" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* 3. BLOQUE DE CONTENIDOS */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ... (Tus columnas de fichas igual que antes) ... */}
        </div>

        {/* 4. CIERRE */}
        <div className="mt-16 text-center max-w-md mx-auto">
          <Heart className="w-5 h-5 text-gold mx-auto mb-3" />
          <p className="text-xs text-forest-light italic">"Pequeños gestos que transforman entornos y regalan sonrisas."</p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
