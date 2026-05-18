"use client";

import { Button } from "@/components/ui/button";

export function TeamSection() {
  // Array de datos para renderizar la fila superior y el desglose inferior alternado
  const teamMembers = [
    {
      name: "Claudia",
      image: "/image.png",
      role: "Consultora Inmobiliaria",
      subrole: "Graduada en Derecho",
      description: "Claudia combina una energía extraordinaria con un dominio nativo de las estrategias digitales y redes sociales. Se encarga de que cada propiedad brille en el mercado y de conectar de forma cercana y dinámica con las nuevas generaciones de compradores que buscan su hogar en la Sierra.",
    },
    {
      name: "Elena",
      image: "/02_ele.jpeg",
      role: "Consultora Inmobiliaria",
      subrole: "", 
      description: "Elena aporta una sensibilidad especial para entender las necesidades de cada familia antes incluso de que las expresen. Su empatía y capacidad de escucha activa hacen que la búsqueda de una vivienda se convierta en una experiencia tranquila, guiada y totalmente personalizada.",
    },
    {
      name: "Carmen",
      image: "/03_varmen (1).jpeg",
      role: "Fundadora",
      subrole: "Abogada en ejercicio",
      description: "Carmen, fundadora con integridad y compromiso, lidera un equipo donde cada cliente es una prioridad, no un número. Su conocimiento profundo del mercado de Hoyo de Manzanares y la Sierra de Guadarrama es fruto de más de 15 años de dedicación exclusiva a esta zona.",
    },
    {
      name: "Luis",
      image: "/04_luis.jpeg",
      role: "Gestión Patrimonial",
      subrole: "Arquitecto Superior con 33 años de experiencia",
      description: "Luis es el pilar técnico y legal del equipo. Con una sólida trayectoria en la gestión patrimonial y análisis financiero, aporta la rigurosidad, seguridad y el marco legal impecable que nuestros clientes necesitan para tomar decisiones patrimoniales con absoluta tranquilidad.",
    },
  ];

  return (
    <section id="equipo" className="py-24 lg:py-32 bg-white overflow-hidden">
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

          {/* 2. FILA DE IMÁGENES CON NOMBRE Y ROLES DEBAJO */}
          <div className="relative">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center group">
                  {/* Imagen */}
                  <div className="relative rounded-2xl overflow-hidden shadow-md w-full aspect-[4/5] mb-4">
                    <img
                      src={member.image}
                      alt={`${member.name} - Promoción y Gestión Inmobiliaria`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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

          {/* 3. DESGLOSE INDIVIDUAL ALTERNADO */}
          <div className="mt-12 space-y-20 lg:space-y-28 border-t border-cream-dark pt-20">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={member.name}
                  className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center"
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
              {/* 🌟 ENLACE DE WHATSAPP CON TEXTO PERSONALIZADO */}
              <a 
                href="https://wa.me/34616385515?text=%C2%A1Hola%21%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20inmobiliarios."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="gold" size="lg" className="px-8 py-6 text-base cursor-pointer">
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
