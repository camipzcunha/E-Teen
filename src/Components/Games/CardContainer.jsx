
import { Children } from "react";

export default function CardContainer(titulo, children) {
    return(
        <>
        <div
                            onClick={() => handleCardClick(1)}
                            className={`bg-white/80 rounded-[35px] shadow-3xl p-6 flex justify-center items-center hover:scale-105 transition-transform duration-300 relative cursor-pointer ${activeCard === 1 ? 'shadow-lg scale-105' : ''}`}
                        >
                            <div className="text-center">
                                <img src={Card} alt="Álbum de cards" className="w-full h-40 mx-auto object-contain" />
                                <h5 className="text-2xl font-semibold uppercase font-quantico px-5 text-center mt-5">
                                    {titulo}
                                </h5>
                                <p
                                    className={`text-sm text-gray-700 mt-3 font-jost transition-all duration-500 ${activeCard === 1 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
                                >
                                   {children}
                                </p>
                            </div>
                        </div>
        </>
    )
}