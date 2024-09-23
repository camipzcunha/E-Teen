export default function Container({servicos}){
    return(
        
        <div className={` relative 
                        h-20
                        w-64
                        border-[3px]
                      border-branco100 
                        rounded ${servicos.bgColor} 
                        mb-5  
                        flex 
                        items-center	 
                        justify-center
                        
                        lg:w-96
                        lg:h-64
                        lg:border-[8px]
                        lg:mt-12

                        hover:bottom-3 hover:right-2
                    `} >
            <h3 className="font-quantico font-bold text-branco100 text-center lg:text-3xl">{servicos.titulo}</h3>
        </div>
    )
}