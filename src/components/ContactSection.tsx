"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Download } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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

            <p className="text-forest-light leading-relaxed mb-10">
              Estamos aqui para ayudarte en cada paso. Ya sea que quieras vender,
              comprar o simplemente conocer el mercado de Hoyo de Manzanares,
              estaremos encantadas de atenderte.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <a
                href="tel:+34600000000"
                className="flex items-center gap-4 text-forest hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-forest-light">Telefono</p>
                  <p className="font-medium">+34 600 000 000</p>
                </div>
              </a>

              <a
                href="mailto:info@pyghoyo.com"
                className="flex items-center gap-4 text-forest hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-forest-light">Email</p>
                  <p className="font-medium">info@pyghoyo.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-forest">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-forest-light">Ubicacion</p>
                  <p className="font-medium">Hoyo de Manzanares, Madrid</p>
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
                    Guia Exclusiva Gratuita
                  </h4>
                  <p className="text-sm text-forest-light mb-4">
                    Como valorar tu casa en Hoyo de Manzanares en 2026
                  </p>
                  <Button variant="gold" size="sm">
                    Descargar guia
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-cream rounded-2xl p-8 lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-forest mb-6">
              Envianos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-cream-dark focus:border-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                  Telefono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Tu telefono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border-cream-dark focus:border-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                  Como podemos ayudarte hoy?
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuentanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-cream-dark focus:border-gold min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Enviar mensaje
              </Button>

              <p className="text-xs text-forest-light text-center">
                Al enviar este formulario, aceptas nuestra politica de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
