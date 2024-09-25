
import { useState } from 'react';
import './style.css';
import Figurinha from '../../Components/Figurinha/Figurinha';
import HeaderLogin from '../../Components/HeaderLogin'
import Footer from '../../Components/Footer';
import f05 from './Imagens/mahindra/f05.png'
import f06 from './Imagens/mahindra/f06.png'
import f09 from './Imagens/abt/f09.png'
import f10 from './Imagens/abt/f10.png'
import f13 from './Imagens/nissan/f13.png'
import f14 from './Imagens/nissan/f14.png'

export default function Album(){
    // Definindo variáveis
    const equipes = [
        {nome: 'MAHINDRA RACING', color: '#DF2727'},
        {nome: 'ABT SUPRA', color: '#194997'}
    ];

    const [figurinhas, setFigurinhas] = useState([
        { id: 5, nome: 'Figurinha 5', imgFigurinha: f05 },
        { id: 6, nome: 'Figurinha 6', imgFigurinha: f06 },
        { id: 9, nome: 'Figurinha 9', imgFigurinha: f09 },
        { id: 10, nome: 'Figurinha 10', imgFigurinha: f10 },
        { id: 13, nome: 'Figurinha 13', imgFigurinha: f13 },
        { id: 14, nome: 'Figurinha 14', imgFigurinha: f14 },
    ]);

    const [album,setAlbum] = useState({
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
    });

    const soltar = (indice) => (evento) => {
        evento.preventDefault();
        const figurinhaId = evento.dataTransfer.getData('figurinhaId');
        const figurinha = figurinhas.find((f) => f.id === parseInt(figurinhaId));
        
        // Verifica se a figurinha corresponde à posição correta
        if (figurinha && figurinha.id === indice && !album[indice]) 
        {
            setAlbum((prev) => ({ ...prev, [indice]: figurinha }));
            setFigurinhas(figurinhas.filter((f) => f.id !== figurinha.id));
        } 
        else    
        {
            alert('Figurinha errada! Coloque-a no lugar certo.');
        }
    };
     

    const arrastarSobre = (evento) => {
        evento.preventDefault();
    }


    return(
        <>
            <HeaderLogin/>

            {/* Container */}
            <div className="flex justify-center w-[100vw] h-[60vh] mt-3 md:mt-8 md:ml-4 lg:h-[90vh] lg:w-[100vw]">
                <div className="flex justify-center gap-0.5 md:w-[70vw] md:h-[60vh] lg:w-[65vw] lg:h-[85vh] lg:gap-1.5">
                    <div className="bg-white border-[#d6d5d5] rounded-lg w-[60vw] h-[60vh] border-[6px] md:w-6/12 md:border-[5px] lg:w-6/12 lg:h-[85vh] lg:border-8 ">
                        <h2 className="text-center font-bold text-[18px] mt-3 md:text-[20px] md:mt-[9px] lg:text-[30px] lg:mt-3" style={{color: equipes[0].color}}>{equipes[0].nome}</h2>
                        <div className="grid grid-rows-3 grid-col-2 place-items-center h-[85%] w-[90%] mt-1 mx-[3%] gap-x-2 md:mt-1 md:w-[85%] md:mx-[7.5%] lg:w-[90%] lg:mx-[4%] lg:mt-4">
                            
                            <div className="posicao5 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            w-[70px] h-[90%] text-[3vh] border-[5px]
                                            md:w-[12vh] md:h-[16vh] 
                                            lg:w-[10vw] lg:h-[26vh] lg:text-lg lg:border-8  " onDrop={soltar(5)} onDragOver={arrastarSobre}>
                                
                                {album[5] ? <img className="w-full h-full" src={album[5].imgFigurinha} alt={album[5].nome} /> : '05'}
                            </div>

                            <div className="posicao6 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            w-[70px] h-[90%] text-[3vh] border-[5px]
                                            md:w-[12vh] md:h-[16vh] 
                                            lg:w-[10vw] lg:h-[26vh] lg:text-lg lg:border-8 " onDrop={soltar(6)} onDragOver={arrastarSobre}>
                                {album[6] ? <img className="w-full h-full" src={album[6].imgFigurinha} alt={album[6].nome} /> : '06'}
                            </div>
                            
                            <div className="posicao7 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            w-[70px] h-[13vh] text-[3vh] border-[5px] mt-1
                                            md:w-[12vh] md:h-[12vh] md:mt-2
                                            lg:w-[10vw] lg:h-[20vh] lg:mt-5 lg:text-lg lg:border-8" onDrop={soltar(7)} onDragOver={arrastarSobre}>
                                {album[7] ? <img className="w-full h-full" src={album[7].imgFigurinha} alt={album[7].nome} /> : '07'}
                            </div>

                            <div className="posicao8 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            h-[70px] text-[3vh] border-[5px]
                                            md:h-[14vh]
                                            lg:h-[20vh] lg:text-lg lg:border-8" onDrop={soltar(8)} onDragOver={arrastarSobre}>
                                {album[8] ? <img className="w-full h-full" src={album[8].imgFigurinha} alt={album[8].nome} /> : '08'}
                            </div>
                        </div>
                    </div>

                    <div className="hidden bg-white border-[#d6d5d5] rounded-lg w-[60vw] border-[6px] sm:block md:w-6/12 lg:block lg:w-6/12 lg:border-8 ">

                        <h2 className="text-center font-bold text-[15px] mt-3 md:text-[20px] md:mt-[9px] lg:text-[30px] lg:mt-3" style={{color: equipes[1].color}}>{equipes[1].nome}</h2>
                                        
                        <div className="grid grid-rows-3 grid-col-2 place-items-center h-[85%] w-[100%] mt-1 md:mt-1 md:w-[85%] md:mx-[7.5%] lg:w-[90%] - lg:mx-[4%] lg:mt-4">

                            <div className="posicao09 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            w-[9px] h-[12vh] text-[3vh] border-[5px]
                                            md:w-[12vh] md:h-[16vh] 
                                            lg:w-[10vw] lg:h-[26vh] lg:text-lg lg:border-8  " onDrop={soltar(9)} onDragOver={arrastarSobre}>
                                {album[9] ? <img className="w-full h-full" src={album[9].imgFigurinha} alt={album[9].nome} /> : '09'}
                            </div>

                            <div className="posicao10 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            w-[9vh] h-[12vh] text-[3vh] border-[5px]
                                            md:w-[12vh] md:h-[16vh] 
                                            lg:w-[10vw] lg:h-[26vh] lg:text-lg lg:border-8" onDrop={soltar(10)} onDragOver={arrastarSobre}>
                                {album[10] ? <img className="w-full h-full" src={album[10].imgFigurinha} alt={album[10].nome} />: '10'}
                            </div>

                            <div className="posicao11 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            w-[10vh] h-[10vh] text-[3vh] border-[5px] mt-1
                                            md:w-[12vh] md:h-[12vh] md:mt-2 
                                            lg:w-[10vw] lg:h-[20vh] lg:mt-3 lg:text-lg lg:border-8"onDrop={soltar(11)} onDragOver={arrastarSobre}>
                                {album[11] ? <img className="w-full h-full"src={album[11].imgFigurinha} alt={album[11].nome} /> : '11'}
                            </div>

                            <div className="posicao12 bg-[#cdcdcd] flex justify-center items-center rounded-lg border-[#F6F6F6]
                                            h-[10vh] text-[3vh] border-[5px]
                                            md:h-[14vh] 
                                            lg:h-[20vh] lg:text-lg lg:border-8"  onDrop={soltar(12)} onDragOver={arrastarSobre}>
                                {album[12] ? <img className="w-full h-full" src={album[12].imgFigurinha} alt={album[12].nome} /> : '12'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fig overflow-y-scroll border-[#F32626] rounded-lg w-[23vw] h-[60vh] ml-2 border-2 sm:w-[15vh] md:w-[20vh] md:h-[60vh] lg:w-[40vh] lg:h-[85vh] lg:ml-3 lg:border-4  ">
                    <h2 className='text-white text-[7px] ml-[9%] mt-[5%]= sm:text-[8px] sm:mt-[3px] md:text-[11px] md:ml-2 lg:text-[20px] md:mt-2  md:ml-3'>Suas Figurinhas</h2>
                    <div className="grid place-items-center grid-cols-1 m-[10%] gap-y-[5px] sm:m-[10%] lg:grid-cols-2 lg:gap-[4%] lg:gap-y-[10px] lg:m-[5%]">
                        <Figurinha dados={figurinhas} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
    
};
