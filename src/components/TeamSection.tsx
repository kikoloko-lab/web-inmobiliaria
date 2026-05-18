"use client";

import { Button } from "@/components/ui/button";

export function TeamSection() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Contenedor principal en dirección vertical (flex-col) */}
        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* 1. FILA DE IMÁGENES: 4 columnas en pantallas grandes, 2 en tablets y 1 en móvil */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {/* Foto 1 - Equipo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/5]">
                <img
                  src="/01.jpeg"
                  alt="Equipo - Promocion y Gestion Inmobiliaria"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Foto 2 - Elena */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/5]">
                <img
                  src="/02_ele.jpeg"
                  alt="Elena - Promocion y Gestion Inmobiliaria"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white font-medium tracking-wide text-sm">Elena</span>
                </div>
              </div>

              {/* Foto 3 - Carmen */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/5]">
                <img
                  src="/03_varmen (1).jpeg"
                  alt="Carmen - Promocion y Gestion Inmobiliaria"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white font-medium tracking-wide text-sm">Carmen</span>
                </div>
              </div>

              {/* Foto 4 - Luis */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/5]">
                <img
                  src="/04_luis.jpeg"
                  alt="Luis - Promocion y Gestion Inmobiliaria"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white font-medium tracking-wide text-sm">Luis</span>
                </div>
              </div>
            </div>

            {/* Elementos decorativos posicionados respecto a la fila completa de fotos */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-64 h-64 border-2 border-gold/30 rounded-2xl -z-10" />
            <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />

            {/* Tarjeta de Stats integrada de forma limpia al final de la fila */}
            <div className="absolute -bottom-6 right-4 sm:right-6 bg-white rounded-xl shadow-xl p-5 border border-cream-dark">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-forest mb-0.5">+15</p>
                <p className="text-xs text-forest-light whitespace-nowrap">Años de experiencia</p>
              </div>
            </div>
          </div>

          {/* 2. BLOQUE DE TEXTO: Posicionado abajo y centrado (max-w-3xl mx-auto) */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Conócenos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
              El factor <span className="italic font-semibold">humano</span>
            </h2>

            {/* Divisor centrado */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

            {/* Párrafos descriptivos */}
            <div className="space-y-6 text-forest-light leading-relaxed text-base md:text-lg text-justify sm:text-center">
              <p>
                <span className="font-semibold text-forest">Carmen</span>, fundadora con integridad y compromiso,
                lidera un equipo donde cada cliente es una prioridad, no un número. Su conocimiento profundo
                del mercado de Hoyo de Manzanares y la Sierra de Guadarrama es fruto de más de 15 años
                de dedicación exclusiva a esta zona.
              </p>
              <p>
                <span className="font-semibold text-forest">Elena</span> aporta una sensibilidad especial para
                entender las necesidades de cada familia antes incluso de que las expresen. Juntas, forman
                un dúo que combina experiencia, empatía y resultados.
              </p>
              <p className="font-medium text-forest italic pt-2">
                Nuestra misión es que vivas el proceso con la paz que mereces.
              </p>
            </div>

            {/* Valores en cuadrícula */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-12 pt-10 border-t border-cream-dark w-full max-w-xl justify-center">
              {["Integridad", "Compromiso", "Cercanía"].map((value) => (
                <div key={value} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                  <p className="text-sm font-medium text-forest">{value}</p>
                </div>
              ))}
            </div>

            {/* Botón de Llamada a la Acción (CTA) */}
            <div className="mt-12">
              <Button variant="gold" size="lg" className="px-8 py-6 text-base">
                Agenda una cita con nosotras
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
