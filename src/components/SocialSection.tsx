"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";

const SocialSection = () => {
  const fichas = [
    { 
      title: 'Ficha: Papel y Cartón', 
      file: '/00_PAPEL a color.pdf', 
      description: 'Material didáctico interactivo diseñado para enseñar el valor de la reutilización del cartón y el cuidado de nuestros bosques.' 
    },
    { 
      title: 'Ficha: Plásticos y Envases', 
      file: '/00_PLASTICO a color.pdf', 
      description: 'Ficha educativa estructurada para aprender a identificar el contenedor amarillo y reducir el impacto ambiental en el entorno.' 
    },
  ];

  return (
    <section id="social" className="py-24 lg:py-32 bg-cream text-forest">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* 1. CABECERA EDITORIAL DE LA WEB */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Valores con Propósito
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
            Nuestro <span className="italic font-semibold">compromiso social</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* 2. LOGO DE COLABORACIÓN */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark flex flex-col items-center justify-center gap-6 group hover:shadow-md transition-all duration-300">
            {/* Si la imagen sigue sin verse, revisa que esté en la carpeta public con este nombre exacto */}
            <img 
              src="/logo-colaboracion.png" 
              alt="Colaboración Fundación Juegaterapia" 
              className="max-h-32 w-auto object-contain block mx-auto"
              onError={(e) => {
                console.log("Error cargando la imagen, intentando con extensión doble");
                (e.target as HTMLImageElement).src = "/logo-colaboracion.png.png";
              }}
            />
            <p className="text-forest-light text-center max-w-xl text-base leading-relaxed">
              En colaboración con la <strong className="text-forest font-semibold">Fundación Juegaterapia</strong>, impulsamos iniciativas donde el aprendizaje y el cuidado del entorno se convierten en un juego vital para los más pequeños.
            </p>
          </div>
        </div>

        {/* 3. SUBTÍTULO RECURSOS */}
        <div className="max-w-4xl mx-auto flex items-center gap-3 mb-8 justify-center md:justify-start">
          <Leaf className="w-5 h-5 text-gold" />
          <h3 className="font-display text-2xl text-forest font-light">
            Recursos <span className="italic font-medium">educativos</span>
          </h3>
        </div>

        {/* 4. CUADRÍCULA DE FICHAS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {fichas.map((ficha, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-cream-dark hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-4">
                  Descarga Didáctica
                </span>
                <h4 className="font-display text-2xl font-semibold text-forest mb-3">
                  {ficha.title}
                </h4>
                <p className="text-forest-light text-sm leading-relaxed mb-8">
                  {ficha.description}
                </p>
              </div>

              {/* Botón de descarga con el estilo dorado de la inmobiliaria */}
              <a 
                href={ficha.file} 
                download 
                className="inline-block w-full"
              >
                <Button variant="gold" className="w-full gap-2 cursor-pointer">
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* 5. CIERRE */}
        <div className="mt-20 text-center max-w-md mx-auto">
          <Heart className="w-5 h-5 text-gold mx-auto mb-3" />
          <p className="text-xs text-forest-light italic">
            "Pequeños gestos que transforman entornos y regalan sonrisas."
          </p>
        </div>

      </div>
    </section>
  );
};

export default SocialSection;
