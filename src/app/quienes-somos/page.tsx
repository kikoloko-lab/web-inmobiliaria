"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Leaf, Heart, Users, LineChart, Compass } from "lucide-react";
import { useIdioma } from "@/components/IdiomaContext"; // 🌟 Importamos el sistema global

const textosAbout = {
  es: {
    heroTag: "Nuestra Identidad",
    heroTitlePart1: "Una inmobiliaria de propiedad ",
    heroTitleItalic: "independiente",
    heroTitlePart2: " comprometida con las personas.",
    heroDesc: "No pertenecemos a franquicias masivas ni respondemos ante fondos de inversión. En Promoción y Gestión Inmobiliaria somos un equipo local estable impulsado por la ética, la transparencia y el amor por la Sierra de Guadarrama.",
    stats: [
      { num: "15+", label: "Años de Arraigo Local" },
      { num: "100%", label: "Familiar e Independiente" },
      { num: "0", label: "Comisiones Ocultas" },
      { num: "1ª", label: "Prioridad: Tu tranquilidad" }
    ],
    whyDiff: "Por qué somos ",
    whyDiffItalic: "diferentes",
    blocks: [
      { icon: ShieldCheck, title: "Modelados por la Ética, no por Volumen", desc: "Al ser totalmente independientes, no obligamos a nuestro equipo a cumplir cuotas agresivas de captación. Cada vivienda recibe atención artesanal y cada cliente recibe asesoramiento legal y humano sin presiones comerciales." },
      { icon: Leaf, title: "Compromiso con la Sierra", desc: "No solo vendemos casas en Hoyo de Manzanares y la Sierra; protegemos activamente su entorno. Impulsamos la cultura ecológica de la flora local y creamos guías didácticas de reciclaje para preservar nuestro parque regional." },
      { icon: Heart, title: "Impacto Social Real", desc: "Creemos firmemente en el retorno a la sociedad. Apoyamos de manera directa proyectos solidarios como Juegaterapia, destinando recursos para que el juego siga transformando las estancias hospitalarias de los niños." },
      { icon: Users, title: "Sólido Respaldo Técnico y Legal", desc: "Unimos la frescura de las estrategias digitales con un soporte riguroso gracias a nuestro equipo que cuenta con profesionales en Derecho, Arquitectura Superior con más de 30 años de experiencia y Grados en Turismo." },
      { icon: Compass, title: "Sin Sorpresas de Última Hora", desc: "Explicamos con absoluta claridad fiscal y contractual cada paso del proceso de compraventa. La confianza mutua es nuestro único activo no negociable. Si algo no es viable para ti, te lo diremos de frente." },
      { icon: LineChart, title: "Relaciones para toda la vida", desc: "Nuestra relación no termina el día de la firma en la notaría. Seguimos estando disponibles para ayudarte a asentarte en el municipio, resolver dudas patrimoniales o asesorarte en futuras decisiones de inversión." }
    ],
    ctaTitle: "¿Quieres conocer a los profesionales que sostienen estos valores?",
    ctaDesc: "Te invitamos a ver las trayectorias de Carmen, Luis, Elena y Claudia en nuestra sección detallada del equipo.",
    btnTeam: "Ver perfiles del equipo",
    finalTitle: "Vivamos el proceso con la ",
    finalTitleItalic: "paz que mereces",
    finalDesc: "Si buscas un socio de confianza absoluta en la Sierra para vender o comprar tu propiedad con tranquilidad legal y comercial, hablemos.",
    btnContact: "Contactar de forma directa"
  },
  en: {
    heroTag: "Our Identity",
    heroTitlePart1: "An ",
    heroTitleItalic: "independent",
    heroTitlePart2: " real estate agency committed to people.",
    heroDesc: "We do not belong to massive franchises nor do we answer to investment funds. At Promoción y Gestión Inmobiliaria, we are a stable local team driven by ethics, transparency, and a love for the Sierra de Guadarrama.",
    stats: [
      { num: "15+", label: "Years of Local Roots" },
      { num: "100%", label: "Family-owned & Independent" },
      { num: "0", label: "Hidden Commissions" },
      { num: "1st", label: "Priority: Your peace of mind" }
    ],
    whyDiff: "Why we are ",
    whyDiffItalic: "different",
    blocks: [
      { icon: ShieldCheck, title: "Driven by Ethics, Not Volume", desc: "As a fully independent agency, we do not force our team to meet aggressive acquisition quotas. Each property receives artisanal attention, and every client receives legal and human guidance without commercial pressure." },
      { icon: Leaf, title: "Commitment to the Sierra", desc: "We don't just sell homes in Hoyo de Manzanares and the Sierra; we actively protect its environment. We promote local flora ecology and create educational recycling guides to preserve our regional park." },
      { icon: Heart, title: "Real Social Impact", desc: "We firmly believe in giving back to society. We directly support charity projects like Juegaterapia, allocating resources to transform hospital stays for children through the power of play." },
      { icon: Users, title: "Strong Technical & Legal Support", desc: "We combine fresh digital strategies with rigorous support from our team, which includes professionals in Law, Senior Architecture with over 30 years of experience, and Tourism degrees." },
      { icon: Compass, title: "No Last-Minute Surprises", desc: "We explain every step of the buying and selling process with absolute fiscal and contractual clarity. Mutual trust is our only non-negotiable asset. If something isn't right for you, we will tell you upfront." },
      { icon: LineChart, title: "Lifelong Relationships", desc: "Our relationship doesn't end on signing day at the notary. We remain available to help you settle into the municipality, resolve property-related questions, or advise you on future investment decisions." }
    ],
    ctaTitle: "Want to meet the professionals who uphold these values?",
    ctaDesc: "We invite you to view the backgrounds of Carmen, Luis, Elena, and Claudia in our detailed team section.",
    btnTeam: "View team profiles",
    finalTitle: "Let's go through the process with the ",
    finalTitleItalic: "peace of mind you deserve",
    finalDesc: "If you are looking for a partner of absolute trust in the Sierra to sell or buy your property with legal and commercial peace of mind, let's talk.",
    btnContact: "Contact us directly"
  }
};

