import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);

  // Função para alternar o menu
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto mt-3 px-14 text-white">
      {/* Logo à esquerda */}
      <NavLink to='/'>
        <h1 className="text-5xl font-modak ml-30 text-branco100">E-KIDS</h1>
      </NavLink>

      {/* Links em tela cheia para desktop, centralizados */}
      <ul className="hidden md:flex justify-center flex-1 space-x-3">
        <NavLink to='/'>
            <li className="p-4 font-jost flex flex-col items-center text-branco44">
                <span className="material-symbols-outlined text-4xl">book_5</span> 
                GUIA
            </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-4 font-jost flex flex-col items-center text-branco44">
                <span className="material-symbols-outlined text-4xl">quiz</span>
                QUIZZES
            </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-4 font-jost flex flex-col items-center text-branco44">
                <span className="material-symbols-outlined text-4xl">store</span>
                LOJA
            </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-4 font-jost flex flex-col items-center text-branco44">
                <span className="material-symbols-outlined text-4xl">auto_stories</span>
                MEU ÁLBUM
            </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-4 font-jost flex flex-col items-center text-branco44">
                <span className="material-symbols-outlined text-4xl">group</span> 
                AMIGOS
            </li>
        </NavLink>
      </ul>

      {/* Botão "Entrar" à direita */}
      <div className="hidden md:block">
        <button className="bg-vermelho100 text-branco100 font-jost uppercase px-6 py-2 rounded-md hover:bg-red-700  ">
          Entrar
        </button>
      </div>

      {/* Ícone do Menu Hambúrguer para mobile, à direita */}
      <div className="md:hidden flex items-center space-x-4 text-branco100">
        {/* Botão "Entrar" para mobile */} 
        <button className="bg-vermelho100 text-branco100 font-jost uppercase px-4 py-2 rounded-md">
          Entrar
        </button>

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
        <NavLink to='/'>
          <li className="p-5 border-b border-gray-600 flex flex-row items-center  text-branco44">
                <span className="material-symbols-outlined text-4xl mr-3">book_5</span> 
                GUIA
          </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-5 border-b border-gray-600 flex flex-row items-center  text-branco44">
                <span className="material-symbols-outlined text-4xl mr-3">quiz</span>
                QUIZZES
            </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-5 border-b border-gray-600 flex flex-row items-center text-branco44">
                <span className="material-symbols-outlined text-4xl mr-3" >store</span>
                LOJA
            </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-5 border-b border-gray-600 flex flex-row items-center  text-branco44">
                <span className="material-symbols-outlined text-4xl mr-3">auto_stories</span>
                MEU ÁLBUM
            </li>
        </NavLink>
        <NavLink to='/'>
            <li className="p-5 flex flex-row items-center  text-branco44">
                <span className="material-symbols-outlined text-4xl mr-3">group</span> 
                AMIGOS
            </li>
        </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;