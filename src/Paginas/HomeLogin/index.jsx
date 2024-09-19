import Container from "../../Components/Container";
import HeaderLogin from "../../Components/HeaderLogin";
import Servicos from "../../Components/Servicos";

export default function HomeLogin(){
    const servicos =[
        {
            id: '01',
            titulo: 'MEU ÁLBUM',
            bgColor: 'bg-vermelho100'
            // fundo:
        },
        {
            id: '02',
            titulo: 'MINHAS FIGURINHAS',
            bgColor: 'bg-azul100'
            // fundo:
        },
        {
            id: '03',
            titulo: 'LOJA',
            bgColor: 'bg-amarelo100'
            // fundo:
        },
        {
            id: '04',
            titulo: 'QUIZZES',
            bgColor: 'bg-vermelho100'
            // fundo:
        },
        {
            id: '05',
            titulo: 'GUIA',
            bgColor: 'bg-azul100'
            // fundo:
        },
        {
            id: '01',
            titulo: 'AMIGOS',
            bgColor: 'bg-amarelo100'
            // fundo:
        },

    ]
    return(
        <>
            <HeaderLogin />
            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3" >
            {
                servicos.map((servico)=>{
                    return(<Container servicos={servico}/>)
                })
            }
            </div>
        </>
    )
}