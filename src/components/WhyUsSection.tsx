"use client";

import { Shield, Heart, Sparkles } from "lucide-react";
import { useIdioma } from "@/components/IdiomaContext"; // 🌟 Importamos el sistema de idioma global

// 🌟 Diccionario con todos los textos traducidos para esta sección
const textosWhyUs = {
  es: {
    tagSeccion: "Nuestra Diferencia",
    titulo: "Por qué elegirnos",
    pilares: [
      {
        title: "Transparencia Absoluta",
        description: "Sin sorpresas, con claridad en cada paso. Cada detalle del proceso de venta o compra te será explicado con total honestidad.",
      },
      {
        title: "Acompañamiento Humano",
        description: "No somos una agencia, somos tus aliadas. Entendemos que comprar o vender una casa es una decisión de vida.",
      },
      {
        title: "Gestión Impecable",
        description: "Especialistas en resolver lo complejo con elegancia. Nos encargamos de todo para que tú solo disfrutes del resultado.",
      }
    ]
  },
  en: {
    tagSeccion: "Our Difference",
    titulo: "Why Choose Us",
    pilares: [
      {
        title: "Absolute Transparency",
        description: "No surprises, absolute clarity at every stage. Every single detail of the buying or selling process will be explained with complete honesty.",
      },
      {
        title: "Human Touch",
        description: "We are not just an agency, we are your trusted allies. We understand that buying or selling a home is a life-changing decision.",
      },
      {
        title: "Impeccable Management",
        description: "Specialists in handling complex matters with absolute elegance. We take care of everything so you can simply enjoy the result.",
      }
    ]
  }
};

export function WhyUsSection() {
  // 🌟 Conectamos con el idioma activo ("es" o "en")
  const { idioma } = useIdioma();
  const t = textosWhyUs[idioma];

  // Mapeamos los iconos de Lucide a los pilares traducidos correspondientes
  const iconos = [Shield, Heart, Sparkles];
  
  const pillars = t.pilares.map((pilar, index) => ({
    ...pilar,
    icon: iconos[index]
  }));

  return (
    <section id="por-que-nosotros" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            {t.tagSeccion}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
            {t.titulo}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative p-8 lg:p-10 rounded-2xl bg-cream/50 hover:bg-cream transition-all duration-500 border border-transparent hover:border-gold/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500">
                  <pillar.icon className="w-7 h-7 text-forest group-hover:text-gold-dark transition-colors duration-500" />
                </div>
              </div>

              {/* Number */}
              <span className="absolute top-6 right-8 font-display text-6xl font-light text-forest/5 group-hover:text-gold/10 transition-colors duration-500">
                0{index + 1}
              </span>

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-forest mb-4">
                {pillar.title}
              </h3>
              <p className="text-forest-light leading-relaxed">
                {pillar.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
