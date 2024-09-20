
import { useState, useEffect, useRef } from 'react';
import Card from '../../assets/cards.png';
import Album from '../../assets/álbum.png';
import Quiz from '../../assets/card-pil.png';




function Games({ Cards, Albu, Quz }) {
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

          <div
            ref={sectionRef}
            className={`my-24 md:px-24 px-8 max-w-screen-2xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            id="Games"
        >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-preto88 font-bold font-quantico uppercase lg:w-1/2 mb-3">
                        Confira nossos {''} <span className="text-vermelho100">Games</span>
                    </h3>
                    <p className="text-base text-preto88 text-xl font-jost">
                        Acesse nossa plataforma e navegue por nossos games educativos e divirta-se com a gente!
                    </p>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2  items-start md:gap-12 gap-8">
                        {/** Card 1 */}
                        <div
                            onClick={() => handleCardClick(1)}
                            className={`bg-white rounded-[35px] shadow-3xl p-6 flex justify-center items-center hover:scale-105 transition-transform duration-300 relative cursor-pointer ${activeCard === 1 ? 'shadow-lg scale-105' : ''}`}
                        >
                            <div className="text-center">
                                <img src={Card} alt="Álbum de cards" className="w-full h-40 mx-auto object-contain" />
                                <h5 className="text-2xl font-semibold uppercase font-quantico px-5 text-center mt-5">
                                    Cards
                                </h5>
                                <p
                                    className={`text-sm text-gray-700 mt-3 font-jost transition-all duration-500 ${activeCard === 1 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
                                >
                                    Descubra um mundo de coleções incríveis com nosso álbum de cards!
                                </p>
                            </div>
                        </div>

                        {/** Card 2 */}
                        <div
                            onClick={() => handleCardClick(2)}
                            className={`bg-white rounded-[35px] sm:mt-4 shadow-3xl p-6 flex justify-center items-center hover:scale-105 transition-transform duration-300 relative cursor-pointer ${activeCard === 2 ? 'shadow-lg scale-105' : ''}`}
                        >
                            <div className="text-center">
                                <img src={Album} alt="Robótica" className="w-full h-40 mx-auto object-contain" />
                                <h5 className="text-2xl font-semibold uppercase font-quantico px-5 text-center ">
                                    Robótica
                                </h5>
                                <p
                                    className={`text-sm text-gray-700 mt-3 font-jost transition-all duration-500 ${activeCard === 2 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
                                >
                                    Explore os conceitos de robótica de forma divertida e interativa!
                                </p>
                            </div>
                        </div>

                        {/** Card 3 */}
                        <div
                            onClick={() => handleCardClick(3)}
                            className={`bg-white rounded-[35px] shadow-3xl p-6 flex justify-center items-center hover:scale-105 transition-transform duration-300 relative cursor-pointer ${activeCard === 3 ? 'shadow-lg scale-105' : ''}`}
                        >
                            <div className="text-center">
                                <img src={Quiz} alt="Quizzes" className="w-full h-40 mx-auto object-contain" />
                                <h5 className="text-2xl font-semibold uppercase font-quantico px-5 text-center mt-5">
                                    Quizzes
                                </h5>
                                <p
                                    className={`text-sm text-gray-700 mt-3 font-jost ransition-all duration-500 ${activeCard === 3 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
                                >
                                    Teste seus conhecimentos com nossos quizzes interativos e divertidos!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Games;
