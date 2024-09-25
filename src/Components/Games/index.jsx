import { useState, useEffect, useRef } from 'react';
import Card from '../../assets/cards.png';
import Album from '../../assets/álbum.png';
import Quiz from '../../assets/card-pil.png';

function Games() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null); // Controla o card ativo
  const sectionRef = useRef(null); // Referência da seção

  const handleCardClick = (cardIndex) => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex); // Alterna entre mostrar/ocultar o texto
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Desconecta o observador após a seção aparecer
          }
        });
      },
      { threshold: 0.1 } // Define quando 10% da seção está visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative isolate bg-black px-6 pt-14 lg:px-8" id="Games" ref={sectionRef}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a82b2be1] to-[#28f272] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Texto em cima */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 py-20">
        <div className="lg:w-full text-center mb-12"> {/* Centralizar o texto */}
          <h3 className="text-3xl text-white font-bold font-quantico uppercase mb-3">
            Confira nossos {''} <span className="text-red-700">Games</span>
          </h3>
          <p className="text-base text-white font-jost">
            Acesse nossa plataforma e navegue por nossos games educativos e divirta-se com a gente! Clique nos cards para saber mais.
          </p>
        </div>
      </div>

      {/* Grid dos cards */}
      <div className="w-full">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 items-start md:gap-12 gap-8">
          {/** Card 1 */}
          <div
            onClick={() => handleCardClick(1)}
            className={`bg-transparent shadow-3xl p-6 flex justify-center items-center hover:scale-105 transition-transform duration-300 relative cursor-pointer ${activeCard === 1 ? 'shadow-lg scale-105' : ''}`}
          >
            <div className="text-center">
              <img src={Card} alt="Álbum de cards" className="w-full h-40 mx-auto object-contain" />
              <h5 className="text-2xl font-semibold uppercase font-quantico px-5 text-center mt-5 text-white">
                Cards
              </h5>
              <p
                className={`text-sm text-gray-400 mt-3 font-jost transition-all duration-500 ${activeCard === 1 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
              >
                Descubra um mundo de coleções                 incríveis com nosso álbum de cards!
              </p>
            </div>
          </div>

          {/** Card 2 */}
          <div
            onClick={() => handleCardClick(2)}
            className={`bg-transparent rounded-[35px] shadow-3xl p-6 flex justify-center items-center hover:scale-105 transition-transform duration-300 relative cursor-pointer ${activeCard === 2 ? 'shadow-lg scale-105' : ''}`}
          >
            <div className="text-center">
              <img src={Album} alt="Guia" className="w-full h-40 mx-auto object-contain" />
              <h5 className="text-2xl font-semibold uppercase font-quantico px-5 text-white text-center mt-5 ">
                Guia do esporte e Apostilas
              </h5>
              <p
                className={`text-sm text-gray-400 mt-3 font-jost transition-all duration-500 ${activeCard === 2 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
              >
                Aprenda mais sobre esportes e baixe nossas apostilas gratuitamente! 
              </p>
            </div>
          </div>

          {/** Card 3 */}
          <div
            onClick={() => handleCardClick(3)}
            className={`bg-transparent rounded-[35px] shadow-3xl p-6 flex justify-center items-center hover:scale-105 transition-transform duration-300 relative cursor-pointer ${activeCard === 3 ? 'shadow-lg scale-105' : ''}`}
          >
            <div className="text-center">
              <img src={Quiz} alt="Quizzes" className="w-full h-40 mx-auto object-contain" />
              <h5 className="text-2xl text-white font-semibold uppercase font-quantico px-5 text-center mt-5">
                Quizzes
              </h5>
              <p
                className={`text-sm text-gray-400 mt-3 font-jost transition-all duration-500 ${activeCard === 3 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
              >
                Teste seus conhecimentos com nossos quizzes interativos e divertidos!
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Games;

