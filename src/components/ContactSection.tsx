"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Download, Loader2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Recogemos los datos del formulario de forma automática
    const formData = new FormData(e.currentTarget);
    const datosFormulario = {
      nombre: formData.get("name"),
      telefono: formData.get("phone"),
      mensaje: formData.get("message"),
    };

    try {
      // Hacemos la petición a nuestra API interna
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosFormulario),
      });

      const result = await response.json();

      if (result.success) {
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        e.currentTarget.reset(); // Limpia el formulario automáticamente
      } else {
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      alert("Error de conexión con el servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div>
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Contacto
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
              Hablemos de tu <span className="italic font-semibold">proyecto</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8" />

            {/* 🌟 TEXTO ACTUALIZADO: ENFOQUE MADRID Y ESPAÑA */}
            <p className="text-forest-light leading-relaxed mb-10">
              Estamos aquí para ayudarte en cada paso. Ya sea que quieras vender,
              comprar o conocer el mercado inmobiliario en <span className="font-medium text-gold-dark">Madrid y en toda España</span>, 
              estaremos encantadas de atenderte.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {/* Teléfono */}
              <a
                href="tel:+34616385515"
                className="flex items-center gap-4 text-forest hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-forest-light">Teléfono</p>
                  <p className="font-medium">+34 616 385 515</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contacto@pygi.es"
                className="flex items-center gap-4 text-forest hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-forest-light">Email</p>
                  <p className="font-medium">contacto@pygi.es</p>
                </div>
              </a>

              {/* Ubicación (Oficinas Físicas locales se mantienen) */}
              <div className="flex items-start gap-4 text-forest group">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-forest-light mb-0.5">Ubicación</p>
                  <div className="font-medium space-y-0.5 text-base">
                    <p>Paseo Mayor 15, Local 3</p>
                    <p>Plaza de la Iglesia 7, Local 3 y 4</p>
                    <p className="text-sm font-normal text-forest-light">Hoyo de Manzanares, Madrid</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Magnet */}
            <div className="p-6 bg-cream rounded-xl border border-gold/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-forest mb-2">
                    Guía Exclusiva Gratuita
                  </h4>
                  {/* 🌟 TÍTULO DE GUÍA ACTUALIZADO */}
                  <p className="text-sm text-forest-light mb-4">
                    Cómo valorar tu casa con éxito en el mercado actual
                  </p>
                  <Button variant="gold" size="sm">
                    Descargar guía
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-cream rounded-2xl p-8 lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-forest mb-6">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-white border-cream-dark focus:border-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Tu teléfono"
                  className="bg-white border-cream-dark focus:border-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                  ¿Cómo podemos ayudarte hoy?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-white border-cream-dark focus:border-gold min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full gap-2 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </>
                )}
              </Button>

              <p className="text-xs text-forest-light text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
