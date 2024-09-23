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
     <div className="flex gap-4 items-start">
      <span className="text-red-600 bg-violet-500/10 p-3 rounded-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H5.50002C5.50002 5.27613 5.27617 5.49998 5.00002 5.49998H4.00002C3.72387 5.49998 3.50002 5.27613 3.50002 4.99998H0.900024C0.402966 4.99998 0 5.40294 0 5.89999V13.1C0 13.597 0.402966 14 0.900024 14H13.1C13.5971 14 14 13.597 14 13.1V5.89999C14 5.40294 13.5971 4.99998 13.1 4.99998H9.50002ZM4.00002 9.99999H5.00002V8.99999H4.00002V9.99999ZM3.00002 9.99999V8.99999H1.00002V9.99999H3.00002ZM1.00002 7.99999V6.99999H3.00002V7.99999H1.00002ZM5.00002 7.99999H4.00002V6.99999H5.00002V7.99999ZM10.0001 9.99999H11.0001V8.99999H10.0001V9.99999ZM9.00009 9.99999V8.99999H7.00009V9.99999H9.00009ZM7.00009 7.99999H9.00009V6.99999H7.00009V7.99999ZM11.0001 7.99999H10.0001V6.99999H11.0001V7.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-white font-quantico text-xl">Jogos e Desafios Interativos</h3>
        <p className="mt-1 text-gray-500">
          Participe de jogos online que testam seu conhecimento sobre a Fórmula-E. 
          Ganhe prêmios virtuais e cards colecionáveis ao completar desafios e responder quizzes.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <span className="text-red-600 bg-violet-500/10 p-3 rounded-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H5.50002C5.50002 5.27613 5.27617 5.49998 5.00002 5.49998H4.00002C3.72387 5.49998 3.50002 5.27613 3.50002 4.99998H0.900024C0.402966 4.99998 0 5.40294 0 5.89999V13.1C0 13.597 0.402966 14 0.900024 14H13.1C13.5971 14 14 13.597 14 13.1V5.89999C14 5.40294 13.5971 4.99998 13.1 4.99998H9.50002ZM4.00002 9.99999H5.00002V8.99999H4.00002V9.99999ZM3.00002 9.99999V8.99999H1.00002V9.99999H3.00002ZM1.00002 7.99999V6.99999H3.00002V7.99999H1.00002ZM5.00002 7.99999H4.00002V6.99999H5.00002V7.99999ZM10.0001 9.99999H11.0001V8.99999H10.0001V9.99999ZM9.00009 9.99999V8.99999H7.00009V9.99999H9.00009ZM7.00009 7.99999H9.00009V6.99999H7.00009V7.99999ZM11.0001 7.99999H10.0001V6.99999H11.0001V7.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-white font-quantico text-xl">Jogos e Desafios Interativos</h3>
        <p className="mt-1 text-gray-500">
          Participe de jogos online que testam seu conhecimento sobre a Fórmula-E. 
          Ganhe prêmios virtuais e cards colecionáveis ao completar desafios e responder quizzes.
        </p>
      </div>
    </div>

 <div className="flex gap-4 items-start">
      <span className="text-red-600 bg-violet-500/10 p-3 rounded-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H5.50002C5.50002 5.27613 5.27617 5.49998 5.00002 5.49998H4.00002C3.72387 5.49998 3.50002 5.27613 3.50002 4.99998H0.900024C0.402966 4.99998 0 5.40294 0 5.89999V13.1C0 13.597 0.402966 14 0.900024 14H13.1C13.5971 14 14 13.597 14 13.1V5.89999C14 5.40294 13.5971 4.99998 13.1 4.99998H9.50002ZM4.00002 9.99999H5.00002V8.99999H4.00002V9.99999ZM3.00002 9.99999V8.99999H1.00002V9.99999H3.00002ZM1.00002 7.99999V6.99999H3.00002V7.99999H1.00002ZM5.00002 7.99999H4.00002V6.99999H5.00002V7.99999ZM10.0001 9.99999H11.0001V8.99999H10.0001V9.99999ZM9.00009 9.99999V8.99999H7.00009V9.99999H9.00009ZM7.00009 7.99999H9.00009V6.99999H7.00009V7.99999ZM11.0001 7.99999H10.0001V6.99999H11.0001V7.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-white font-quantico text-xl">Jogos e Desafios Interativos</h3>
        <p className="mt-1 text-gray-500">
          Participe de jogos online que testam seu conhecimento sobre a Fórmula-E. 
          Ganhe prêmios virtuais e cards colecionáveis ao completar desafios e responder quizzes.
        </p>
      </div>
    </div>

     <div className="flex gap-4 items-start">
      <span className="text-red-600 bg-violet-500/10 p-3 rounded-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H5.50002C5.50002 5.27613 5.27617 5.49998 5.00002 5.49998H4.00002C3.72387 5.49998 3.50002 5.27613 3.50002 4.99998H0.900024C0.402966 4.99998 0 5.40294 0 5.89999V13.1C0 13.597 0.402966 14 0.900024 14H13.1C13.5971 14 14 13.597 14 13.1V5.89999C14 5.40294 13.5971 4.99998 13.1 4.99998H9.50002ZM4.00002 9.99999H5.00002V8.99999H4.00002V9.99999ZM3.00002 9.99999V8.99999H1.00002V9.99999H3.00002ZM1.00002 7.99999V6.99999H3.00002V7.99999H1.00002ZM5.00002 7.99999H4.00002V6.99999H5.00002V7.99999ZM10.0001 9.99999H11.0001V8.99999H10.0001V9.99999ZM9.00009 9.99999V8.99999H7.00009V9.99999H9.00009ZM7.00009 7.99999H9.00009V6.99999H7.00009V7.99999ZM11.0001 7.99999H10.0001V6.99999H11.0001V7.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-white font-quantico text-xl">Jogos e Desafios Interativos</h3>
        <p className="mt-1 text-gray-500">
          Participe de jogos online que testam seu conhecimento sobre a Fórmula-E. 
          Ganhe prêmios virtuais e cards colecionáveis ao completar desafios e responder quizzes.
        </p>
      </div>
    </div>

     <div className="flex gap-4 items-start">
      <span className="text-red-600 bg-violet-500/10 p-3 rounded-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H5.50002C5.50002 5.27613 5.27617 5.49998 5.00002 5.49998H4.00002C3.72387 5.49998 3.50002 5.27613 3.50002 4.99998H0.900024C0.402966 4.99998 0 5.40294 0 5.89999V13.1C0 13.597 0.402966 14 0.900024 14H13.1C13.5971 14 14 13.597 14 13.1V5.89999C14 5.40294 13.5971 4.99998 13.1 4.99998H9.50002ZM4.00002 9.99999H5.00002V8.99999H4.00002V9.99999ZM3.00002 9.99999V8.99999H1.00002V9.99999H3.00002ZM1.00002 7.99999V6.99999H3.00002V7.99999H1.00002ZM5.00002 7.99999H4.00002V6.99999H5.00002V7.99999ZM10.0001 9.99999H11.0001V8.99999H10.0001V9.99999ZM9.00009 9.99999V8.99999H7.00009V9.99999H9.00009ZM7.00009 7.99999H9.00009V6.99999H7.00009V7.99999ZM11.0001 7.99999H10.0001V6.99999H11.0001V7.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-white font-quantico text-xl">Jogos e Desafios Interativos</h3>
        <p className="mt-1 text-gray-500">
          Participe de jogos online que testam seu conhecimento sobre a Fórmula-E. 
          Ganhe prêmios virtuais e cards colecionáveis ao completar desafios e responder quizzes.
        </p>
      </div>
    </div>

     <div className="flex gap-4 items-start">
      <span className="text-red-600 bg-violet-500/10 p-3 rounded-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H5.50002C5.50002 5.27613 5.27617 5.49998 5.00002 5.49998H4.00002C3.72387 5.49998 3.50002 5.27613 3.50002 4.99998H0.900024C0.402966 4.99998 0 5.40294 0 5.89999V13.1C0 13.597 0.402966 14 0.900024 14H13.1C13.5971 14 14 13.597 14 13.1V5.89999C14 5.40294 13.5971 4.99998 13.1 4.99998H9.50002ZM4.00002 9.99999H5.00002V8.99999H4.00002V9.99999ZM3.00002 9.99999V8.99999H1.00002V9.99999H3.00002ZM1.00002 7.99999V6.99999H3.00002V7.99999H1.00002ZM5.00002 7.99999H4.00002V6.99999H5.00002V7.99999ZM10.0001 9.99999H11.0001V8.99999H10.0001V9.99999ZM9.00009 9.99999V8.99999H7.00009V9.99999H9.00009ZM7.00009 7.99999H9.00009V6.99999H7.00009V7.99999ZM11.0001 7.99999H10.0001V6.99999H11.0001V7.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-white font-quantico text-xl">Jogos e Desafios Interativos</h3>
        <p className="mt-1 text-gray-500">
          Participe de jogos online que testam seu conhecimento sobre a Fórmula-E. 
          Ganhe prêmios virtuais e cards colecionáveis ao completar desafios e responder quizzes.
        </p>
      </div>
    </div>


  </div>
</div>
  );
};

export default Services;