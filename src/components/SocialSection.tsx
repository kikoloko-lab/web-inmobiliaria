"use client";

import React from 'react';
import Image from 'next/image'; 
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";
import { useIdioma } from "@/components/IdiomaContext";

const textos = {
  es: {
    tag: "Valores con Propósito",
    titulo: "Nuestro ",
    tituloItalic: "compromiso social",
    descripcion: "En Promoción y Gestión Inmobiliaria creemos que cuidar el entorno es cuidar nuestro hogar. Junto a Juegaterapia, convertimos el aprendizaje en un juego para los más pequeños.",
    seccionPapel: "Reciclaje Papel",
    seccionPlastico: "Reciclaje Plástico",
    cita: "\"Pequeños gestos que transforman entornos y regalan sonrisas.\"",
    fichasPapel: [
      { title: 'Papel: Versión Color', desc: 'Ficha educativa completa con los colores de Juegaterapia.' },
      { title: 'Papel: Para Colorear', desc: 'Versión en blanco y negro ideal para pintar en casa.' },
      { title: 'Guía: Qué sí y qué no', desc: 'Manual rápido para resolver dudas frecuentes sobre el contenedor azul.' }
    ],
    fichasPlastico: [
      { title: 'Plástico: Versión Color', desc: 'Ficha didáctica para aprender sobre el contenedor amarillo.' },
      { title: 'Plástico: Para Colorear', desc: 'Divertida ficha para colorear mientras aprenden a reciclar.' },
      { title: 'Guía: Qué sí y qué no', desc: 'Manual práctico para identificar correctamente envases y bricks.' }
    ]
  },
  en: {
    tag: "Values with Purpose",
    titulo: "Our ",
    tituloItalic: "social commitment",
    descripcion: "At Promoción y Gestión Inmobiliaria, we believe that caring for the environment is caring for our home. Together with Juegaterapia, we turn learning into a game for the little ones.",
    seccionPapel: "Paper Recycling",
    seccionPlastico: "Plastic Recycling",
    cita: "\"Small gestures that transform environments and bring smiles.\"",
    fichasPapel: [
      { title: 'Paper: Color Version', desc: 'Complete educational sheet featuring Juegaterapia colors.' },
      { title: 'Paper: Coloring Sheet', desc: 'Black and white version ideal for painting at home.' },
      { title: 'Guide: Do\'s and Don\'ts', desc: 'Quick guide to resolve common questions about the blue container.' }
    ],
    fichasPlastico: [
      { title: 'Plastic: Color Version', desc: 'Didactic sheet to learn all about the yellow container.' },
      { title: 'Plastic: Coloring Sheet', desc: 'Fun sheet for coloring while learning how to recycle.' },
      { title: 'Guide: Do\'s and Don\'ts', desc: 'Practical manual to properly identify containers and cartons.' }
    ]
  }
};

const SocialSection = () => {
  const { idioma } = useIdioma();
  const t = textos[idioma || "es"];

  // Mapeamos los archivos físicos locales con sus respectivos textos dinámicos traducidos
  const archivosPapel = ['/00_PAPEL a color.pdf', '/00_PAPEL blanco y negro.pdf', '/01_GUIA_PAPEL.pdf'];
  const archivosPlastico = ['/00_PLASTICO a color.pdf', '/00_PLASTICO blanco y negro.pdf', '/01_GUIA_PLASTICO.pdf'];

  const fichasPapelCombinadas = t.fichasPapel.map((ficha, idx) => ({
    ...ficha,
    file: archivosPapel[idx]
  }));

  const fichasPlasticoCombinadas = t.fichasPlastico.map((ficha, idx) => ({
    ...ficha,
    file: archivosPlastico[idx]
  }));

  return (
    <section 
      id="social" 
      className="relative py-24 text-forest overflow-hidden"
    >
      {/* CONTENEDOR DE FONDO ABSOLUTO */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/fondo-social.png" 
          alt="Fondo de compromiso social"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Capa de contraste blanca (Overlay) */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
      </div>
      
      {/* CONTENIDO PRINCIPAL */}
      <div className="container relative mx-auto px-4 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-6">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block drop-shadow-sm">
            {t.tag}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
            {t.titulo}<span className="italic font-semibold">{t.tituloItalic}</span>
          </h2>
          <p className="text-forest-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal mb-8">
            {t.descripcion}
          </p>
        </div>

        {/* RECTÁNGULO DE LOGOS */}
        <div className="flex justify-center -mt-4 mb-16">
          <div className="bg-cream px-6 py-4 rounded-xl shadow-md border border-forest/10 w-72 flex items-center justify-center">
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza PYGI and Juegaterapia" 
              className="h-12 w-auto object-contain block mx-auto"
            />
          </div>
        </div>

        {/* BLOQUE DE CONTENIDOS (Fichas) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* COLUMNA PAPEL */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-forest/20 mb-8">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center shadow-sm">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-display text-2xl font-medium text-forest uppercase tracking-wider">{t.seccionPapel}</h3>
            </div>
            <div className="space-y-6">
              {fichasPapelCombinadas.map((ficha, idx) => (
                <div key={idx} className="bg-white/90 p-6 rounded-2xl shadow-sm border border-forest/10 flex justify-between items-center gap-4 hover:shadow-md transition-shadow">
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
              <h3 className="font-display text-2xl font-medium text-gold-dark uppercase tracking-wider">{t.seccionPlastico}</h3>
            </div>
            <div className="space-y-6">
              {fichasPlasticoCombinadas.map((ficha, idx) => (
                <div key={idx} className="bg-white/90 p-6 rounded-2xl shadow-sm border border-gold/20 flex justify-between items-center gap-4 hover:shadow-md transition-shadow">
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

        {/* CIERRE */}
        <div className="mt-20 text-center max-w-md mx-auto">
          <Heart className="w-5 h-5 text-gold mx-auto mb-3" />
          <p className="text-xs text-forest-light italic bg-white/80 inline-block px-4 py-2 rounded-full shadow-sm">
            {t.cita}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
