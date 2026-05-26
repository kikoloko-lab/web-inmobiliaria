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
      className="relative py-20 text-forest"
      style={{ 
        backgroundImage: "url('/02_Accion social fondo.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-white/80 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-2 block">
            Valores con Propósito
          </span>
          <h2 className="font-display text-4xl font-light text-forest mb-4">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h2>
          <p className="text-forest-light max-w-2xl mx-auto font-light">
            "En Promoción y Gestión Inmobiliaria creemos que cuidar el entorno es cuidar nuestro hogar. Junto a Juegaterapia, convertimos el aprendizaje en un juego para los más pequeños."
          </p>
        </div>

        {/* RECTÁNGULO DE LOGOS: Subido con -mt-12 y más pequeño */}
        <div className="max-w-xl mx-auto mb-20 -mt-12">
          <div className="bg-cream rounded-xl p-4 shadow-lg border border-forest/10 flex items-center justify-center">
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza PYGI y Juegaterapia" 
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>

        {/* CONTENIDOS */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Columnas Papel y Plástico (mismo diseño) */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
