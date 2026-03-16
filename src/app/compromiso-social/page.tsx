"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompromisoSocialPage() {
  // Datos exactos basados en tu carpeta /public
  const papelFichas = [
    { 
      title: 'Papel: Versión Color', 
      file: '/00_PAPEL a color.pdf', 
      thumb: '/04_pre-papel-color.jpg', 
      desc: 'Ficha educativa completa a todo color.' 
    },
    { 
      title: 'Papel: Para Colorear', 
      file: '/01_PAPEL__NO__color.pdf', 
      thumb: '/04_pre-papel-No_color.jpg', 
      desc: 'Versión en blanco y negro para pintar.' 
    },
    { 
      title: 'Guía: Qué sí y qué no', 
      file: '/02_PAPEL__NOcolor_que_SÍ_que_NO.pdf', 
      thumb: '/04_pre_PAPEL__NOcolor_que_SÍ_que_NO.pdf.jpg', 
      desc: 'Manual rápido de reciclaje de papel.' 
    },
  ];

  const plasticoFichas = [
    { 
      title: 'Plástico: Versión Color', 
      file: '/00_PLASTICO a color.pdf', 
      thumb: '/04_pre-PLASTICO-color.jpg', 
      desc: 'Ficha educativa de envases a color.' 
    },
    { 
      title: 'Plástico: Para Colorear', 
      file: '/01_PLASTICO__NO__color.pdf', 
      thumb: '/04_pre-PLASTICO-No_color.jpg', 
      desc: 'Versión para colorear en casa o clase.' 
    },
    { 
      title: 'Guía: Qué sí y qué no', 
      file: '/02_PLASTICO__NOcolor_que_SÍ_que_NO.pdf', 
      thumb: '/04_pre_PLASTICO__NOcolor_que_SÍ_que_NO.pdf.jpg', 
      desc: 'Manual rápido de reciclaje de plásticos.' 
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      
      <main className="pt-28 pb-20">
        {/* Banner de Colaboración */}
        <section className="bg-gray-50 py-12 border-b border-gray-100 mb-16">
          <div className="container mx-auto px-4 flex justify-center">
            <img 
              src="/logo-colaboracion.png.png" 
              alt="Colaboración PYGI y Juegaterapia" 
              className="max-w-full h-auto md:h-56 drop-shadow-md"
            />
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-[#147a2a] mb-6">
              MATERIAL EDUCATIVO SOLIDARIO
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descarga nuestras fichas de reciclaje. Una iniciativa de <strong>Promoción y Gestión Inmobiliaria</strong> para que los niños aprendan a cuidar el planeta mientras apoyamos la labor de <strong>Juegaterapia</strong>.
            </p>
          </div>

          {/* Columnas Paralelas */}
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
            
            {/* COLUMNA PAPEL */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-10 border-b-4 border-[#147a2a] pb-4">
                <div className="bg-[#147a2a] text-white p-3 rounded-xl shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h2 className="text-3xl font-black text-[#147a2a] tracking-tight uppercase">Papel y Cartón</h2>
              </div>

              <div className="grid gap-6">
                {papelFichas.map((ficha, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group">
                    <div className="w-full sm:w-32 h-44 bg-white rounded-xl flex-shrink-0 overflow-hidden shadow-inner border border-gray-200">
                      <img src={ficha.thumb} alt="Vista previa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{ficha.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{ficha.desc}</p>
                      </div>
                      <a 
                        href={ficha.file} 
                        download 
                        className="mt-4 inline-flex items-center text-[#147a2a] font-black text-sm uppercase tracking-wider hover:translate-x-2 transition-transform"
                      >
                        Descargar PDF <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA PLÁSTICO */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-10 border-b-4 border-[#e67e22] pb-4">
                <div className="bg-[#e67e22] text-white p-3 rounded-xl shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </div>
                <h2 className="text-3xl font-black text-[#e67e22] tracking-tight uppercase">Plásticos</h2>
              </div>

              <div className="grid gap-6">
                {plasticoFichas.map((ficha, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group">
                    <div className="w-full sm:w-32 h-44 bg-white rounded-xl flex-shrink-0 overflow-hidden shadow-inner border border-gray-200">
                      <img src={ficha.thumb} alt="Vista previa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{ficha.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{ficha.desc}</p>
                      </div>
                      <a 
                        href={ficha.file} 
                        download 
                        className="mt-4 inline-flex items-center text-[#e67e22] font-black text-sm uppercase tracking-wider hover:translate-x-2 transition-transform"
                      >
                        Descargar PDF <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
