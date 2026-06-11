"use client";

import { useState } from "react";
import { X, Download, CheckCircle } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // ⏳ Simulación de 1 segundo para procesar la suscripción del correo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 🚀 EVENTO DE DESCARGA: Fuerza al navegador a descargar el archivo PDF
    const link = document.createElement("a");
    link.href = "/guia_valoracion_2026.pdf"; 
    link.download = "Guia_Valoracion_Inmobiliaria_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsLoading(false);
    setIsSubmitted(true);

    // Cierra el modal automáticamente a los 3 segundos del éxito
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      {/* Tarjeta contenedora con el redondeado extremo de la imagen */}
      <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] p-8 text-center shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* X para cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* Círculo dorado claro con icono de descarga */}
            <div className="w-16 h-16 bg-[#fbf4e9] rounded-full flex items-center justify-center mb-5">
              <Download className="w-6 h-6 text-[#d7b56d]" />
            </div>

            {/* Encabezados */}
            <h3 className="font-display text-2xl font-bold text-[#1c3c2e] leading-tight mb-2">
              Guia Exclusiva Gratuita
            </h3>
            <p className="text-sm text-[#1c3c2e]/70 leading-relaxed mb-6 max-w-[250px]">
              Descarga nuestra guia: Como valorar tu casa en Hoyo de Manzanares en 2026
            </p>

            {/* Input de Email */}
            <div className="w-full mb-4">
              <input
                type="email"
                required
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200/80 rounded-xl text-center text-sm text-[#1c3c2e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d7b56d]/50 focus:bg-white transition-all"
              />
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#d7b56d] hover:bg-[#c9a75d] disabled:bg-gray-300 text-[#1c3c2e] font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm cursor-pointer border-none"
            >
              {isLoading ? "Preparando descarga..." : "Descargar guia gratuita"}
            </button>

            {/* Leyenda de privacidad */}
            <p className="text-[11px] text-gray-400 mt-4">
              Respetamos tu privacidad. Sin spam.
            </p>
          </form>
        ) : (
          /* Estado de éxito post-envío */
          <div className="py-6 flex flex-col items-center animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-display text-xl font-bold text-[#1c3c2e] mb-2">
              ¡Guía Descargada!
            </h4>
            <p className="text-xs text-gray-500 max-w-[220px]">
              Tu descarga ha comenzado con éxito.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
