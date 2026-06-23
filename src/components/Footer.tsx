"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Languages } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useIdioma } from "@/components/IdiomaContext";

const textos = {
  es: {
    nombreEmpresa: "Promoción y Gestión",
    subtituloEmpresa: "Inmobiliaria",
    descripcion: "Somos arquitectos y abogados con más de 30 años de experiencia. Resolvemos directamente cualquier trámite técnico y legal: herencias, catastro, registro y financiación.",
    seccionNavegacion: "Navegación",
    seccionContacto: "Contacto",
    seccionHorario: "Horario",
    labelUbicacion: "Paseo Mayor 15",
    labelCiudad: "28240 Hoyo de Manzanares, Madrid",
    diasLaborables: "Lunes - Viernes",
    sabados: "Sábados",
    fueraHorario: "Disponibles por teléfono fuera de horario",
    derechos: "© 2026 Promoción y Gestión Inmobiliaria. Todos los derechos reservados.",
    navLinks: [
      { href: "#inicio", label: "Inicio" },
      { href: "#propiedades", label: "Propiedades" },
      { href: "#vender", label: "Vender" },
      { href: "#equipo", label: "Equipo" },
      { href: "#contacto", label: "Contacto" },
    ],
    legalLinks: [
      { href: "/privacidad", label: "Política de Privacidad" },
      { href: "/cookies", label: "Política de Cookies" },
      { href: "/legal", label: "Aviso Legal" },
    ]
  },
  en: {
    nombreEmpresa: "Promoción y Gestión",
    subtituloEmpresa: "Real Estate",
    descripcion: "We are architects and lawyers with more than 30 years of experience. We directly resolve any technical and legal procedures: inheritances, land registry, property registration, and financing.",
    seccionNavegacion: "Navigation",
    seccionContacto: "Contact",
    seccionHorario: "Hours",
    labelUbicacion: "Paseo Mayor 15",
    labelCiudad: "28240 Hoyo de Manzanares, Madrid",
    diasLaborables: "Monday - Friday",
    sabados: "Saturdays",
    fueraHorario: "Available by phone outside office hours",
    derechos: "© 2026 Promoción y Gestión Inmobiliaria. All rights reserved.",
    navLinks: [
      { href: "#inicio", label: "Home" },
      { href: "#propiedades", label: "Properties" },
      { href: "#vender", label: "Sell" },
      { href: "#equipo", label: "Team" },
      { href: "#contacto", label: "Contact" },
    ],
    legalLinks: [
      { href: "/privacidad", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookies Policy" },
      { href: "/legal", label: "Legal Notice" },
    ]
  }
};

function Footer() {
  const { idioma } = useIdioma();
  const t = textos[idioma || "es"];

  return (
    <footer className="bg-forest text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              {/* Contenedor del Logo PNG Transparente */}
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png"
                  alt="Logo Promoción y Gestión"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              {/* Texto corporativo al lado estilo Header */}
              <div>
                <p className="font-display text-lg font-semibold leading-tight text-white">
                  {t.nombreEmpresa}
                </p>
                <p className="text-xs tracking-widest uppercase text-gold mt-1">
                  {t.subtituloEmpresa}
                </p>
              </div>
            </div>

            {/* TEXTO INFORMATIVO */}
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t.descripcion}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Image src="" className="hidden" alt="" /> {/* Elemento auxiliar decorativo si fuese necesario */}
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            
            {/* IDIOMAS DE LA FICHA */}
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Languages className="w-3.5 h-3.5 text-gold" />
              <span>Español · English · Français · Italiano</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              {t.seccionNavegacion}
            </h4>
            <nav className="space-y-3">
              {t.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              {t.seccionContacto}
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+34616385515"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold" />
                +34 616 385 515
              </a>
              <a
                href="mailto:contacto@pygi.es"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold" />
                contacto@pygi.es
              </a>
              {/* DIRECCIÓN POSTAL */}
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{t.labelUbicacion}<br />{t.labelCiudad}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              {t.seccionHorario}
            </h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>{t.diasLaborables}</p>
              <p className="text-white">10:00 - 14:00 y 17:00 - 20:00</p>
              <p className="mt-4">{t.sabados}</p>
              <p className="text-white">10:00 - 14:00</p>
              <p className="mt-4 text-gold italic">{t.fueraHorario}</p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            {t.derechos}
          </p>
          <nav className="flex items-center gap-6">
            {t.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
