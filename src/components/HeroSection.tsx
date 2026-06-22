"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://visitmadrid-files.s3.eu-west-1.amazonaws.com/files/styles/scale_webp_1280x720/public/2024-07/La%20Pedriza%20%28C%29Comunidad%20de%20Madrid_2016.jpg?itok=BiXF2rvv')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/50 to-forest-dark/80" />
        {/* Additional subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative element - ACTUALIZADO A ENFOQUE NACIONAL */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              Madrid • España
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* 🌟 ES LOGAN POTENTE DE IDEALISTA */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
            ¡Venda su casa
            <br />
            <span className="font-semibold italic text-gold">con quien las hace!</span>
          </h1>

          {/* 🌟 SUBTÍTULO CON VALOR DIFERENCIAL - ENFOQUE MADRID Y ESPAÑA */}
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Somos <span className="font-medium text-gold-light">arquitectos y abogados</span> con más de 30 años de experiencia. Valoramos su vivienda gratuitamente y gestionamos con seguridad jurídica y técnica todo el proceso en <span className="font-medium text-gold-light">Madrid y en toda España</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* 🌟 BOTÓN ACTUALIZADO AL FORMULARIO DE GOOGLE FORMS 🌟 */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfDMotf6BxNoKg3koHJWufazwnmlL7pAIVDfYUuzvyGR3Nhuw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button variant="gold" size="lg" className="text-base px-8 cursor-pointer w-full">
                Quiero vender mi propiedad
              </Button>
            </a>
            
            {/* BOTÓN DE PROPIEDADES */}
            <Link href="#propiedades" className="w-full sm:w-auto block">
              <Button variant="outline" size="lg" className="text-base px-8 border-white/50 text-white hover:bg-white/10 hover:text-white hover:border-white w-full cursor-pointer">
                Ver propiedades exclusivas
              </Button>
            </Link>
          </div>

          {/* 🌟 PÍLDORAS DE CONFIANZA ACTUALIZADAS */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Arquitectos y Abogados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Ámbito Nacional y Seguridad Legal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Valoración gratuita de su vivienda</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Centro) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a
          href="#por-que-nosotros"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Descubre más</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
