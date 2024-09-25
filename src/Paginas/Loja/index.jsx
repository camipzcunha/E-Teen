import HeaderLogin from "../../Components/HeaderLogin";
import Footer from "../../Components/Footer";
import PacotesLoja from "../../Components/PacotesLoja";


// Importando imagens
import pacote1 from './Imagens/1pacote.png'
import pacote3 from './Imagens/3pacotes.png'
import pacote4 from './Imagens/4pacotes.png'
import pacote5 from './Imagens/5pacotes.png'
import pacote6 from './Imagens/6pacotes.png'
import pacote10 from './Imagens/10pacotes.png'
import pacote12 from './Imagens/12pacotes.png'

export default function Loja(){
    const pacotesFigurinhas = [
        {id:1, tipo:'normal', qtd: 1, moedas:50, img: pacote1},
        {id:2, tipo:'normal',qtd: 3, moedas:100, img: pacote3},
        {id:3, tipo:'normal',qtd: 5, moedas:250, img: pacote5},
        {id:4, tipo:'normal',qtd: 10, moedas:320, img: pacote10},
    ];

    const secaoEspecial = [
        {id:5, tipo:'especial',qtd: 1, moedas:70, img: pacote1},
        {id:6, tipo:'especial',qtd: 3, moedas:120, img: pacote3},
        {id:7, tipo:'especial',qtd: 5, moedas:300, img: pacote5},
        {id:8, tipo:'especial',qtd: 10, moedas:380, img: pacote10},
    ];

    const novidades = [
        {id:9, tipo:'novidade',qtd: 1, moedas:80, img: pacote1},
        {id:10, tipo:'novidade',qtd: 3, moedas:130, img: pacote3},
        {id:11, tipo:'novidade',qtd: 5, moedas:310, img: pacote5},
    ];

    const promocao = [
        {id:12, tipo:'promocao',qtd: 4, moedas: 60, img: pacote4},
        {id:13, tipo:'promocao',qtd: 6, moedas: 120, img: pacote6},
        {id:14, tipo:'promocao',qtd: 12, moedas: 300, img: pacote12},
    ];

    var moedas = 500

    return(
        <>
            <HeaderLogin />
            <div className='flex flex-col justify-center w-[100vw] md:mt-8 px-4 lg:w-[100vw] md:w-[100vw] md:px-10'>
                <div className='flex justify-center items-center text-white border-[#F4CD00] rounded-2xl border-[2px] w-[25%] h-[6.5vh] md:w-[13%] md:text-[20px] lg:h-[8vh] lg:w-[9vw] lg:text-[2vw] lg:border-[3px]'>
                    <span className='text-[#F4CD00] material-symbols-outlined lg:text-[100%] lg:mr-1'>paid</span>
                    {moedas}
                </div>
                <div className='flex flex-col mt-4'>
                        <h2 className="text-white pb-1 border-[#d6d5d5] border-b-2 text-[19px] pl-2 md:mt-3">PACOTES DE FIGURINHAS</h2>
                        <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <PacotesLoja dados={pacotesFigurinhas}/>
                        </div>
                        <h2 className="text-white pb-1 border-[#d6d5d5] border-b-2 text-[19px] pl-2 mt-[10vh]">SEÇÃO ESPECIAL</h2>
                        <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <PacotesLoja dados={secaoEspecial}/>
                        </div>
                        <h2 className="text-white pb-1 border-[#d6d5d5] border-b-2 text-[19px] pl-2 mt-[10vh]">NOVIDADES</h2>
                        <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <PacotesLoja dados={novidades}/>
                        </div>
                        <h2 className="text-white pb-1 border-[#d6d5d5] border-b-2 text-[19px] pl-2 mt-[10vh]">PROMOÇÃO</h2>
                        <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <PacotesLoja dados={promocao}/>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}