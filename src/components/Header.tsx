"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

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

  const whatsappConsultaUrl = "https://wa.me/34616385515?text=%C2%A1Hola%21%20Estaba%20viendo%20vuestra%20p%C3%A1gina%20web%20y%20ten%C3%ADa%20una%20consulta.%20%C2%BFMe%20podr%C3%ADais%20ayudar%3F%20Gracias.";

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
          
         {/* Logo y Texto Principal - Alineación Fina */}
<Link href="/" className="flex items-center gap-4 group select-none">
  {/* Ajuste preciso: h-16 mantiene el tamaño grande, mt-2 baja el logo para centrarlo visualmente entre las líneas rojas */}
  <div className="flex items-center h-16 mt-2 relative">
    <img 
      src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png" 
      alt="Logo P&G"
      className="h-full w-auto object-contain"
    />
  </div>

  {/* Bloque de texto - Mantenemos la estructura para referencia */}
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
          </div>

          {/* Botones Derecha */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={whatsappConsultaUrl} target="_blank" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-forest" : "text-white"}`}>
              <Phone className="w-4 h-4" /> +34 616 385 515
            </a>
            <Button variant="gold">Quiero vender mi propiedad</Button>
          </div>

          {/* Menú Móvil */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-forest" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-forest">
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

export default Header;
