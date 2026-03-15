import React from 'react';
import Head from 'next/head';

const CompromisoSocial = () => {
  const fichas = [
    {
      id: 1,
      titulo: 'Ficha de Reciclaje: PAPEL',
      descripcion: 'Aprende a reciclar papel y cartón con los colores de Juegaterapia.',
      archivo: '/00_PAPEL a color.pdf', // Nombre exacto del archivo que subiste
      color: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      id: 2,
      titulo: 'Ficha de Reciclaje: PLÁSTICO',
      descripcion: 'Identifica los envases plásticos para cuidar nuestros océanos.',
      archivo: '/00_PLASTICO a color.pdf', // Nombre exacto del archivo que subiste
      color: 'bg-yellow-100',
      textColor: 'text-yellow-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Compromiso Social | PROMOCIÓN Y GESTIÓN INMOBILIARIA</title>
        <meta name="description" content="Colaboración de PYGI con la Fundación Juegaterapia para el reciclaje educativo." />
      </Head>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Compromiso Social</h1>
          <p className="text-xl opacity-90">
            En PROMOCIÓN Y GESTIÓN INMOBILIARIA, construimos hogares pensando en el futuro de los más pequeños.
          </p>
        </div>
      </section>

      {/* Sección Juegaterapia */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">PYGI + Juegaterapia</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nos hemos unido a la <strong>Fundación Juegaterapia</strong> para apoyar su misión: "La quimio jugando se pasa volando". 
              Queremos que el proceso de aprendizaje sobre el cuidado del planeta sea una vía de escape y diversión para los niños en tratamiento oncológico.
            </p>
            <div className="border-l-4 border-green-500 pl-4 italic text-gray-700">
              "Fomentar el reciclaje es cuidar el hogar de todos."
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-100 rounded-2xl p-8 flex justify-center">
            {/* Aquí puedes poner un logo o una imagen de la colaboración */}
            <span className="text-gray-400 font-semibold italic text-xl">Espacio para Logo Colaboración</span>
          </div>
        </div>

        {/* Rejilla de Descargas */}
        <div className="grid md:grid-cols-2 gap-8">
          {fichas.map((ficha) => (
            <div key={ficha.id} className={`${ficha.color} p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow`}>
              <h3 className={`text-2xl font-bold ${ficha.textColor} mb-2`}>{ficha.titulo}</h3>
              <p className="text-gray-700 mb-6">{ficha.descripcion}</p>
              <a 
                href={ficha.archivo} 
                download
                className="inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Descargar Ficha Gratuitamente
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Social */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <p className="text-gray-500 italic">
          Una iniciativa de <strong>PROMOCIÓN Y GESTIÓN INMOBILIARIA</strong> en beneficio de la salud infantil y el medio ambiente.
        </p>
      </section>
    </div>
  );
};

export default CompromisoSocial;
