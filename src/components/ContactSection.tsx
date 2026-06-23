"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Download, Loader2 } from "lucide-react";
import { useIdioma } from "@/components/IdiomaContext";

const textos = {
  es: {
    tag: "Contacto",
    titulo: "Hablemos de tu ",
    tituloItalic: "proyecto",
    descripcion: "Estamos aquí para ayudarte en cada paso. Ya sea que quieras vender, comprar o conocer el mercado inmobiliario en Madrid y en toda España, estaremos encantadas de atenderte.",
    labelTel: "Teléfono",
    labelEmail: "Email",
    labelUbi: "Ubicación",
    leadMagnetTitle: "Guía Exclusiva Gratuita",
    leadMagnetDesc: "Cómo valorar tu casa con éxito en el mercado actual",
    leadMagnetBtn: "Descargar guía",
    formTitulo: "Envíanos un mensaje",
    formNombre: "Nombre",
    phNombre: "Tu nombre",
    formTel: "Teléfono",
    phTel: "Tu teléfono",
    formAyuda: "¿Cómo podemos ayudarte hoy?",
    phAyuda: "Cuéntanos sobre tu proyecto...",
    btnEnviar: "Enviar mensaje",
    btnEnviando: "Enviando...",
    politica: "Al enviar este formulario, aceptas nuestra política de privacidad.",
    alertExito: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
    alertError: "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
    alertConexion: "Error de conexión con el servidor."
  },
  en: {
    tag: "Contact",
    titulo: "Let's talk about your ",
    tituloItalic: "project",
    descripcion: "We are here to help you every step of the way. Whether you want to sell, buy, or learn about the real estate market in Madrid and throughout Spain, we will be happy to assist you.",
    labelTel: "Phone",
    labelEmail: "Email",
    labelUbi: "Location",
    leadMagnetTitle: "Free Exclusive Guide",
    leadMagnetDesc: "How to successfully value your home in the current market",
    leadMagnetBtn: "Download guide",
    formTitulo: "Send us a message",
    formNombre: "Name",
    phNombre: "Your name",
    formTel: "Phone",
    phTel: "Your phone number",
    formAyuda: "How can we help you today?",
    phAyuda: "Tell us about your project...",
    btnEnviar: "Send message",
    btnEnviando: "Sending...",
    politica: "By submitting this form, you accept our privacy policy.",
    alertExito: "Message sent successfully! We will get in touch with you soon.",
    alertError: "There was an error sending the message. Please try again.",
    alertConexion: "Connection error with the server."
  }
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { idioma } = useIdioma();

  const t = textos[idioma || "es"];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const datosFormulario = {
      nombre: formData.get("name"),
      telefono: formData.get("phone"),
      mensaje: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosFormulario),
      });

      const result = await response.json();

      if (result.success) {
        alert(t.alertExito);
        e.currentTarget.reset(); 
      } else {
        alert(t.alertError);
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      alert(t.alertConexion);
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
              {t.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest mb-6">
              {t.titulo}<span className="italic font-semibold">{t.tituloItalic}</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8" />

            <p className="text-forest-light leading-relaxed mb-10">
              {t.descripcion}
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
                  <p className="text-sm text-forest-light">{t.labelTel}</p>
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
                  <p className="text-sm text-forest-light">{t.labelEmail}</p>
                  <p className="font-medium">contacto@pygi.es</p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="flex items-start gap-4 text-forest group">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-forest-light mb-0.5">{t.labelUbi}</p>
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
                    {t.leadMagnetTitle}
                  </h4>
                  <p className="text-sm text-forest-light mb-4">
                    {t.leadMagnetDesc}
                  </p>
                  <Button variant="gold" size="sm">
                    {t.leadMagnetBtn}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-cream rounded-2xl p-8 lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-forest mb-6">
              {t.formTitulo}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                  {t.formNombre}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.phNombre}
                  className="bg-white border-cream-dark focus:border-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                  {t.formTel}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.phTel}
                  className="bg-white border-cream-dark focus:border-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                  {t.formAyuda}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.phAyuda}
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
                    {t.btnEnviando}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.btnEnviar}
                  </>
                )}
              </Button>

              <p className="text-xs text-forest-light text-center">
                {t.politica}
              </p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
