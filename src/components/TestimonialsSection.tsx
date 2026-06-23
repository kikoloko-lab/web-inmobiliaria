"use client";

import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIdioma } from "@/components/IdiomaContext"; // 🌟 Importamos el sistema de idioma global

// 🌟 Diccionario con todos los testimonios y textos traducidos
const textosTestimonios = {
  es: {
    tagSeccion: "Testimonios",
    tituloParte1: "Los resultados de ",
    tituloParte2: "nuestro equipo",
    badgeGoogle: "5.0 en Google Reviews",
    lista: [
      {
        id: 1,
        text: "La tranquilidad y el asesoramiento de Carmen y Elena permiten que las decisiones se tomen con seguridad. Una experiencia excepcional de principio a fin.",
        author: "Ylene Vera",
        role: "Propietaria en Hoyo de Manzanares",
        rating: 5,
      },
      {
        id: 2,
        text: "Profesionalidad y cercanía a partes iguales. Carmen entendió perfectamente lo que buscábamos y encontró nuestra casa ideal en tiempo récord.",
        author: "Miguel Ángel Rodríguez",
        role: "Comprador",
        rating: 5,
      },
      {
        id: 3,
        text: "Vendimos nuestra casa con Elena y el proceso fue impecable. Siempre disponibles, transparentes y con un conocimiento del mercado local inigualable.",
        author: "Laura Fernández",
        role: "Vendedora",
        rating: 5,
      },
      {
        id: 4,
        text: "Después de años trabajando con diferentes agencias, por fin encontramos un equipo que realmente se preocupa por sus clientes. Muy recomendables.",
        author: "Carlos Martínez",
        role: "Inversor",
        rating: 5,
      },
    ]
  },
  en: {
    tagSeccion: "Testimonials",
    tituloParte1: "The results of ",
    tituloParte2: "our team",
    badgeGoogle: "5.0 on Google Reviews",
    lista: [
      {
        id: 1,
        text: "The peace of mind and guidance provided by Carmen and Elena allow decisions to be made with absolute confidence. An exceptional experience from start to finish.",
        author: "Ylene Vera",
        role: "Property Owner in Hoyo de Manzanares",
        rating: 5,
      },
      {
        id: 2,
        text: "Equal parts professionalism and warmth. Carmen perfectly understood what we were looking for and found our ideal home in record time.",
        author: "Miguel Ángel Rodríguez",
        role: "Buyer",
        rating: 5,
      },
      {
        id: 3,
        text: "We sold our house with Elena and the process was flawless. Always available, transparent, and with unparalleled knowledge of the local market.",
        author: "Laura Fernández",
        role: "Seller",
        rating: 5,
      },
      {
        id: 4,
        text: "After years of working with different agencies, we finally found a team that truly cares about their clients. Highly recommended.",
        author: "Carlos Martínez",
        role: "Investor",
        rating: 5,
      },
    ]
  }
};

export function TestimonialsSection() {
  // 🌟 Conectamos con el idioma activo ("es" o "en")
  const { idioma } = useIdioma();
  const t = textosTestimonios[idioma];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % t.lista.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + t.lista.length) % t.lista.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-forest relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            {t.tagSeccion}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            {t.tituloParte1}<span className="italic font-semibold text-gold">{t.tituloParte2}</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-8 left-0 w-16 h-16 text-gold/20" />

            {/* Testimonial Content */}
            <div className="text-center py-8">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {[...Array(t.lista[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-10 italic">
                "{t.lista[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-display text-xl font-semibold text-gold mb-1">
                  {t.lista[currentIndex].author}
                </p>
                <p className="text-white/60 text-sm">
                  {t.lista[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-white/60 hover:text-gold hover:bg-white/5 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {t.lista.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gold"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-white/60 hover:text-gold hover:bg-white/5 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 flex items-center justify-center gap-3 text-white/60">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gold fill-gold" />
            ))}
          </div>
          <span className="text-sm">{t.badgeGoogle}</span>
        </div>
      </div>
    </section>
  );
}
