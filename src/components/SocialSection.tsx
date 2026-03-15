import React from 'react';

const SocialSection = () => {
  const fichas = [
    { title: 'Papel y Cartón', file: '/00_PAPEL a color.pdf', color: 'border-blue-500' },
    { title: 'Plásticos y Envases', file: '/00_PLASTICO a color.pdf', color: 'border-yellow-500' },
  ];

  return (
    <section id="social" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestro Compromiso Social</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          En colaboración con la <strong>Fundación Juegaterapia</strong>, ayudamos a que la estancia de los niños en hospitales sea más amena a través del aprendizaje y el reciclaje.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {fichas.map((ficha, index) => (
            <div key={index} className={`p-6 border-2 ${ficha.color} rounded-2xl bg-gray-50 hover:shadow-lg transition`}>
              <h3 className="text-xl font-semibold mb-4">{ficha.title}</h3>
              <p className="text-sm text-gray-500 mb-6">Descarga esta ficha educativa para los más pequeños.</p>
              <a 
                href={ficha.file} 
                download 
                className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-black transition"
              >
                Descargar PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
