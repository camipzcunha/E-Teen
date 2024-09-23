
export default function PacotesLoja({dados}){
    return (
        <>
        {
            dados.map(({id,tipo,qtd,moedas, img}, indice)=>(
                <div key={indice}>
                    <div className="bg-[#EAEAEA] rounded-[2px]
                                    w-[80%] h-[50vh] mx-[10%] mt-10
                                    md:h-[35vh]"><img className='w-full h-full' src={img} alt="pacFig" /></div>
                    
                    <div className="flex justify-center items-center
                                    mt-2">
                        <p className="text-white
                                    w-[50%] text-[18px]
                                    lg:text-[16x]">{qtd} Pacotes</p>
                        <div className="flex justify-center items-center text-white
                                        mr-1">
                            <span className='text-[#F4CD00] material-symbols-outlined'>paid</span>
                            <p className="text-[20px] text-[#F4CD00] lg:text-[18px]">{moedas}</p>
                        </div>
                    </div>
                    <button className="bg-[#F32626] text-white rounded-lg cursor-pointer
                                        ml-[10%] mt-2 px-8 py-2
                                        md:w-[15vw] md:px-3
                                        lg:w-[20vh] lg:h-[6vh] lg:py-0">COMPRAR</button>
                </div>
            ))
        }
        </>
        
        
    )
}