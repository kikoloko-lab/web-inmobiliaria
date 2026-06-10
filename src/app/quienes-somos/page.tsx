"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Leaf, Heart, Users, LineChart, Compass } from "lucide-react";

export default function QuienesSomosPage() {
  const whatsappUrl = "https://wa.me/34616385515?text=%C2%A1Hola%21%20He%20estado%20leyendo%20vuestra%20filosof%C3%ADa%20en%20la%20web%20y%20me%20gustar%C3%ADa%20hablar%20con%20vosotros.";

  return (
    <main className="bg-white min-h-screen pt-28">
      
      {/* 1. HERO SECTION (Estilo Infomaniak: Directo, rotundo y limpio) */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-cream/40 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative z-10">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Nuestra Identidad
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-forest leading-tight mb-8">
            Una inmobiliaria de propiedad <span className="italic font-semibold">independiente</span> comprometida con las personas.
          </h1>
          <p className="text-forest-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            No pertenecemos a franquicias masivas ni respondemos ante fondos de inversión. En Promoción y Gestión Inmobiliaria somos un equipo local estable impulsado por la ética, la transparencia y el amor por la Sierra de Guadarrama.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-0" />
      </section>

      {/* 2. CIFRAS CLAVE (Métricas de confianza transparente) */}
      <section className="py-12 border-y border-cream-dark bg-cream/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl font-semibold text-forest mb-2">15+</p>
              <p className="text-xs text-forest-light tracking-wider uppercase font-medium">Años de Arraigo Local</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-semibold text-gold mb-2">100%</p>
              <p className="text-xs text-forest-light tracking-wider uppercase font-medium">Familiar e Independiente</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-semibold text-forest mb-2">0</p>
              <p className="text-xs text-forest-light tracking-wider uppercase font-medium">Comisiones Ocultas</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-semibold text-gold mb-2">1ª</p>
              <p className="text-xs text-forest-light tracking-wider uppercase font-medium">Prioridad: Tu tranquilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANIFIESTO DE VALORES (Inspirado en los bloques de Infomaniak) */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-light text-forest">
              Por qué somos <span className="italic font-semibold">diferentes</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Bloque 1: Propiedad Independiente */}
            <div className="flex flex-col items-start bg-white p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest mb-6">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-medium text-forest mb-3">Modelados por la Ética, no por Volumen</h3>
              <p className="text-forest-light text-sm leading-relaxed text-justify">
                Al ser totalmente independientes, no obligamos a nuestro equipo a cumplir cuotas agresivas de captación. Cada vivienda recibe atención artesanal y cada cliente recibe asesoramiento legal y humano sin presiones comerciales.
              </p>
            </div>

            {/* Bloque 2: Sostenibilidad y Entorno */}
            <div className="flex flex-col items-start bg-white p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest mb-6">
                <Leaf className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-display text-xl font-medium text-forest mb-3">Compromiso con la Sierra</h3>
              <p className="text-forest-light text-sm leading-relaxed text-justify">
                No solo vendemos casas en Hoyo de Manzanares y la Sierra; protegemos activamente su entorno. Impulsamos la cultura ecológica de la flora local y creamos guías didácticas de reciclaje para preservar nuestro parque regional.
              </p>
            </div>

            {/* Bloque 3: Retorno Social */}
            <div className="flex flex-col items-start bg-white p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest mb-6">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-medium text-forest mb-3">Impacto Social Real</h3>
              <p className="text-forest-light text-sm leading-relaxed text-justify">
                Creemos firmemente en el retorno a la sociedad. Apoyamos de manera directa proyectos solidarios como Juegaterapia, destinando recursos para que el juego siga transformando las estancias hospitalarias de los niños.
              </p>
            </div>

            {/* Bloque 4: Equipo Multidisciplinar */}
            <div className="flex flex-col items-start bg-white p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest mb-6">
                <Users className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-display text-xl font-medium text-forest mb-3">Sólido Respaldo Técnico y Legal</h3>
              <p className="text-forest-light text-sm leading-relaxed text-justify">
                Unimos la frescura de las estrategias digitales con un soporte riguroso gracias a nuestro equipo que cuenta con profesionales en Derecho, Arquitectura Superior con más de 30 años de experiencia y Grados en Turismo.
              </p>
            </div>

            {/* Bloque 5: Transparencia Absoluta */}
            <div className="flex flex-col items-start bg-white p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest mb-6">
                <Compass className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-medium text-forest mb-3">Sin Sorpresas de Última Hora</h3>
              <p className="text-forest-light text-sm leading-relaxed text-justify">
                Explicamos con absoluta claridad fiscal y contractual cada paso del proceso de compraventa. La confianza mutua es nuestro único activo no negociable. Si algo no es viable para ti, te lo diremos de frente.
              </p>
            </div>

            {/* Bloque 6: Visión a Largo Plazo */}
            <div className="flex flex-col items-start bg-white p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest mb-6">
                <LineChart className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-display text-xl font-medium text-forest mb-3">Relaciones para toda la vida</h3>
              <p className="text-forest-light text-sm leading-relaxed text-justify">
                Nuestra relación no termina el día de la firma en la notaría. Seguimos estando disponibles para ayudarte a asentarte en el municipio, resolver dudas patrimoniales o asesorarte en futuras decisiones de inversión.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN CREADORES / EQUIPO ENLACE */}
      <section className="py-20 bg-cream/30 border-t border-cream-dark">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h3 className="font-display text-2xl md:text-3xl font-light text-forest mb-6">
            ¿Quieres conocer a los profesionales que sostienen estos valores?
          </h3>
          <p className="text-forest-light mb-8 max-w-xl mx-auto text-sm md:text-base">
            Te invitamos a ver las trayectorias de Carmen, Luis, Elena y Claudia en nuestra sección detallada del equipo.
          </p>
          <Link href="/#equipo">
            <Button variant="default" className="bg-forest text-white hover:bg-forest-light cursor-pointer">
              Ver perfiles del equipo
            </Button>
          </Link>
        </div>
      </section>

      {/* 5. SECCIÓN CTA FINAL (Estilo Infomaniak: Espacio limpio con botón destacado) */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-light text-forest mb-6">
            Vivamos el proceso con la <span className="italic font-semibold">paz que mereces</span>
          </h2>
          <p className="text-forest-light mb-8 font-light">
            Si buscas un socio de confianza absoluta en la Sierra para vender o comprar tu propiedad con tranquilidad legal y comercial, hablemos.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg" className="cursor-pointer">
              Contactar de forma directa
            </Button>
          </a>
        </div>
      </section>

    </main>
  );
}
