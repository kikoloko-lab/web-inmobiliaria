"use client";

import React from 'react';

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
    <div className="bg-white min-h-screen font-sans">
      {/* Header Integrado para evitar errores de importación */}
      <nav className="bg-[#003366] text-white p-6 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter">PROMOCIÓN Y GESTIÓN INMOBILIARIA</span>
          <a href="/" className="bg-white text-[#003366] px-4 py-2 rounded-lg font-bold text-sm">VOLVER A INICIO</a>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-[#003366] mb-6">
              COMPROMISO SOCIAL
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cuidamos el hogar de todos. Junto a <strong>Juegaterapia</strong>, ayudamos a los pequeños guerreros a aprender reciclaje jugando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fichas.map((ficha, index) => (
              <div key={index} className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full"></div>
                  <span className="text-xs font-black tracking-[0.2em] text-blue-500 uppercase">
                    {ficha.type}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-8 uppercase leading-tight italic">
                    {ficha.title}
                  </h3>
                </div>
                <a 
                  href={ficha.file} 
                  download
                  className="inline-flex w-full items-center justify-center bg-[#003366] text-white py-5 rounded-2xl font-black hover:bg-green-600 transition-all shadow-xl active:scale-95"
                >
                  DESCARGAR PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-10 text-center text-gray-400 text-sm">
        <p>© 2026 PROMOCIÓN Y GESTIÓN INMOBILIARIA | Proyecto Solidario Juegaterapia</p>
      </footer>
    </div>
  );
}