export default function QuienesSomosPage() {
  const { idioma } = useIdioma();
  const t = textosAbout[idioma];
  
  const whatsappUrl = "https://wa.me/34616385515?text=%C2%A1Hola%21%20He%20estado%20leyendo%20vuestra%20filosof%C3%ADa%20en%20la%20web%20y%20me%20gustar%C3%ADa%20hablar%20con%20vosotros.";

  return (
    <main className="bg-white min-h-screen pt-28">
      <section className="py-20 lg:py-28 bg-gradient-to-b from-cream/40 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative z-10">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">{t.heroTag}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-forest leading-tight mb-8">
            {t.heroTitlePart1}<span className="italic font-semibold">{t.heroTitleItalic}</span>{t.heroTitlePart2}
          </h1>
          <p className="text-forest-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">{t.heroDesc}</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-0" />
      </section>

      <section className="py-12 border-y border-cream-dark bg-cream/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl md:text-5xl font-semibold text-forest mb-2">{stat.num}</p>
                <p className="text-xs text-forest-light tracking-wider uppercase font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-light text-forest">
              {t.whyDiff}<span className="italic font-semibold">{t.whyDiffItalic}</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.blocks.map((block, i) => (
              <div key={i} className="flex flex-col items-start bg-white p-2 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest mb-6">
                  <block.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-medium text-forest mb-3">{block.title}</h3>
                <p className="text-forest-light text-sm leading-relaxed text-justify">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/30 border-t border-cream-dark">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h3 className="font-display text-2xl md:text-3xl font-light text-forest mb-6">{t.ctaTitle}</h3>
          <p className="text-forest-light mb-8 max-w-xl mx-auto text-sm md:text-base">{t.ctaDesc}</p>
          <Link href="/#equipo">
            <Button variant="default" className="bg-forest text-white hover:bg-forest-light cursor-pointer">
              {t.btnTeam}
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-light text-forest mb-6">
            {t.finalTitle}<span className="italic font-semibold">{t.finalTitleItalic}</span>
          </h2>
          <p className="text-forest-light mb-8 font-light">{t.finalDesc}</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg" className="cursor-pointer">{t.btnContact}</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
