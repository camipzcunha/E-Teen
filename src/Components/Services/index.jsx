import ServiceContainer from "./ServiceContainer";'./ServiceContainer';

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen[1940px]  md:px-24 lg:px-8 lg:py-20 bg-black" id="Services">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-500 uppercase rounded-full bg-teal-accent-400">
            Nossos Serviços
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-quantico text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2F87E6E8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Veja</span>
          </span>{' '}
          o que oferecemos, e para quem oferecemos
        </h2>
        <p className="text-base text-gray-500 md:text-lg">
          Nós apresentamos uma variedade de serviços para atender às suas diversão. Nossos serviços 
          são acessíveis e fáceis de usar. 
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
    

    <ServiceContainer
      title="Quizzes e Desafios Interativos"
      description="Participe de jogos online que testam seu conhecimento sobre a Fórmula-E. Ganhe prêmios virtuais e cards colecionáveis ao completar desafios e responder quizzes."
    />

    <ServiceContainer
      title="Aulas Online"
      description="Aprenda sobre a Fórmula-E com aulas online ministradas por especialistas no assunto. 
      As aulas são interativas e divertidas, e você pode acessá-las de qualquer lugar."
    />

    <ServiceContainer
      title="Eventos Especiais"
      description="Participe de eventos especiais da Fórmula-E, como corridas ao vivo, entrevistas com pilotos e 
      sessões de perguntas e respostas. Conheça outros fãs e compartilhe sua paixão pelo esporte."
    />

    <ServiceContainer
      title="Conteúdo Exclusivo"
      description="Tenha acesso a conteúdo exclusivo da Fórmula-E, como vídeos dos bastidores das corridas, 
      entrevistas com pilotos e equipes, e análises dos eventos. Fique por dentro de tudo o que acontece no mundo da Fórmula-E."
    />

    <ServiceContainer
      title="Comunidade Online"
      description="Faça parte de uma comunidade online de fãs da Fórmula-E. Conheça outros fãs, compartilhe sua paixão pelo esporte, 
      e participe de discussões e debates sobre as corridas e os pilotos. Faça novos amigos e divirta-se com pessoas que compartilham seus interesses."
    />

    <ServiceContainer
      title="Produtos Exclusivos"
      description="Adquira produtos exclusivos da Fórmula-E, como camisetas, bonés, canecas, e muito mais. 
      Mostre seu apoio ao esporte e à sua equipe favorita com produtos oficiais e licenciados da Fórmula-E."
    />

  </div>
</div>
  );
};

export default Services;