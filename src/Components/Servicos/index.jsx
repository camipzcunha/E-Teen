export default function Servicos({servicos}){
    return(
        <>
            {
                servicos.map(({id, titulo, bgcolor,}, indice) =>(
                    <div key={indice} style={{backgroundColor: bgcolor}}>
                        {id}
                        {titulo}
                    </div>
                ))
            }
        </>
    )
}