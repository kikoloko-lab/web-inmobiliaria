"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#propiedades", label: "Propiedades" },
  { href: "#vender", label: "Vender" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/privacidad", label: "Política de Privacidad" },
  { href: "/cookies", label: "Política de Cookies" },
  { href: "/legal", label: "Aviso Legal" },
];

function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-gold">P&G</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Promoción y Gestión</p>
                <p className="text-xs tracking-widest uppercase text-white/60">Inmobiliaria</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Especialistas en Hoyo de Manzanares y alrededores.
              Profesionalidad, cercanía y éxito.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
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
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Navegación
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
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
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+34616385515"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold" />
                +34 616 385 515
              </a>
              {/* 🌟 CORREO ACTUALIZADO */}
              <a
                href="mailto:info@pyghoyo.com"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold" />
                info@pyghoyo.com
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Hoyo de Manzanares<br />28240 Madrid</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Horario
            </h4>
            {/* 🌟 NUEVOS HORARIOS CONFIGURADOS */}
            <div className="space-y-2 text-sm text-white/70">
              <p>Lunes - Viernes</p>
              <p className="text-white">10:00 - 14:00 y 17:00 - 20:00</p>
              <p className="mt-4">Sábados</p>
              <p className="text-white">10:00 - 14:00</p>
              <p className="mt-4 text-gold italic">Disponibles por teléfono fuera de horario</p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 Promoción y Gestión Inmobiliaria. Todos los derechos reservados.
          </p>
          <nav className="flex items-center gap-6">
            {legalLinks.map((link) => (
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
