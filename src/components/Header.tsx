"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-cream-dark shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO PRINCIPAL */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo-colaboracion.png" // O el path exacto de tu logo corporativo
            alt="Promoción y Gestión Inmobiliaria" 
            className="h-10 w-auto object-contain fallback-logo"
            onError={(e) => {
              // Fallback por si acaso
              const target = e.target as HTMLImageElement;
              target.src = "/image.png"; 
            }}
          />
          <div className="flex flex-col">
            <span className="font-display font-semibold text-forest text-sm tracking-wider uppercase">
              Promoción y Gestión
            </span>
            <span className="text-[10px] text-gold tracking-[0.15em] uppercase font-medium">
              Inmobiliaria
            </span>
          </div>
        </Link>

        {/* 💻 NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest">
          <Link href="/vender" className="hover:text-gold transition-colors">
            Vender con Nosotros
          </Link>
          <Link href="/#equipo" className="hover:text-gold transition-colors">
            Quiénes somos
          </Link>
          {/* Enlace a Acción Social */}
          <Link href="/compromiso-social" className="text-gold font-semibold hover:text-gold-dark transition-colors flex items-center gap-1">
            Acción Social
          </Link>
        </nav>

        {/* BOTÓN DE ACCIÓN / TELÉFONO DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+34616385515" className="flex items-center gap-2 text-sm text-forest hover:text-gold transition-colors font-medium">
            <Phone className="w-4 h-4 text-gold" />
            +34 616 385 515
          </a>
          <Link href="/vender">
            <Button variant="gold" size="sm" className="text-xs font-semibold">
              Quiero vender mi propiedad
            </Button>
          </Link>
        </div>

        {/* 📱 BOTÓN HAMBURGUESA (MÓVIL) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-forest hover:text-gold transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>

      {/* 📱 MENÚ DESPLEGABLE MÓVIL (Mismo diseño exacto de tu captura image_c4bb7d.png) */}
      <div className={`fixed inset-y-0 right-0 w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        
        {/* Botón de cierre en la esquina superior derecha */}
        <button 
          onClick={toggleMenu}
          className="absolute top-5 right-4 p-2 text-forest/60 hover:text-forest transition-colors"
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Contenido del menú lateral */}
        <div className="flex flex-col pt-12 px-6 h-full">
          
          {/* Encabezado con Logo (Calco del original) */}
          <div className="flex flex-col items-center text-center mt-4 mb-6">
            <img 
              src="/image.png" 
              alt="Logo Promoción y Gestión" 
              className="h-12 w-auto object-contain mb-3" 
            />
            <h3 className="font-display font-semibold text-forest text-base tracking-wide">
              Promoción y Gestión
            </h3>
          </div>

          {/* Línea Divisoria Fina */}
          <div className="w-full h-px bg-forest/10 mb-8" />

          {/* Links de Navegación Verticales */}
          <nav className="flex flex-col gap-6 text-[17px] font-medium text-forest/90">
            <Link 
              href="/vender" 
              onClick={toggleMenu}
              className="hover:text-gold transition-colors py-1"
            >
              Vender con Nosotros
            </Link>
            
            <Link 
              href="/#equipo" 
              onClick={toggleMenu}
              className="hover:text-gold transition-colors py-1"
            >
              Quiénes somos
            </Link>

            {/* 🌟 AQUÍ ESTÁ EL CAMBIO ESENCIAL: Añadido Acción Social */}
            <Link 
              href="/compromiso-social" 
              onClick={toggleMenu}
              className="text-gold font-semibold hover:text-gold-dark transition-colors py-1 flex items-center justify-between"
            >
              <span>Acción Social</span>
              <span className="w-2 h-2 rounded-full bg-gold inline-block animate-pulse" />
            </Link>
          </nav>

          {/* Bloque Inferior con Contacto Rápido */}
          <div className="mt-auto mb-10 pt-6 border-t border-forest/5 space-y-4">
            <a href="tel:+34616385515" className="flex items-center gap-3 text-sm text-forest/80 font-medium">
              <Phone className="w-4 h-4 text-gold" />
              +34 616 385 515
            </a>
            <Link href="/vender" onClick={toggleMenu} className="block w-full">
              <Button variant="gold" size="sm" className="w-full text-xs font-semibold py-5">
                Quiero vender mi propiedad
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* Fondo oscurecido de respaldo al abrir el menú móvil */}
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
        />
      )}
    </header>
  );
}
