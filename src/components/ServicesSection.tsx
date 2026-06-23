"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Key } from "lucide-react";
import { useIdioma } from "@/components/IdiomaContext"; // 🌟 Importamos el sistema de idioma global

// 🌟 Diccionario con todos los textos traducidos para los Servicios
const textosServicios = {
  es: {
    tagSeccion: "Nuestros Servicios",
    tituloParte1: "Cómo podemos ",
    tituloParte2: "ayudarte",
    
    // Bloque Vender
    venderTitulo: "Vender tu propiedad",
    venderDesc: "¿Buscas al comprador ideal? Carmen se encarga de que tu propiedad destaque en el mercado con integridad y resultados rápidos. Valoración profesional, marketing exclusivo y acompañamiento en cada paso del proceso.",
    venderCta: "Quiero vender mi propiedad",
    venderItems: [
      "Valoración gratuita y sin compromiso",
      "Estrategia de marketing personalizada",
      "Gestión integral de documentación",
      "Negociación profesional",
    ],

    // Bloque Comprar
    comprarTitulo: "Encontrar tu hogar",
    comprarDesc: "Encontramos tu refugio. Elena entiende tus necesidades antes incluso de que las digas. Tu nuevo hogar te está esperando. Acceso a propiedades exclusivas y asesoramiento personalizado.",
    comprarCta: "Buscar mi hogar ideal",
    comprarItems: [
      "Acceso a propiedades exclusivas",
      "Búsqueda personalizada según tus necesidades",
      "Visitas acompañadas y asesoradas",
      "Apoyo en todo el proceso de compra",
    ]
  },
  en: {
    tagSeccion: "Our Services",
    tituloParte1: "How we can ",
    tituloParte2: "help you",
    
    // Bloque Vender
    venderTitulo: "Sell your property",
    venderDesc: "Looking for the ideal buyer? Carmen ensures your property stands out in the market with integrity and fast results. Professional valuation, exclusive marketing, and close guidance at every step of the process.",
    venderCta: "I want to sell my property",
    venderItems: [
      "Free valuation with no obligation",
      "Tailored marketing strategy",
      "Comprehensive documentation management",
      "Professional negotiation",
    ],

    // Bloque Comprar
    comprarTitulo: "Find your home",
    comprarDesc: "We find your sanctuary. Elena understands your needs even before you voice them. Your new home is waiting for you. Access to exclusive properties and personalized advice.",
    comprarCta: "Find my ideal home",
    comprarItems: [
      "Access to exclusive properties",
      "Personalized search based on your needs",
      "Guided and professionally advised viewings",
      "Support throughout the entire buying process",
    ]
  }
};

export function ServicesSection() {
  // 🌟 Conectamos con el idioma activo ("es" o "en")
  const { idioma } = useIdioma();
  const t = textosServicios[idioma];

  return (
    <section id="vender" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            {t.tagSeccion}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
            {t.tituloParte1}<span className="italic font-semibold">{t.tituloParte2}</span>
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
                    {t.venderTitulo}
                  </h3>
                  <p className="text-forest-light leading-relaxed mb-6">
                    {t.venderDesc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {t.venderItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-forest">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* ENLACE ACTUALIZADO AL FORMULARIO DE GOOGLE FORMS */}
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfDMotf6BxNoKg3koHJWufazwnmlL7pAIVDfYUuzvyGR3Nhuw/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="gold" className="group/btn gap-2 cursor-pointer">
                      {t.venderCta}
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
                    {t.comprarTitulo}
                  </h3>
                  <p className="text-forest-light leading-relaxed mb-6">
                    {t.comprarDesc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {t.comprarItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-forest">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* ENLACE EXTERNO A IDEALISTA PARA COMPRADORES */}
                  <a 
                    href="https://www.idealista.com/pro/promocion-y-gestion-inmobiliaria/venta-viviendas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="group/btn gap-2 cursor-pointer">
                      {t.comprarCta}
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
