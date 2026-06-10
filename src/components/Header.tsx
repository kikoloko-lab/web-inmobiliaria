"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/#vender", label: "Vender con Nosotros" },
  { href: "/quienes-somos", label: "Quiénes somos" },
];

const socialSubLinks = [
  { href: "/compromiso-social", label: "Juegaterapia" },
  { href: "/#cultura-flora", label: "Cultura de la flora" },
  { href: "/#negocios-hoyo", label: "Negocios en Hoyo" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeaderActive = !isHome || isScrolled;
  const whatsappConsultaUrl = "https://wa.me/34616385515?text=%C2%A1Hola%21";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHeaderActive
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          
          {/* Logo y Nombre Adaptado a Móviles */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4 group select-none">
            <div className="flex items-center h-12 sm:h-16 mt-1 sm:mt-2 relative">
              <img 
                src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png" 
                alt="Logo P&G"
                className="h-full w-auto object-contain"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <p className={`font-display text-sm sm:text-xl font-bold leading-tight transition-colors duration-300 ${
                isHeaderActive ? "text-forest" : "text-white"
              }`}>
                Promoción y Gestión
              </p>
              <p className={`text-[9px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] uppercase leading-tight transition-colors duration-300 ${
                isHeaderActive ? "text-forest-light" : "text-white/80"
              }`}>
                Inmobiliaria
              </p>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-gold ${isHeaderActive ? "text-forest" : "text-white"}`}>
                {link.label}
              </Link>
            ))}

            <div className="relative group/dropdown py-2">
              <button className={`flex items-center gap-1 text-sm font-medium cursor-pointer transition-colors hover:text-gold ${isHeaderActive ? "text-forest" : "text-white"}`}>
                Acción Social
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/dropdown:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-300">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  {socialSubLinks.map((subLink) => (
                    <Link key={subLink.href} href={subLink.href} className="block px-4 py-2.5 text-sm font-medium text-forest hover:bg-cream hover:text-gold-dark">
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botones Desktop Derecha */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={whatsappConsultaUrl} target="_blank" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold ${isHeaderActive ? "text-forest" : "text-white"}`}>
              <Phone className="w-4 h-4 text-gold" /> +34 616 385 515
            </a>
            <Link href="/#vender">
              <Button variant="gold" className="cursor-pointer">Quiero vender mi propiedad</Button>
            </Link>
          </div>

          {/* Menú Móvil */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isHeaderActive ? "text-forest" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6 w-[300px]">
              
              {/* 🌟 AQUÍ ESTÁ EL CAMBIO: Añadida la línea de 'Inmobiliaria' al logo del menú móvil */}
              <div className="flex flex-col items-center pt-6 pb-5 border-b mb-6 select-none">
                <img src="/logotipo_inmobiliara_promocion_y_gestion_inmobiliaria-removebg-preview.png" alt="Logo" className="h-14 w-auto mb-2"/>
                <h2 className="font-display text-base font-bold text-forest leading-none">Promoción y Gestión</h2>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium mt-1">Inmobiliaria</p>
              </div>
              
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-forest">
                    {link.label}
                  </Link>
                ))}

                {/* Sección de Acción Social Desplegable para Móvil */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
                    className="flex items-center justify-between text-lg font-medium text-forest w-full text-left py-1 cursor-pointer"
                  >
                    <span>Acción Social</span>
                    <ChevronDown className={`w-5 h-5 text-forest/60 transition-transform duration-300 ${isMobileSubOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {/* Subenlaces del desplegable móvil */}
                  <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${
                    isMobileSubOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}>
                    {socialSubLinks.map((subLink) => (
                      <Link 
                        key={subLink.href} 
                        href={subLink.href} 
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileSubOpen(false);
                        }} 
                        className="text-base font-medium text-forest-light hover:text-gold transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
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
