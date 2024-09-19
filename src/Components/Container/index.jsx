export default function Container({servicos}){
    return(
        <div className={` h-[87px] 
                        w-[250px]
                        border-[3px]
                      border-branco100 
                        rounded ${servicos.bgColor} 
                        mb-5  
                        flex 
                        items-center	 
                        justify-center
                        xl:
                        h-64
                        w-96
                    `} >
            <h3 className="font-quantico font-bold text-branco100 text-cener">{servicos.titulo}</h3>
        </div>
    )
}