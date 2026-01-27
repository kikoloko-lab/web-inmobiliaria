"use client";

import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    text: "La tranquilidad y el asesoramiento de Carmen y Elena permiten que las decisiones se tomen con seguridad. Una experiencia excepcional de principio a fin.",
    author: "Ylene Vera",
    role: "Propietaria en Hoyo de Manzanares",
    rating: 5,
  },
  {
    id: 2,
    text: "Profesionalidad y cercania a partes iguales. Carmen entendio perfectamente lo que buscabamos y encontro nuestra casa ideal en tiempo record.",
    author: "Miguel Angel Rodriguez",
    role: "Comprador",
    rating: 5,
  },
  {
    id: 3,
    text: "Vendimos nuestra casa con Elena y el proceso fue impecable. Siempre disponibles, transparentes y con un conocimiento del mercado local inigualable.",
    author: "Laura Fernandez",
    role: "Vendedora",
    rating: 5,
  },
  {
    id: 4,
    text: "Despues de anos trabajando con diferentes agencias, por fin encontramos un equipo que realmente se preocupa por sus clientes. Muy recomendables.",
    author: "Carlos Martinez",
    role: "Inversor",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Lo que dicen de <span className="italic font-semibold text-gold">Carmen y Elena</span>
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
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-10 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-display text-xl font-semibold text-gold mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-white/60 text-sm">
                  {testimonials[currentIndex].role}
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
                {testimonials.map((_, index) => (
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
          <span className="text-sm">5.0 en Google Reviews</span>
        </div>
      </div>
    </section>
  );
}
