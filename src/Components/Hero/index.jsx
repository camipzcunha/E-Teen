const Hero = () => {
  return (
    <div className=" text-white">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center mt-10 py-12 px-6">
        {/* Bloco de texto à esquerda */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-4xl font-quantico uppercase leading-tight">
            O automobilismo do futuro para a{' '}
            <span className="text-red-600">futura</span> geração
          </h1>
          <p className="mt-4 text-lg font-jost">
            Conecte-se ao futuro das corridas com tecnologia avançada e adrenalina pura. 
          </p>
          <button className="mt-6 bg-red-600 text-white font-jost uppercase px-6 py-3 rounded-md">
            Saiba mais
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="path_to_your_image"
            alt="Automobilismo do Futuro"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
