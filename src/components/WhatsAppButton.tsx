"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Muestra el botón solo después de hacer scroll 300px hacia abajo
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Muestra el bocadillo de ayuda automáticamente a los 5 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  // 🌟 CONFIGURACIÓN ACTUALIZADA: Número de teléfono correcto y mensaje con ortografía impecable
  const phoneNumber = "34616385515"; 
  const message = "¡Hola! Me gustaría obtener más información sobre sus servicios inmobiliarios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Bocadillo Informativo (Tooltip) */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
          <div className="relative bg-white rounded-xl shadow-xl p-4 max-w-xs border border-cream-dark/30">
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest-dark transition-colors shadow-md"
            >
              <X className="w-3 h-3" />
            </button>
            {/* 🌟 ORTOGRAFÍA CORREGIDA: Signos abiertos y tildes añadidas */}
            <p className="text-sm text-forest leading-relaxed">
              <span className="font-semibold">¡Hola!</span> ¿Tienes alguna pregunta? 
              Estamos aquí para ayudarte.
            </p>
            {/* Flecha del bocadillo */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-cream-dark/10" />
          </div>
        </div>
      )}

      {/* Botón de WhatsApp con tu efecto hover original */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
      >
        {/* Icono */}
        <div className="w-14 h-14 flex items-center justify-center shrink-0">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:text-[#128C7E] transition-colors" />
        </div>

        {/* Texto expandible al pasar el cursor */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pr-0 group-hover:pr-6 font-medium text-sm">
          Escríbenos
        </span>
      </a>

      {/* Efecto de onda / pulso animado en el fondo */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
    </div>
  );
}
