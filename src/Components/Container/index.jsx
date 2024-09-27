import { Link } from "react-router-dom";

export default function Container({servicos}){
    return(
        <Link to={servicos.link}>
            <div className={`relative h-20 w-64 border-[3px] border-white rounded ${servicos.bgColor} mb-5 flex items-center justify-center lg:w-96 lg:h-64 lg:border-[8px] lg:mt-12 hover:bottom-3 hover:right-2`}>
                <h3 className="font-quantico font-bold text-white text-center lg:text-3xl">{servicos.titulo}</h3>
            </div>
        </Link>
    )

}