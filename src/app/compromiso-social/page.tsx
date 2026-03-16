"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompromisoSocialPage() {
  const papelFichas = [
    { title: 'Papel: Versión Color', file: '/papel_color.pdf', thumb: '/pre_papel_color.jpg', desc: 'Ficha educativa completa a todo color.' },
    { title: 'Papel: Para Colorear', file: '/papel_bn.pdf', thumb: '/pre_papel_bn.jpg', desc: 'Versión en blanco y negro para pintar.' },
    { title: 'Guía: Qué sí y qué no', file: '/papel_guia.pdf', thumb: '/pre_papel_guia.jpg', desc: 'Manual rápido de reciclaje de papel.' },
  ];

  const plasticoFichas = [
    { title: 'Plástico: Versión Color', file: '/plastico_color.pdf', thumb: '/pre_plastico_color.jpg', desc: 'Ficha educativa de envases a color.' },
    { title: 'Plástico: Para Colorear', file: '/plastico_bn.pdf', thumb: '/pre_plastico_bn.jpg', desc: 'Versión para colorear en casa o clase.' },
    { title: 'Guía: Qué sí y qué no', file: '/plastico_guia.pdf', thumb: '/pre_plastico_guia.jpg', desc: 'Manual rápido de reciclaje de plásticos.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Banner de Colaboración */}
        <section className="bg-gray-50 py-12 border-b border-gray-100 mb-16">
          <div className="container mx-auto px-4 flex justify-center">
            <img 
              src="/logo_colaboracion.png" 
              alt="Colaboración PYGI y Juegaterapia" 
              className="max-w-full h-auto md:h-64 drop-shadow-xl"
            />
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-[#147a2a] mb-6 tracking-tighter uppercase">
              Material Educativo Solidario
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
              "La quimio jugando se pasa volando" — Una iniciativa de <strong>Promoción y Gestión Inmobiliaria</strong> en apoyo a la Fundación Juegaterapia.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* COLUMNA PAPEL */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-10 border-b-4 border-[#147a2a] pb-4 uppercase">
                <span className="text-3xl">📄</span>
                <h2 className="text-2xl font-black text-[#147a2a]">Reciclaje de Papel</h2>
              </div>
              <div className="grid gap-8">
                {papelFichas.map((ficha, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                    <img src={ficha.thumb} alt="Preview" className="w-28 h-36 object-cover rounded-2xl shadow-md border border-gray-200 group-hover:scale-105 transition-transform" />
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{ficha.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{ficha.desc}</p>
                      <a href={ficha.file} download className="text-[#147a2a] font-extrabold text-sm hover:underline flex items-center gap-2 uppercase">
                        Descargar PDF <span>↓</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA PLÁSTICO */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-10 border-b-4 border-[#e67e22] pb-4 uppercase">
                <span className="text-3xl">♻️</span>
                <h2 className="text-2xl font-black text-[#e67e22]">Reciclaje de Plástico</h2>
              </div>
              <div className="grid gap-8">
                {plasticoFichas.map((ficha, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                    <img src={ficha.thumb} alt="Preview" className="w-28 h-36 object-cover rounded-2xl shadow-md border border-gray-200 group-hover:scale-105 transition-transform" />
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{ficha.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{ficha.desc}</p>
                      <a href={ficha.file} download className="text-[#e67e22] font-extrabold text-sm hover:underline flex items-center gap-2 uppercase">
                        Descargar PDF <span>↓</span>
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
