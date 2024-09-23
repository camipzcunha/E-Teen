

export default function Figurinha({dados}){
    
    const arrastar = (figurinha) => (evento) => {
        evento.dataTransfer.setData('figurinhaId', figurinha.id);
      };

    return (
        <>
            {
                dados.map((figurinha) => (
                    <div key={figurinha.id} className="cursor-pointer contents" draggable onDragStart={arrastar(figurinha)}>
                        <img className='w-full rounded-md border-[#F6F6F6] 
                                        border-[3px]
                                        lg:border-4' src={figurinha.imgFigurinha} alt="id" />
                    </div>
                ))
            }
        </>
    )
}