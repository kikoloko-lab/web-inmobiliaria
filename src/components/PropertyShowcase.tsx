"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize, BedDouble, Eye } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Villa La Pedriza",
    location: "Hoyo de Manzanares",
    price: "1.250.000",
    image: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/9b80f6ea-83ef-423a-bc2f-9b1aaa46c9eb/natural-light-BigHorn-Palm-Desert-luxury-modern-home-living-room-interior-design.jpeg",
    sqm: 450,
    bedrooms: 5,
    highlight: "Vistas a la Pedriza",
    exclusive: true,
  },
  {
    id: 2,
    title: "Casa del Monte",
    location: "Hoyo de Manzanares",
    price: "875.000",
    image: "https://www.jlambertcustomhomes.com/wp-content/uploads/2023/05/open-concept.jpeg",
    sqm: 320,
    bedrooms: 4,
    highlight: "Jardin privado 2.000m2",
    exclusive: true,
  },
  {
    id: 3,
    title: "Chalet Sierra Norte",
    location: "Hoyo de Manzanares",
    price: "695.000",
    image: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/16f0bedc-0fcf-42c4-a29a-0afce1d93b9b/71-Benedict-Canyon-Beverly-Hills-Luxury-Home-Bright-Modern-Glass-Walled-Guest-Bedroom.jpg",
    sqm: 280,
    bedrooms: 4,
    highlight: "Piscina climatizada",
    exclusive: false,
  },
];

export function PropertyShowcase() {
  return (
    <section id="propiedades" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Propiedades Seleccionadas
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-forest">
              Hogares <span className="italic font-semibold">exclusivos</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start lg:self-auto">
            Ver todas las propiedades
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property) => (
            <article
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Exclusive Badge */}
                {property.exclusive && (
                  <Badge className="absolute top-4 left-4 bg-gold text-forest-dark border-0 font-medium">
                    Exclusiva P&G
                  </Badge>
                )}

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Eye className="w-4 h-4" />
                    Ver detalles
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-forest-light mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>{property.location}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-forest mb-3 group-hover:text-gold-dark transition-colors">
                  {property.title}
                </h3>

                {/* Highlight */}
                <p className="text-sm text-forest-light italic mb-4">
                  {property.highlight}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-forest-light mb-4 pb-4 border-b border-cream-dark">
                  <div className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4" />
                    <span>{property.sqm} m2</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4" />
                    <span>{property.bedrooms} hab.</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-forest-light uppercase tracking-wide">Precio</span>
                    <p className="font-display text-2xl font-semibold text-forest">
                      {property.price} EUR
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark">
                    Consultar
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
