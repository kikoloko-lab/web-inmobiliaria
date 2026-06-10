"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TeamSection() {
  const teamMembers = [
    {
      id: "claudia",
      name: "Claudia",
      image: "/image.png",
      role: "Consultora Inmobiliaria",
      subrole: "Graduada en Derecho",
      description: "Claudia combines an extraordinary energy with a native mastery of digital strategies and social media. She ensures each property shines in the market and connects closely and dynamically with the new generations of buyers looking for their home in the Sierra.",
    },
    {
      id: "elena",
      name: "Elena",
      image: "/fotonuevaelena.jpeg", // 🌟 Tu cambio guardado
      role: "Consultora Inmobiliaria",
      subrole: "Grado en Turismo", // 🌟 Tu cambio guardado
      description: "Elena brings a special sensitivity to understanding the needs of each family even before they express them. Her empathy and active listening skills turn the home search into a calm, guided, and fully personalized experience. Additionally, she offers fluent multilingual care, mastering Spanish, English, French, and Italian.", // 🌟 Tu cambio guardado
    },
    {
      id: "luis",
      name: "Luis",
      image: "/04_luis.jpeg",
      role: "Fundador", // 🌟 Rol principal actualizado
      subrole: "Gestión Patrimonial · Arquitecto Superior", // 🌟 Subrol optimizado
      description: "Como fundador de Promoción y Gestión Inmobiliaria, Luis lidera la firma aportando una visión estratégica respaldada por sus más de 33 años de experiencia como Arquitecto Superior. Especializado en la gestión patrimonial y el análisis técnico-financiero, su liderazgo garantiza que cada operación se evalúe con la máxima rigurosidad y solidez, convirtiendo las decisiones patrimoniales de nuestros clientes en un valor seguro.",
    },
    {
      id: "carmen",
      name: "Carmen",
      image: "/03_varmen (1).jpeg",
      role: "Directora Legal", // 🌟 Rol principal enfocado al ámbito jurídico
      subrole: "Abogada en ejercicio",
      description: "Carmen es el pilar y la salvaguarda jurídica de nuestro equipo. Como abogada en ejercicio con más de 15 años de dedicación exclusiva en Hoyo de Manzanares y la Sierra de Guadarrama, su rol principal es aportar un conocimiento legal exhaustivo en cada transacción. Su implicación asegura que cada contrato y proceso se desarrolle bajo un marco de absoluta transparencia, protección y total seguridad jurídica.",
    },
  ];

  return (
    <section id="equipo" className="py-24 lg:py-32 bg-white overflow-hidden[scroll-behavior:smooth]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-20">
          
          {/* 1. TEXTO DE INTRODUCCIÓN */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Conócenos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
              El factor <span className="italic font-semibold">humano</span>
            </h2>

            {/* Divisor */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

            <p className="font-display text-lg md:text-xl text-forest italic max-w-2xl">
              "Nuestra misión es que vivas el proceso con la paz que mereces."
            </p>
          </div>

          {/* 2. FILA DE IMÁGENES CON ENLACE DE ANCLA */}
          <div className="relative">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center group">
                  
                  {/* 🌟 ENLACE INTERNO: Ahora la imagen te lleva a su ID abajo */}
                  <Link 
                    href={`#perfil-${member.id}`}
                    className="relative rounded-2xl overflow-hidden shadow-md w-full aspect-[4/5] mb-4 cursor-pointer block"
                  >
                    <img
                      src={member.image}
                      alt={`${member.name} - Promoción y Gestión Inmobiliaria`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  {/* Nombre Debajo */}
                  <h4 className="font-display text-xl font-medium text-forest">{member.name}</h4>
                  
                  {/* Rol principal en Dorado */}
                  <p className="text-xs text-gold tracking-wider uppercase mt-1 font-medium">{member.role}</p>
                  
                  {/* Subrole abajo en Verde Forest */}
                  {member.subrole && (
                    <p className="text-xs text-forest/80 font-normal mt-0.5 max-w-[180px]">
                      {member.subrole}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Elementos decorativos */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-64 h-64 border-2 border-gold/20 rounded-2xl -z-10" />
            <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          </div>

          {/* 3. DESGLOSE INDIVIDUAL ALTERNADO (CON IDENTIFICADORES ID) */}
          <div className="mt-12 space-y-20 lg:space-y-28 border-t border-cream-dark pt-20">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  id={`perfil-${member.id}`} // 🌟 ID ÚNICO PARA HACER EL ANCLAJE
                  key={member.name}
                  className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center scroll-mt-24" // scroll-mt evita que el header tape el perfil
                >
                  {/* Bloque Imagen */}
                  <div className={`md:col-span-5 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-sm mx-auto">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Bloque Texto */}
                  <div className={`md:col-span-7 flex flex-col ${isEven ? 'md:order-2 text-left' : 'md:order-1 text-left md:text-right items-start md:items-end'}`}>
                    <div className="flex flex-col mb-2">
                      {/* Rol principal en Dorado */}
                      <span className="text-gold text-xs font-medium tracking-widest uppercase">
                        {member.role}
                      </span>
                      {/* Subrole abajo en Verde Forest */}
                      {member.subrole && (
                        <span className="text-xs text-forest/80 font-normal tracking-wide mt-0.5">
                          {member.subrole}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-light text-forest mb-4">
                      {member.name}
                    </h3>
                    <div className={`w-16 h-0.5 bg-gold mb-6 ${!isEven && 'md:ml-auto'}`} />
                    <p className="text-forest-light leading-relaxed text-base md:text-lg">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. VALORES CORPORATIVOS Y CTA FINAL */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center border-t border-cream-dark pt-16 w-full">
            <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-xl justify-center mb-12">
              {["Integridad", "Compromiso", "Cercanía"].map((value) => (
                <div key={value} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                  <p className="text-sm font-medium text-forest">{value}</p>
                </div>
              ))}
            </div>

            <div>
              {/* 🌟 ENLACE OPTIMIZADO PARA AGENDAR UNA CITA */}
              <a 
                href="https://wa.me/34616385515?text=%C2%A1Hola%21%20He%20visto%20vuestra%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20vosotros%20para%20recibir%20asesoramiento%20inmobiliario.%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F%20Muchas%20gracias."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="gold" className="cursor-pointer">
                  Agenda una cita con nosotros
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
