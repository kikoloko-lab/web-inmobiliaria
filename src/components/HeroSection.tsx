"use client";

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
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              Hoyo de Manzanares
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
            Tu hogar en la Sierra,
            <br />
            <span className="font-semibold italic text-gold">gestionado con alma.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            En Promocion y Gestion Inmobiliaria unimos la exclusividad de Hoyo de Manzanares
            con el trato humano que mereces.
            <span className="font-medium text-gold-light"> Carmen y Elena te acompanan a casa.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" className="text-base px-8">
              Quiero vender mi propiedad
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 border-white/50 text-white hover:bg-white/10 hover:text-white hover:border-white">
              Ver propiedades exclusivas
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>+15 anos en la Sierra</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Especialistas en Hoyo de Manzanares</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Trato personalizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a
          href="#por-que-nosotros"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Descubre mas</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
