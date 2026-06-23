"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown, Globe } from "lucide-react";

// 🌟 Un único objeto con los textos de este componente
const textos = {
  es: {
    vender: "Vender con Nosotros",
    quienes: "Quiénes somos",
    accion: "Acción Social",
    juega: "Juegaterapia",
    flora: "Cultura de la flora",
    negocios: "Negocios en Hoyo",
    cta: "Quiero vender mi propiedad",
  },
  en: {
    vender: "Sell with Us",
    quienes: "About Us",
    accion: "Social Action",
    juega: "Juegaterapia",
    flora: "Flora Culture",
    negocios: "Local Businesses",
    cta: "I want to sell my property",
  }
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  
  // 🌟 Estado para controlar el idioma activo ('es' o 'en')
  const [idioma, setIdioma] = useState<"es" | "en">("es");
  
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌟 Recuperamos el idioma que guardó el usuario en su anterior visita (si existe)
  useEffect(() => {
    const idiomaGuardado = localStorage.getItem("web-idioma") as "es" | "en";
    if (idiomaGuardado) {
      setIdioma(idiomaGuardado);
    }
  }, []);

  // 🌟 Función para cambiar de idioma de forma segura
  const cambiarIdioma = (nuevoIdioma: "es" | "en") => {
    setIdioma(nuevoIdioma);
    localStorage.setItem("web-idioma", nuevoIdioma);
    // Esto avisa al resto de la página (por si en el futuro traduces otras secciones)
    window.dispatchEvent(new Event("cambio-idioma"));
  };

  const isHeaderActive = !isHome || isScrolled;
  const whatsappConsultaUrl = "https://wa.me/34616385515?text=%C2%A1Hola%21";

  // 🌟 Atajo para no escribir tanto en el código JSX
  const t = textos[idioma];

  const navLinks = [
    { href: "/#vender", label: t.vender },
    { href: "/quienes-somos", label: t.quienes },
  ];

  const socialSubLinks = [
    { href: "/compromiso-social", label: t.juega },
    { href: "/#cultura-flora", label: t.flora },
    { href: "/#negocios-hoyo", label: t.negocios },
  ];

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
                {t.accion}
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
            
            {/* 🌟 SELECTOR DE IDIOMA SEGURO (ES / EN) */}
            <div className="flex items-center gap-1 mr-2 text-xs font-semibold select-none">
              <button 
                onClick={() => cambiarIdioma("es")} 
                className={`cursor-pointer px-1.5 py-0.5 rounded transition-colors ${idioma === "es" ? "text-gold font-bold" : (isHeaderActive ? "text-forest/60 hover:text-forest" : "text-white/60 hover:text-white")}`}
              >
                ES
              </button>
              <span className={isHeaderActive ? "text-forest/30" : "text-white/30"}>|</span>
              <button 
                onClick={() => cambiarIdioma("en")} 
                className={`cursor-pointer px-1.5 py-0.5 rounded transition-colors ${idioma === "en" ? "text-gold font-bold" : (isHeaderActive ? "text-forest/60 hover:text-forest" : "text-white/60 hover:text-white")}`}
              >
                EN
              </button>
            </div>

            <a href={whatsappConsultaUrl} target="_blank" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold ${isHeaderActive ? "text-forest" : "text-white"}`}>
              <Phone className="w-4 h-4 text-gold" /> +34 616 385 515
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDMotf6BxNoKg3koHJWufazwnmlL7pAIVDfYUuzvyGR3Nhuw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" className="cursor-pointer">{t.cta}</Button>
            </a>
          </div>

          {/* Menú Móvil */}
          <div className="flex items-center gap-3 lg:hidden">
            
            {/* 🌟 SELECTOR DE IDIOMA EN MÓVIL */}
            <div className="flex items-center gap-1 text-xs font-bold mr-1 select-none">
              <button 
                onClick={() => cambiarIdioma("es")} 
                className={`px-1 py-0.5 ${idioma === "es" ? "text-gold" : (isHeaderActive ? "text-forest/60" : "text-white/60")}`}
              >
                ES
              </button>
              <span className={isHeaderActive ? "text-forest/20" : "text-white/20"}>/</span>
              <button 
                onClick={() => cambiarIdioma("en")} 
                className={`px-1 py-0.5 ${idioma === "en" ? "text-gold" : (isHeaderActive ? "text-forest/60" : "text-white/60")}`}
              >
                EN
              </button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isHeaderActive ? "text-forest" : "text-white"}>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white p-6 w-[300px]">
                
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
                      <span>{t.accion}</span>
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
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
