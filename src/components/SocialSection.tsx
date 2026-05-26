"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";

const SocialSection = () => {
  return (
    <section 
      id="social" 
      className="relative py-24 text-forest"
      style={{ 
        backgroundImage: "url('/02_Accion social fondo.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%'
      }}
    >
      {/* Contenedor principal con fondo blanco semitransparente para legibilidad */}
      <div className="container mx-auto px-4 bg-white/70 backdrop-blur-[2px] rounded-3xl py-12">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-8">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-2 block">
            Valores con Propósito
          </span>
          <h2 className="font-display text-4xl font-light text-forest mb-4">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h2>
          <p className="text-forest-light max-w-2xl mx-auto font-light">
            En Promoción y Gestión Inmobiliaria creemos que cuidar el entorno es cuidar nuestro hogar.
          </p>
        </div>

        {/* RECTÁNGULO DE LOGOS: Subido y más pequeño */}
        <div className="max-w-md mx-auto mb-16 -mt-8">
          <div className="bg-cream p-4 rounded-xl shadow-md border border-forest/10 flex items-center justify-center">
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza PYGI y Juegaterapia" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* SECCIÓN DE FICHAS (Añade aquí tu lógica de mapas de fichas) */}
        
      </div>
    </section>
  );
};

export default SocialSection;
