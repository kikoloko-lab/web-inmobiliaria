"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

// 🌟 El botón de "Inicio" se mantiene completamente eliminado del menú
const navLinks = [
  { href: "#vender", label: "Vender con Nosotros" },
  { href: "#equipo", label: "El equipo" },
  { href: "#contacto", label: "Contacto" },
  { href: "/compromiso-social", label: "Acción Social" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          
          {/* 🎯 LOGOTIPO ADAPTADO (Muestra solo el isotipo gráfico y limpia el fondo blanco) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Contenedor circular estético que protege la visualización del logo */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
                isScrolled ? "bg-transparent" : "bg-white/90 backdrop-blur-sm p-1 shadow-sm"
              }`}>
                {/* 'mixBlendMode: "multiply"' oculta el fondo blanco del JPG haciéndolo transparente por código.
                  'objectPosition: "top"' junto con 'scale-110' recorta las letras verdes de abajo para dejar solo el isotipo limpio.
                */}
                <img 
                  src="/logotipo inmobiliara promocion y gestion inmobiliaria.jpg" 
                  alt="Isotipo Promoción y Gestión Inmobiliaria"
                  className="w-full h-full object-cover object-top scale-110"
                  style={{ mixBlendMode: "multiply" }} 
                  onError={(e) => {
                    // Fallback de seguridad en caso de que en producción se alteren los espacios del archivo
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('logotipo-inmobiliaria.jpg')) {
                      target.src = "/logotipo-inmobiliaria.jpg";
                    }
                  }}
                />
              </div>
            </div>

            {/* Bloque de texto corporativo al lado del isotipo */}
            <div className="hidden sm:block">
              <p className={`font-display text-lg font-semibold leading-tight transition-colors duration-300 ${
                isScrolled ? "text-forest" : "text-white"
              }`}>
                Promocion y Gestion
              </p>
              <p className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? "text-forest-light" : "text-white/80"
              }`}>
                Inmobiliaria
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative group ${
                  isScrolled ? "text-forest" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+34616385515"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-forest" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+34 616 385 515</span>
            </a>
            
            <a 
              href="https://wa.me/34616385515?text=%C2%A1Hola%21%20Estoy%20interesado%20en%20vender%20mi%20propiedad%20y%20me%20gustar%C3%ADa%20recibir%20una%20valoraci%C3%B3n.%20%C2%BFPodr%C3%ADamos%20agendar%20una%20cita%20para%20hablar%20sobre%20mi%20inmueble%20en%20Hoyo%20de%20Manzanares%20o%20alrededores%3F%20Gracias."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="gold" size="default" className="cursor-pointer">
                Quiero vender mi propiedad
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-forest" : "text-white"}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-cream border-l-forest/20">
              <div className="flex flex-col h-full py-8">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-sm">
                    <img 
                      src="/logotipo inmobiliara promocion y gestion inmobiliaria.jpg" 
                      alt="Logo"
                      className="w-full h-full object-cover object-top scale-110"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-forest">
                      Promocion y Gestion
                    </p>
                    <p className="text-xs tracking-widest uppercase text-forest-light">
                      Inmobiliaria
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col gap-6 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-forest hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="pt-8 border-t border-forest/10">
                  <a
                    href="tel:+34616385515"
                    className="flex items-center gap-3 text-forest mb-6"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    <span className="font-medium">+34 616 385 515</span>
                  </a>

                  <a 
                    href="https://wa.me/34616385515?text=%C2%A1Hola%21%20Estoy%20interesado%20en%20vender%20mi%20propiedad%20y%20me%20gustar%C3%ADa%20recibir%20una%20valoraci%C3%B3n.%20%C2%BFPodr%C3%ADamos%20agendar%20una%20cita%20para%20hablar%20sobre%20mi%20inmueble%20en%20Hoyo%20de%20Manzanares%20o%20alrededores%3F%20Gracias."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button variant="gold" size="lg" className="w-full cursor-pointer">
                      Quiero vender mi propiedad
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

export default Header;
