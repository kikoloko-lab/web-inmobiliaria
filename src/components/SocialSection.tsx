"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";

const SocialSection = () => {
  // ... (tus arrays de fichas aquí)

  return (
    <section 
      id="social" 
      className="relative py-24 text-forest"
      style={{ 
        backgroundImage: `url('${encodeURI('/02_Accion social fondo.png')}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Capa base para asegurar que el fondo sea visible */}
      <div className="absolute inset-0 z-0 bg-white/70" />

      <div className="container relative z-10 mx-auto px-4">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-2 block">
            Valores con Propósito
          </span>
          <h2 className="font-display text-4xl font-light text-forest mb-4">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h2>
        </div>

        {/* RECTÁNGULO DE LOGOS: Subido y más pequeño */}
        {/* He subido el contenedor con -mt-16 para que se pegue al título */}
        <div className="max-w-md mx-auto mb-16 -mt-16 relative">
          <div className="bg-cream p-4 rounded-xl shadow-lg border border-forest/10 flex items-center justify-center">
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza PYGI y Juegaterapia" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* BLOQUE DE CONTENIDOS */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* ... tus columnas ... */}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
