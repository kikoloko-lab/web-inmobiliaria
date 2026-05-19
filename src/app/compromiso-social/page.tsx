"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";

export default function CompromisoSocialPage() {
  // Datos basados en tus archivos finales en /public
  const papelFichas = [
    { 
      title: 'Papel: Versión ColorAquí tienes el código completo de tu `page.tsx` con la modificación en el contenedor del logo para que se estire y ocupe todo el espacio del recuadro, eliminando el "aire" blanco que tenía antes.

He quitado el relleno (`p-8 md:p-12`) que creaba ese margen interior y he configurado la imagen para que se estire a lo ancho y alto del contenedor (`w-full h-full`), usando `object-cover` para asegurarnos de que la rellene por completo sin deformarla. Como la imagen original tiene una relación de aspecto muy apaisada, esto hará que se vea mucho más grande y "estirada" en comparación con la versión anterior.

Copia este bloque entero y pégalo reemplazando **todo** el contenido de tu archivo:

```tsx
"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Download, Leaf, Heart } from "lucide-react";

export default function CompromisoSocialPage() {
  // Mantenemos tus 6 fichas y rutas de archivos intactas
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
        
        {/* 1. SECCIÓN HERO / MANIFIESTO CORPORATIVO */}
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

        {/* 2. BANNER DE COLABORACIÓN INSTITUCIONAL (ESTIRADO A TODA LA CAJA) */}
        <section className="max-w-4xl mx-auto mb-24 px-4 relative">
          <div className="w-full relative aspect-[16/6] md:aspect-[16/5] bg-white rounded-3xl shadow-sm border border-cream-dark transition-all duration-500 hover:shadow-md overflow-hidden">
            {/* 🌟 CAMBIO CLAVE AQUÍ: La imagen ahora ocupa todo el contenedor sin márgenes interiores */}
            <img 
              src="/logo-colaboracion.png" 
              alt="Alianza Promoción y Gestión Inmobiliaria y Juegaterapia" 
              // w-full h-full object-cover para que rellene todo el espacio del recuadro
              className="w-full h-full object-cover block mx-auto rounded-3xl"
              onError={(e) => {
                // Sistema de seguridad por si acaso mantuviera la doble extensión antigua
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('logo-colaboracion.png.png')) {
                  target.src = "/logo-colaboracion.png.png";
                }
              }}
            />
          </div>
        </section>

        {/* 3. GRID DE MATERIALES DIDÁCTICOS (Papel vs Plástico) */}
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
                    <div className="w-full sm:w-24 h-32 bg-cream rounded-xl flex-
