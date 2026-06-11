"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";

export function LeadMagnet() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ⏳ Mantenemos el temporizador original de 8 segundos para que aparezca 
    // de forma elegante después de que el usuario vea el inicio.
    // (Si prefieres que salga al instante, puedes cambiar el 8000 por 0).
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Si aún no se ha cumplido el tiempo, no renderiza nada
  if (!isVisible) return null;

  return (
    /* 
      🌟 CAMBIO CLUCIAL: Transformamos el <button> en un <a> nativo manteniendo 
      tus clases exactas. Ahora descarga directamente tanto en móvil como en PC.
    */
    <a
      href="/guia_valoracion_2026.pdf"
      download="Guia_Valoracion_Inmobiliaria_2026.pdf"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-gold hover:bg-gold-dark text-forest-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-5 py-3 group no-underline select-none"
    >
      <Download className="w-5 h-5" />
      
      {/* Texto para PC */}
      <span className="font-medium text-sm hidden sm:inline">
        Guia: Valorar tu casa 2026
      </span>
      
      {/* Texto para Móvil */}
      <span className="font-medium text-sm sm:hidden">
        Guia Gratis
      </span>
    </a>
  );
}
