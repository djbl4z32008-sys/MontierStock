import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import CapCard from '@/components/CapCard.jsx';

const HomePage = () => {
  const caps = [
    {
      id: 1,
      name: "Cap Clásica Negra",
      description: "Gorra clásica de algodón 100%, ajustable",
      price: 45000,
      image: "https://images.unsplash.com/photo-1702604587239-0621e3e8c489"
    },
    {
      id: 2,
      name: "Cap Deportiva Azul",
      description: "Gorra deportiva con tecnología transpirable",
      price: 55000,
      image: "https://images.unsplash.com/photo-1702604588196-253fbc68e195"
    },
    {
      id: 3,
      name: "Cap Vintage Roja",
      description: "Estilo vintage con bordado frontal",
      price: 50000,
      image: "https://images.unsplash.com/photo-1552060181-06626a7b4188"
    },
    {
      id: 4,
      name: "Cap Snapback Gris",
      description: "Snapback ajustable con cierre de metal",
      price: 48000,
      image: "https://images.unsplash.com/photo-1702604587220-a2c4ccafbef5"
    },
    {
      id: 5,
      name: "Cap Premium Blanca",
      description: "Gorra premium de alta calidad con logo bordado",
      price: 65000,
      image: "https://images.unsplash.com/photo-1702605054047-5014e8b7ac81"
    },
    {
      id: 6,
      name: "Cap Casual Verde",
      description: "Gorra casual perfecta para el día a día",
      price: 42000,
      image: "https://images.unsplash.com/photo-1569520045266-66f21ad8a4be"
    },
    {
      id: 7,
      name: "Cap Deportiva Naranja",
      description: "Gorra deportiva con visera reflejante",
      price: 52000,
      image: "https://images.unsplash.com/photo-1538207117707-db9ec7fcb6d3"
    },
    {
      id: 8,
      name: "Cap Elegante Marrón",
      description: "Gorra elegante en tono marrón con detalles premium",
      price: 60000,
      image: "https://images.unsplash.com/photo-1697467037052-5bfd0eafe271"
    }
  ];

  return (
    <>
      <Helmet>
        <title>MONTIER caps - Estilo y calidad premium</title>
        <meta name="description" content="Descubre nuestra colección de gorras premium. Encuentra el estilo perfecto para ti con la mejor calidad y diseño." />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1702604587239-0621e3e8c489"
              alt="Colección de gorras premium"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Descubre tu estilo perfecto
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Colección exclusiva de gorras premium con diseños únicos y calidad excepcional
              </p>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg"
              >
                Ver colección
              </a>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="productos" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Nuestra colección
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explora nuestra selección de gorras diseñadas para complementar tu estilo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {caps.map((cap, index) => (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CapCard cap={cap} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                ¿Tienes preguntas?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contáctanos por WhatsApp y te ayudaremos a encontrar la gorra perfecta para ti
              </p>
              <a
                href="https://wa.me/573173450261"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle className="h-5 w-5" />
                Chatear en WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

const MessageCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export default HomePage;
