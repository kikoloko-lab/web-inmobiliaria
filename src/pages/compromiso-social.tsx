import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CompromisoSocial = () => {
  const fichas = [
    { title: 'Papel: A Color', file: '/00_PAPEL a color.pdf', type: 'Color' },
    { title: 'Plástico: A Color', file: '/00_PLASTICO a color.pdf', type: 'Color' },
    { title: 'Papel: Para Colorear', file: '/01_PAPEL__NO__color.pdf', type: 'B/N' },
    { title: 'Plástico: Para Colorear', file: '/01_PLASTICO__NO__color.pdf', type: 'B/N' },
    { title: 'Guía Papel: ¿Qué sí y qué no?', file: '/02_PAPEL__NOcolor_que_SÍ_que_NO.pdf', type: 'Educativo' },
    { title: 'Guía Plástico: ¿Qué sí y qué no?', file: '/02_PLASTICO__NOcolor_que_SÍ_que_NO.pdf', type: 'Educativo' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Encabezado Principal */}
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Nuestro Compromiso Social
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En <strong>PROMOCIÓN Y GESTIÓN INMOBILIARIA</strong>, creemos que cuidar el planeta es la mejor herencia para nuestros hijos. 
            Colaboramos con la <strong>Fundación Juegaterapia</strong> para hacer del reciclaje una aventura.
          </p>
        </section>

        {/* Tarjetas de Fichas */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fichas.map((ficha, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-4">
                    {ficha.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 h-14 leading-tight">
                    {ficha.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-medium">
                    Formato PDF Preparado
                  </p>
                  <a 
                    href={ficha.file} 
                    download
                    className="flex items-center justify-center w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors gap-2"
                  >
                    <span>Descargar Ficha</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="current" />
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cierre Solidario */}
        <section className="container mx-auto px-4 mt-20 text-center border-t pt-12">
          <p className="text-gray-400 italic">
            "Porque la quimio jugando se pasa volando" - Colaboración con Juegaterapia.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompromisoSocial;

export default CompromisoSocial;
