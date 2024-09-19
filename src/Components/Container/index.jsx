export default function Container({servicos}){
    return(
        <div className={`border-2 border-branco44 ${servicos.bgColor}`} >
            <h3>{servicos.titulo}</h3>
        </div>
    )
}