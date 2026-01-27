"use client";

import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LeadMagnet() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", email);
    setIsOpen(false);
    setIsVisible(false);
  };

  if (!isVisible && !isOpen) return null;

  return (
    <>
      {/* Floating Button */}
      {!isOpen && isVisible && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-gold hover:bg-gold-dark text-forest-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-5 py-3 group"
        >
          <Download className="w-5 h-5" />
          <span className="font-medium text-sm hidden sm:inline">
            Guia: Valorar tu casa 2026
          </span>
          <span className="font-medium text-sm sm:hidden">
            Guia Gratis
          </span>
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-forest-dark/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream hover:bg-cream-dark flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-forest" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-gold-dark" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-forest mb-2">
                Guia Exclusiva Gratuita
              </h3>
              <p className="text-forest-light text-sm">
                Descarga nuestra guia: Como valorar tu casa en Hoyo de Manzanares en 2026
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-cream border-cream-dark focus:border-gold"
                required
              />
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Descargar guia gratuita
              </Button>
            </form>

            <p className="text-xs text-forest-light text-center mt-4">
              Respetamos tu privacidad. Sin spam.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
