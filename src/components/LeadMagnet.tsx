"use client";

import { useState, useEffect } from "react";
import { Download, Loader2, X, Check } from "lucide-react";

export function LeadMagnet() {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Mantener la aparición elegante original
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  // Función que conecta con nuestro "cartero" /api/download
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setEmail("");
        // Después de 4 segundos en éxito, cerramos la barra y vuelve al botón normal
        setTimeout(() => {
          setShowForm(false);
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
        alert("Hubo un problema al procesar el envío de la guía. Inténtalo de nuevo.");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error al solicitar la guía:", error);
      setStatus("error");
      alert("Error de conexión al solicitar la guía.");
      setStatus("idle");
    }
  };

  // ESTADO 1: Mensaje de éxito animado tras enviar el correo
  if (showForm && status === "success") {
    return (
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-emerald-600 text-white rounded-full shadow-xl p-3 px-5 animate-fade-in select-none">
        <Check className="w-4 h-4 text-white shrink-0" />
        <span className="font-medium text-sm">
          ¡Guía enviada! Revisa tu correo 🎁
        </span>
      </div>
    );
  }

  // ESTADO 2: Formulario expandido pidiendo el email (Cápsula dorada)
  if (showForm) {
    return (
      <form
        onSubmit={handleEmailSubmit}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-gold text-forest-dark rounded-full shadow-xl transition-all duration-300 p-1.5 pl-4 max-w-[calc(100vw-2rem)] sm:max-w-md select-none border border-gold-dark/20"
      >
        <input
          type="email"
          required
          placeholder="Introduce tu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="bg-transparent text-forest-dark placeholder:text-forest-dark/60 text-sm font-medium outline-none border-none w-40 sm:w-60 py-1 focus:ring-0"
        />
        
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full px-4 py-2 transition-colors shrink-0 flex items-center justify-center gap-1 disabled:opacity-70 h-9 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <span>Pedir guía</span>
          )}
        </button>

        <button
          type="button"
          onClick={() => {
            setShowForm(false);
            setStatus("idle");
          }}
          disabled={status === "loading"}
          className="text-forest-dark/60 hover:text-forest-dark p-2 rounded-full shrink-0 transition-colors cursor-pointer"
          title="Cancelar"
        >
          <X className="w-4 h-4" />
        </button>
      </form>
    );
  }

  // ESTADO 3: Botón flotante clásico inicial (Diseño original idéntico)
  return (
    <button
      onClick={() => setShowForm(true)}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-gold hover:bg-gold-dark text-forest-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-5 py-3 group select-none cursor-pointer border border-transparent"
    >
      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
      
      {/* Texto para PC */}
      <span className="font-medium text-sm hidden sm:inline">
        Guia: Valorar tu casa 2026
      </span>
      
      {/* Texto para Móvil */}
      <span className="font-medium text-sm sm:hidden">
        Guia Gratis
      </span>
    </button>
  );
}