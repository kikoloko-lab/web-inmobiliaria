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
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 uppercase tracking-tight">
            Nuestro Compromiso Social
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En <strong>PROMOCIÓN Y GESTIÓN INMOBILIARIA</strong>, colaboramos con la <strong>Fundación Juegaterapia</strong> para que el reciclaje sea una aventura para los pequeños guerreros.
          </p>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {fichas.map((ficha, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="p-1 bg-gradient-to-r from-blue-700 to-green-500"></div>
                <div className="p-8 flex-grow">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-4 uppercase">
                    {ficha.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 h-12">
                    {ficha.title}
                  </h3>
                  <a 
                    href={ficha.file} 
                    download
                    className="inline-flex items-center justify-center w-full bg-blue-900 text-white py-3 px-6 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-md"
                  >
                    Descargar PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center opacity-50">
           <p className="italic text-gray-600">"La quimio jugando se pasa volando"</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompromisoSocial;
