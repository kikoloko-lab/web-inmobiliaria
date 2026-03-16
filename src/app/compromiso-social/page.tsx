"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompromisoSocialPage() {
  const papelFichas = [
    { title: 'Papel: Versión Color', file: '/00_PAPEL a color.pdf', thumb: '/04_pre-papel-color.jpg', desc: 'Ficha educativa completa a todo color.' },
    { title: 'Papel: Para Colorear', file: '/01_PAPEL__NO__color.pdf', thumb: '/04_pre-papel-No_color.jpg', desc: 'Versión en blanco y negro para pintar.' },
    { title: 'Guía: Qué sí y qué no', file: '/02_PAPEL__NOcolor_que_SÍ_que_NO.pdf', thumb: '/04_pre_PAPEL__NOcolor_que_SÍ_que_NO.pdf.jpg', desc: 'Manual rápido de reciclaje de papel.' },
  ];

  const plasticoFichas = [
    { title: 'Plástico: Versión Color', file: '/00_PLASTICO a color.pdf', thumb: '/04_pre-PLASTICO-color.jpg', desc: 'Ficha educativa de envases a color.' },
    { title: 'Plástico: Para Colorear', file: '/01_PLASTICO__NO__color.pdf', thumb: '/04_pre-PLASTICO-No_color.jpg', desc: 'Versión para colorear en casa o clase.' },
    { title: 'Guía: Qué sí y qué no', file: '/02_PLASTICO__NOcolor_que_SÍ_que_NO.pdf', thumb: '/04_pre_PLASTICO__NOcolor_que_SÍ_que_NO.pdf.jpg', desc: 'Manual rápido de reciclaje de plásticos.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Banner de Colaboración */}
        <section className="bg-gray-50 py-10 border-b border-gray-100 mb-16">
          <div className="container mx-auto px-4 flex justify-center">
            <img 
              src="/logo-colaboracion.png.png" 
              alt="Colaboración PYGI y Juegaterapia" 
              className="max-w-full h-auto md:h-56 drop-shadow-md"
            />
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#147a2a] mb-4">
              MATERIAL EDUCATIVO SOLIDARIO
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
              "La quimio jugando se pasa volando" — Colaboramos con la Fundación Juegaterapia.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* COLUMNA PAPEL */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#147a2a] mb-8 border-b-2 border-[#147a2a] pb-2 uppercase tracking-tighter">
                Reciclaje de Papel
              </h2>
              <div className="grid gap-6">
                {papelFichas.map((ficha, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group">
                    <img src={ficha.thumb} alt="Preview" className="w-24 h-32 object-cover rounded-xl border border-gray-200 shadow-sm" />
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-gray-800">{ficha.title}</h3>
                      <p className="text-xs text-gray-500 mb-3">{ficha.desc}</p>
                      <a href={ficha.file} download className="text-[#147a2a] font-bold text-sm hover:underline">
                        DESCARGAR PDF →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA PLÁSTICO */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#d35400] mb-8 border-b-2 border-[#d35400] pb-2 uppercase tracking-tighter">
                Reciclaje de Plástico
              </h2>
              <div className="grid gap-6">
                {plasticoFichas.map((ficha, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group">
                    <img src={ficha.thumb} alt="Preview" className="w-24 h-32 object-cover rounded-xl border border-gray-200 shadow-sm" />
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-gray-800">{ficha.title}</h3>
                      <p className="text-xs text-gray-500 mb-3">{ficha.desc}</p>
                      <a href={ficha.file} download className="text-[#d35400] font-bold text-sm hover:underline">
                        DESCARGAR PDF →
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
