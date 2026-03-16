"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompromisoSocialPage() {
  // Datos actualizados con los nuevos nombres de archivos en /public
  const papelFichas = [
    { 
      title: 'Papel: Versión Color', 
      file: '/papel_color.pdf', 
      thumb: '/pre_papel_color.jpg', 
      desc: 'Ficha educativa completa con los colores de Juegaterapia.' 
    },
    { 
      title: 'Papel: Para Colorear', 
      file: '/papel_bn.pdf', 
      thumb: '/pre_papel_bn.jpg', 
      desc: 'Versión en blanco y negro ideal para pintar en casa.' 
    },
    { 
      title: 'Guía: Qué sí y qué no', 
      file: '/papel_guia.pdf', 
      thumb: '/pre_papel_guia.jpg', 
      desc: 'Manual rápido para identificar residuos de papel y cartón.' 
    },
  ];

  const plasticoFichas = [
    { 
      title: 'Plástico: Versión Color', 
      file: '/plastico_color.pdf', 
      thumb: '/pre_plastico_color.jpg', 
      desc: 'Ficha didáctica para aprender sobre el contenedor amarillo.' 
    },
    { 
      title: 'Plástico: Para Colorear', 
      file: '/plastico_bn.pdf', 
      thumb: '/pre_plastico_bn.jpg', 
      desc: 'Divertida ficha para colorear mientras aprenden a reciclar.' 
    },
    { 
      title: 'Guía: Qué sí y qué no', 
      file: '/plastico_guia.pdf', 
      thumb: '/pre_plastico_guia.jpg', 
      desc: 'Aprende qué envases van realmente al cubo de plástico.' 
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#147a2a] selection:text-white">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Banner de Colaboración con fondo suave */}
        <section className="bg-[#f8fafc] py-12 border-b border-gray-100 mb-16 shadow-inner">
          <div className="container mx-auto px-4 flex justify-center">
            <img 
              src="/logo_colaboracion.png" 
              alt="Alianza PYGI y Juegaterapia" 
              className="max-w-full h-auto md:h-64 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8">
          {/* Título y Manifiesto Corporativo */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-[#147a2a] mb-6 tracking-tighter uppercase italic">
              Compromiso Social PYGI
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              En <span className="text-gray-800 font-bold">Promoción y Gestión Inmobiliaria</span> creemos que cuidar el entorno es cuidar nuestro hogar. 
              Junto a <span className="text-[#147a2a] font-bold">Juegaterapia</span>, convertimos el aprendizaje en un juego para los más pequeños.
            </p>
          </div>

          {/* Columnas Paralelas: Papel vs Plástico */}
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
            
            {/* COLUMNA PAPEL (Verde Corporativo) */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-10 border-b-4 border-[#147a2a] pb-4">
                <div className="bg-[#147a2a] text-white p-3 rounded-2xl shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h2 className="text-3xl font-black text-[#147a2a] uppercase tracking-tight">Reciclaje Papel</h2>
              </div>

              <div className="grid gap-8">
                {papelFichas.map((ficha, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                    <div className="w-28 h-40 bg-white rounded-2xl flex-shrink-0 overflow-hidden shadow-md border border-gray-200 group-hover:rotate-2 transition-transform">
                      <img src={ficha.thumb} alt="Vista previa" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-between py-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{ficha.title}</h3>
                        <p className="text-sm text-gray-400 leading-tight">{ficha.desc}</p>
                      </div>
                      <a 
                        href={ficha.file} 
                        download 
                        className="inline-flex items-center text-[#147a2a] font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform"
                      >
                        Descargar PDF <span className="ml-2">↓</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA PLÁSTICO (Naranja Contenedor) */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-10 border-b-4 border-[#e67e22]
