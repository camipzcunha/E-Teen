import Carro1 from '../../Assets/piloto.png';

const Hero = () => {
  return (
    <div className=" text-branco100 mx-7">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center mt-10 py-12 px-7">
        {/* Bloco de texto à esquerda */}
        <div className="md:w-1/2 justify-between px-4">
          <h1 className="text-4xl md:text-5xl font-quantico uppercase leading-tight">
            O automobilismo do{''} <span className='text-azul100'>futuro</span> para a{' '}
            <span className="text-vermelho100">futura</span> geração
          </h1>
          <p className="mt-4 text-lg font-jost text-justify">
            Conecte-se ao lado tecnológico das corridas com tecnologia avançada e adrenalina pura. 
            Conheça o carro de corrida do futuro e prepare-se para a experiência mais
          </p>
          <button className="mt-8 bg-vermelho100 text-branco100  hover:bg-branco100 hover:text-vermelho100 font-jost uppercase px-6 py-3 rounded-md">
            Saiba mais
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-4/6 mt-8 md:mt-0">
          <img
            src={Carro1}
            alt="Automobilismo do Futuro"
            className="w-full h-auto object-cover ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
