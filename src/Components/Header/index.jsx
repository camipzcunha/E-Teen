import { useState } from 'react';


const Header = () => {
  const [nav, setNav] = useState(false);

  // Função para alternar o menu
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto mt-3 px-20 text-white">
      {/* Logo à esquerda */}
      <a href='/'>
        <h1 className="text-5xl font-modak ml-30 text-branco100">E-KIDS</h1>
      </a>

      {/* Links em tela cheia para desktop, centralizados */}
      <ul className="hidden md:flex justify-center flex-1 space-x-3">
        <a href='/'>
          <li className="hover:text-branco100 active:text-branco100 p-4 font-jost flex flex-col items-center text-branco44">
            <span className="material-symbols-outlined text-4xl">help_center</span>
            SOBRE
          </li>
        </a>
        <a href='/'>
          <li className="hover:text-branco100 active:text-branco100 p-4 font-jost flex flex-col items-center text-branco44">
            <span className="material-symbols-outlined text-4xl">stadia_controller</span>
            GAMES
          </li>
        </a>
        <a href='/'>
          <li className="hover:text-branco100 active:text-branco100 p-4 font-jost flex flex-col items-center text-branco44">
            <span className="material-symbols-outlined text-4xl">contacts</span>
            CONTATO
          </li>
        </a>
      </ul>

      {/* Link "Entrar" à direita para desktop */}
      <div className="hidden md:block">
        <a
          href='/login'
          className="bg-vermelho100 text-branco100  hover:bg-branco100 hover:text-vermelho100 font-jost uppercase px-6 py-2 rounded-md hover:bg-red-700"
        >
          Entrar
        </a>
      </div>

      {/* Ícone do Menu Hambúrguer para mobile, à direita */}
      <div className="md:hidden flex items-center space-x-4 text-branco100">
        {/* Menu hambúrguer */}
        <div onClick={handleClick}>
          <svg
            className="w-8 h-8 text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Menu lateral para mobile */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-preto88 ease-in-out duration-500 md:hidden'
            : 'fixed left-[-100%]'
        }
      >
        <ul className="p-4 uppercase">
          <li className="p-5 border-b border-gray-600 flex flex-row items-center text-branco44">
            <span className="material-symbols-outlined text-4xl mr-3">help_center</span>
            SOBRE
          </li>
          <li className="p-5 border-b border-gray-600 flex flex-row items-center text-branco44">
            <span className="material-symbols-outlined text-4xl mr-3">stadia_controller</span>
            GAMES
          </li>
          <li className="p-5 flex flex-row items-center text-branco44">
            <span className="material-symbols-outlined text-4xl mr-3">contacts</span>
            CONTATO
          </li>
          {/* Link "Entrar" dentro do menu lateral */}
          <li className="p-5 flex flex-row items-center text-branco44">
            <a href='/login' className="bg-vermelho100 text-branco100 hover:bg-branco100 hover:text-vermelho100 font-jost uppercase px-4 py-2 rounded-md">
              Entrar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
