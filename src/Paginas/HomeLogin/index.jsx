//import HeaderLogin from "../../Components/HeaderLogin";
import Container from "../../Components/Container";

export default function HomeLogin(){
    const servicos =[
        {
            id: '01',
            titulo: 'MEU ÁLBUM',
            bgColor: 'bg-vermelho100',
            // fundo:
            link: '/Album'
        },
        {
            id: '02',
            titulo: 'MINHAS FIGURINHAS',
            bgColor: 'bg-azul100',
            // fundo:
            link: '/Album'
        },
        {
            id: '03',
            titulo: 'LOJA',
            bgColor: 'bg-amarelo100',
            // fundo:
            link: '/Loja'
        },
        {
            id: '04',
            titulo: 'QUIZZES',
            bgColor: 'bg-vermelho100'
            // fundo:
            link:'/Quizzes'
        },
        {
            id: '05',
            titulo: 'GUIA',
            bgColor: 'bg-azul100',
            // fundo:
            link: '/Guia'
        },
        {
            id: '01',
            titulo: 'AMIGOS',
            bgColor: 'bg-amarelo100'
            // fundo:
            link: '/Amigos'
        },

    ]
    return(
        <>
            <HeaderLogin />
            
            <div className="grid grid-cols-1 justify-items-center mt-20 lg:grid-cols-3">
                {
                    servicos.map((servico)=>{
                        return(<Container servicos={servico}/>)
                    })
                }
            </div>
        </>
    )
}