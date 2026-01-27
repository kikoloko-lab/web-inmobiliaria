"use client";

import { Button } from "@/components/ui/button";

export function TeamSection() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                alt="Carmen y Elena - Equipo de Promocion y Gestion Inmobiliaria"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-gold/30 rounded-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />

            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 lg:left-auto lg:-right-6 bg-white rounded-xl shadow-xl p-6 border border-cream-dark">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-forest mb-1">+15</p>
                <p className="text-sm text-forest-light">Anos de experiencia</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Conocenos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
              El factor <span className="italic font-semibold">humano</span>
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8" />

            <div className="space-y-6 text-forest-light leading-relaxed">
              <p>
                <span className="font-semibold text-forest">Carmen</span>, fundadora con integridad y compromiso,
                lidera un equipo donde cada cliente es una prioridad, no un numero. Su conocimiento profundo
                del mercado de Hoyo de Manzanares y la Sierra de Guadarrama es fruto de mas de 15 anos
                de dedicacion exclusiva a esta zona.
              </p>
              <p>
                <span className="font-semibold text-forest">Elena</span> aporta una sensibilidad especial para
                entender las necesidades de cada familia antes incluso de que las expresen. Juntas, forman
                un duo que combina experiencia, empatia y resultados.
              </p>
              <p className="font-medium text-forest italic">
                Nuestra mision es que vivas el proceso con la paz que mereces.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-cream-dark">
              {["Integridad", "Compromiso", "Cercania"].map((value) => (
                <div key={value} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                  <p className="text-sm font-medium text-forest">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button variant="gold" size="lg">
                Agenda una cita con nosotras
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
