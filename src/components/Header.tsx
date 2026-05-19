"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

// El botón de "Inicio" se mantiene completamente eliminado del menú
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

  // Enlace a WhatsApp optimizado para el botón de teléfono superior derecho
  const whatsappConsultaUrl = "https://wa.me/34616385515?text=%C2%A1Hola%21%20Estaba%20viendo%20vuestra%20p%C3%A1gina%20web%20y%20ten%C3%ADa%20una%20consulta.%20%C2%BFMe%20podr%C3%ADais%20ayudar%3F%20Gracias.";

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
          
          {/* 🎯 LOGOTIPO RECTANGULAR NATURAL (Sin círculos que lo corten) */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative flex items-center">
              {/* Contenedor rectangular adaptado a la forma del logo de la montaña y la torre */}
              <div className="h-12 w-auto max-w-[120px] flex items-center justify-start overflow-hidden">
                {/* 'object-cover' y 'object-top' junto con 'scale-[1.2]' permiten encuadrar el isotipo, 
                  haciendo foco en la silueta superior y recortando limpiamente las letras verdes inferiores.
                */}
                <img 
                  src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png" 
                  alt="Isotipo Promoción y Gestión Inmobiliaria"
                  className="h-full w-full object-cover object-top scale-[1.2] origin-top transition-transform duration-300 group-hover:scale-[1.25]"
                />
              </div>
            </div>

            {/* Texto corporativo premium alineado al lado de tu isotipo */}
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
            {/* 📞 Botón del teléfono conectado directamente a WhatsApp con el mensaje personalizado */}
            <a
              href={whatsappConsultaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-gold ${
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
                  {/* Logotipo en versión móvil optimizado también en formato libre rectangular */}
                  <div className="h-10 w-auto max-w-[80px] flex items-center overflow-hidden">
                    <img 
                      src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png" 
                      alt="Logo"
                      className="h-full w-full object-cover object-top scale-[1.2] origin-top"
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
                  {/* WhatsApp integrado en móvil */}
                  <a
                    href={whatsappConsultaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-forest mb-6 hover:text-gold transition-colors"
                    onClick={() => setIsOpen(false)}
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
