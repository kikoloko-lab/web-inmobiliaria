"use client";

export function TeamSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Título de la Sección */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase block mb-2">
            El Alma de la Inmobiliaria
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
            Quiénes Somos
          </h2>
          <div className="h-0.5 w-12 bg-gold mx-auto mt-4" />
        </div>

        {/* Contenedor de Miembros */}
        <div className="flex flex-col gap-24 max-w-5xl mx-auto">
          
          {/* Bloque 1: Claudia (Imagen Izquierda, Texto Derecha) */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Contenedor Foto Claudia */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="relative aspect-[4/3] sm:aspect-[1.1] md:aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/claudia.jpg" // ⚠️ Cambia esto por la ruta real de tu imagen
                  alt="Claudia"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Contenedor Texto Claudia */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="font-display text-3xl font-bold text-forest mb-1">
                Claudia
              </h3>
              <div className="h-[2px] w-12 bg-gold mb-6" />
              
              <p className="text-forest-light text-base md:text-lg leading-relaxed font-light text-justify md:text-left">
                Claudia combina una energía extraordinaria con un dominio nativo de las estrategias digitales y las redes sociales. Se asegura de que cada propiedad brille en el mercado y conecta de manera cercana y dinámica con las nuevas generaciones de compradores que buscan su hogar en la Sierra.
              </p>
            </div>
          </div>

          {/* Bloque 2: Elena (Texto Izquierda, Imagen Derecha) */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            {/* Contenedor Texto Elena */}
            <div className="w-full md:w-1/2 flex flex-col justify-center md:items-end">
              {/* Cabecera alineada a la derecha en Desktop como en la imagen */}
              <div className="text-left md:text-right w-full">
                <span className="text-gold text-xs font-semibold tracking-wider uppercase block leading-tight">
                  Consultora Inmobiliaria
                </span>
                <span className="text-slate-400 text-xs font-medium block mt-0.5 mb-1">
                  Grado en Turismo
                </span>
                <h3 className="font-display text-3xl font-bold text-forest mb-1">
                  Elena
                </h3>
                <div className="h-[2px] w-12 bg-gold mb-6 md:ml-auto" />
              </div>
              
              <p className="text-forest-light text-base md:text-lg leading-relaxed font-light text-justify md:text-right">
                Elena aporta una sensibilidad especial para comprender las necesidades de cada familia incluso antes de que las expresen. Su empatía y su capacidad de escucha activa convierten la búsqueda de un hogar en una experiencia tranquila, guiada y totalmente personalizada. Además, ofrece una atención multilingüe fluida, dominando el español, inglés, francés e italiano.
              </p>
            </div>

            {/* Contenedor Foto Elena */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative aspect-[4/3] sm:aspect-[1.1] md:aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/elena.jpg" // ⚠️ Cambia esto por la ruta real de tu imagen
                  alt="Elena"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
