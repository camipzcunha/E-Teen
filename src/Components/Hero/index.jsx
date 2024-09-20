import Carro1 from '../../Assets/piloto.png';
import './hero.css'


const Hero = () => {
  return (
    <div className="relative  z-10 text-branco100 bg-preto88">
    <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center  py-28 px-7">
      
      {/* Texto com animação de fade-in e slide */}
      <div className="md:w-1/2 justify-between px-4">
        <h1 className="text-4xl md:text-5xl font-quantico uppercase leading-tight animate-fadeIn mb-9">
          Automobilismo do{''} <span className='text-azul100 animate-slideIn'>futuro</span> para a{' '}
          <span className="text-vermelho100 animate-bounce">futura</span> geração
        </h1>
        <p className="mt-4 text-lg font-jost text-justify animate-slideInUp mb-9">
          Conecte-se ao lado tecnológico das corridas com tecnologia avançada e adrenalina pura. 
          Conheça o carro de corrida do futuro e prepare-se para a experiência mais
        </p>
        <button className="mt-8 bg-vermelho100 text-branco100 hover:bg-branco100 hover:text-vermelho100 font-jost 
        uppercase px-6 py-3 rounded-md animate-bounce"
        style={{ transition: 'all ease-in-out 0.4s' }}>
          Saiba mais
        </button>
      </div>
  
      {/* Imagem com animação de zoom e deslizamento */}
      <div className="relative md:w-4/6 mt-8 md:mt-0">
        <img
          src={Carro1}
          alt="Automobilismo do Futuro"
          className="w-[100%] h-auto  mb-0 ml-4 mt-8 absolute top-[-230px] left-0 z-30 animate-zoomIn"
        />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
