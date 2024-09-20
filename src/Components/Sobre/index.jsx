
function About() {
  return (
    <section id="Sobre" className="relative bg-preto88 py-24  px-4 ">
  <div className="max-w-[1940px] mx-16">
   <div className="bg-amarelo100 py-4 rounded-tl-3xl rounded-br-3xl mt-32  ">
   <div className="px-28 py-10">
   <h2 className="text-3xl  font-semibold font-quantico uppercase text-left">Quem {''}
    <span className="text-vermelho100">Somos</span></h2>
    <p className="mt-4 font-jost font-norma text-xl justify-normal  md:text-xl">
      Somos uma empresa que se preocupa com o futuro das crianças e com a educação de qualidade. Nos preocupamos 
      em unir a tecnologia com a Fórmula-E para criar um ambiente de aprendizado e diversão para as crianças.
      Entre em contato conosco para saber mais sobre o nosso projeto e como podemos ajudar a sua escola a progredir.
    </p>

    <h2 className="text-3xl font-semibold font-quantico uppercase text-left mt-1">Nossos {''}
    <span className="text-vermelho100">Valores</span></h2>
    <p className="mt-4 font-jost  text-xl justify-normal mb-6 md:text-xl">
      Nossos valores são baseados na educação de qualidade e na tecnologia. Acreditamos que a educação é o caminho para um futuro melhor e que a tecnologia é uma ferramenta poderosa para alcançar esse objetivo.
    </p>
    <a href="" className="text-vermelho100 text-xl font-quantico  hover:opacity-70 ">Veja nossos planos <i className="ri-arrow-right-line"></i> </a>
   </div>
   </div>
    
  </div>
</section>
  );
}

export default About;