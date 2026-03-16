"use client"; 

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompromisoSocialPage() {
  const fichas = [
    { title: 'Papel: A Color', file: '/00_PAPEL a color.pdf', type: 'Color' },
    { title: 'Plástico: A Color', file: '/00_PLASTICO a color.pdf', type: 'Color' },
    { title: 'Papel: Para Colorear', file: '/01_PAPEL__NO__color.pdf', type: 'B/N' },
    { title: 'Plástico: Para Colorear', file: '/01_PLASTICO__NO__color.pdf', type: 'B/N' },
    { title: 'Guía Papel: ¿Qué sí y qué no?', file: '/02_PAPEL__NOcolor_que_SÍ_que_NO.pdf', type: 'Educativo' },
    { title: 'Guía Plástico: ¿Qué sí y qué no?', file: '/02_PLASTICO__NOcolor_que_SÍ_que_NO.pdf', type: 'Educativo' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#003366] mb-6 uppercase">
              Compromiso Social
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En <strong>PROMOCIÓN Y GESTIÓN INMOBILIARIA</strong>, nuestra labor va más allá de los inmuebles. 
              Junto a <strong>Juegaterapia</strong>, impulsamos el reciclaje creativo para los más pequeños.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fichas.map((ficha, index) => (
              <div key={index} className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <span className="text-xs font-black tracking-widest text-blue-500 uppercase">
                    {ficha.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-6 uppercase leading-tight">
                    {ficha.title}
                  </h3>
                </div>
                <a 
                  href={ficha.file} 
                  download
                  className="inline-flex w-full items-center justify-center bg-[#003366] text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg active:scale-95"
                >
                  DESCARGAR PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
