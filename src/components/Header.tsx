"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";

// Enlaces normales de navegación
const navLinks = [
  { href: "#vender", label: "Vender con Nosotros" },
  { href: "#equipo", label: "El equipo" },
  { href: "#contacto", label: "Contacto" },
];

// Subenlaces del nuevo desplegable de Acción Social
const socialSubLinks = [
  { href: "/compromiso-social", label: "Juegaterapia" },
  { href: "#cultura-flora", label: "Cultura de la flora" },
  { href: "#negocios-hoyo", label: "Negocios en Hoyo" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Estados para controlar la apertura de los desplegables
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappConsultaUrl = "https://wa.me/34616385515?text=%C2%A1Hola%21%20Estaba%20viendo%20vuestra%20p%C3%A1gina%20web%20y%20ten%C3%ADa%20una%20consulta.%20%C2%BFMe%20podr%C3%ADais%2520ayudar%3F%20Gracias.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          
          {/* Logo y Texto Principal - Alineación Desktop */}
          <Link href="/" className="flex items-center gap-4 group select-none">
            <div className="flex items-center h-16 mt-2 relative">
              <img 
                src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png" 
                alt="Logo P&G"
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="hidden sm:flex flex-col justify-center gap-0">
              <p className={`font-display text-xl font-bold leading-tight transition-colors duration-300 ${
                isScrolled ? "text-forest" : "text-white"
              }`}>
                Promocion y Gestion
              </p>
              <p className={`text-[12px] tracking-[0.25em] uppercase leading-tight transition-colors duration-300 ${
                isScrolled ? "text-forest-light" : "text-white/80"
              }`}>
                Inmobiliaria
              </p>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium ${isScrolled ? "text-forest" : "text-white"}`}>
                {link.label}
              </Link>
            ))}

            {/* 🌟 DESPLEGABLE DESKTOP: Acción Social */}
            <div className="relative group/dropdown py-2">
              <button className={`flex items-center gap-1 text-sm font-medium cursor-pointer transition-colors ${isScrolled ? "text-forest" : "text-white"}`}>
                Acción Social
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/dropdown:rotate-180" />
              </button>
              
              {/* Contenedor del menú flotante al pasar el ratón */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-300">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                  {socialSubLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2.5 text-sm font-medium text-forest hover:bg-cream hover:text-gold-dark transition-colors"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botones Derecha */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={whatsappConsultaUrl} target="_blank" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-forest" : "text-white"}`}>
              <Phone className="w-4 h-4" /> +34 616 385 515
            </a>
            <Button variant="gold">Quiero vender mi propiedad</Button>
          </div>

          {/* Menú Móvil */}
          <Sheet open={isOpen} onOpenChange={(open) => {
            setIsOpen(open);
            if (!open) setIsMobileSubOpen(false); // Resetea el acordeón al cerrar
          }}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-forest" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-white p-6 w-[300px] sm:w-[350px] overflow-y-auto">
              
              {/* Cabecera Corporativa Móvil */}
              <div className="flex flex-col items-center justify-center pt-6 pb-5 border-b border-forest/10 mb-6 text-center select-none">
                <img 
                  src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png" 
                  alt="Logo Promoción y Gestión" 
                  className="h-14 w-auto object-contain mb-2"
                />
                <h2 className="font-display text-base font-bold text-forest leading-tight">
                  Promoción y Gestión
                  <span className="block text-[11px] tracking-[0.2em] font-medium text-forest-light uppercase mt-0.5">
                    Inmobiliaria
                  </span>
                </h2>
              </div>

              {/* Enlaces de Navegación Móvil */}
              <div className="flex flex-col gap-5 pl-2">
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

                {/* 🌟 ACORDEÓN MÓVIL: Acción Social */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
                    className="flex items-center justify-between text-lg font-medium text-forest hover:text-gold transition-colors w-full text-left"
                  >
                    <span>Acción Social</span>
                    <ChevronDown className={`w-5 h-5 text-forest-light transition-transform duration-300 ${isMobileSubOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {/* Submenú Móvil */}
                  <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isMobileSubOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                    {socialSubLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-forest-light hover:text-gold transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Teléfono directo al final */}
              <div className="mt-8 pt-6 border-t border-forest/5 pl-2">
                <a 
                  href={whatsappConsultaUrl} 
                  target="_blank" 
                  className="flex items-center gap-2 text-sm font-medium text-forest-light"
                >
                  <Phone className="w-4 h-4 text-gold" /> +34 616 385 515
                </a>
              </div>

            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

export default Header;
