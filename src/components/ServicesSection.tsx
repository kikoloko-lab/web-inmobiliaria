"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Key } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="vender" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
            Cómo podemos <span className="italic font-semibold">ayudarte</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sell Service */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/23861d06-8048-4aca-a2a6-6be038089ab2/natural-light-BigHorn-palm-desert-luxury-resort-style-modern-home-interior.jpeg"
                alt="Interior de lujo"
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
            </div>

            <div className="relative p-8 lg:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-forest flex items-center justify-center">
                  <Home className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-forest mb-4">
                    Vender tu propiedad
                  </h3>
                  <p className="text-forest-light leading-relaxed mb-6">
                    ¿Buscas al comprador ideal? Carmen se encarga de que tu propiedad
                    destaque en el mercado con integridad y resultados rápidos.
                    Valoración profesional, marketing exclusivo y acompañamiento
                    en cada paso del proceso.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Valoración gratuita y sin compromiso",
                      "Estrategia de marketing personalizada",
                      "Gestión integral de documentación",
                      "Negociación profesional",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-forest">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* 🌟 ENLACE ACTUALIZADO AL FORMULARIO DE GOOGLE FORMS */}
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfDMotf6BxNoKg3koHJWufazwnmlL7pAIVDfYUuzvyGR3Nhuw/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="gold" className="group/btn gap-2 cursor-pointer">
                      Quiero vender mi propiedad
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Buy Service */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://s1.rea.global/img/400x320-fit/realtor_global/es/d16e9505a5e508f343ceaa629341049d.jpg"
                alt="Vista aérea de la zona residencial"
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
            </div>

            <div className="relative p-8 lg:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                  <Key className="w-7 h-7 text-forest-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-forest mb-4">
                    Encontrar tu hogar
                  </h3>
                  {/* 🌟 TEXTO ACTUALIZADO: ENFOQUE NACIONAL SIN LIMITACIÓN */}
                  <p className="text-forest-light leading-relaxed mb-6">
                    Encontramos tu refugio. Elena entiende tus necesidades antes
                    incluso de que las digas. Tu nuevo hogar te está esperando.
                    Acceso a propiedades exclusivas y asesoramiento personalizado.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Acceso a propiedades exclusivas",
                      "Búsqueda personalizada según tus necesidades",
                      "Visitas acompañadas y asesoradas",
                      "Apoyo en todo el proceso de compra",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-forest">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* 🌟 ENLACE EXTERNO A IDEALISTA PARA COMPRADORES */}
                  <a 
                    href="https://www.idealista.com/pro/promocion-y-gestion-inmobiliaria/venta-viviendas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="group/btn gap-2 cursor-pointer">
                      Buscar mi hogar ideal
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
