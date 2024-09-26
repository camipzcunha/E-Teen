import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);

  // Função para alternar o menu
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto mt-3 px-10 md:px-14 text-white">
      {/* Logo à esquerda */}
      <NavLink to='/home'>
        <h1 className="text-3xl md:text-4xl font-modak ml-30 text-white ">E-TEEN</h1>
      </NavLink>

      {/* Links em tela cheia para desktop, centralizados */}
      <ul className="hidden flex-1 justify-center space-x-3 md:flex">
        <NavLink to=''>
            <li className="p-4 font-quantico flex flex-col items-center text-slate-300 hover:text-white md:text-xs lg:text-base">
                <span className="material-symbols-outlined text-slate-300 text-4xl hover:text-white lg:text-3xl">book_5</span> 
                GUIA
            </li>
        </NavLink>
        <NavLink to=''>
            <li className="p-4 font-quantico flex flex-col items-center text-slate-300 hover:text-white md:text-xs lg:text-base">
                <span className="material-symbols-outlined text-slate-300 text-4xl hover:text-white lg:text-3xl">quiz</span>
                QUIZZES
            </li>
        </NavLink>
        <NavLink to='/loja'>
            <li className="p-4 font-quantico flex flex-col items-center text-slate-300 hover:text-white md:text-xs lg:text-base">
                <span className="material-symbols-outlined text-slate-300 text-4xl hover:text-white lg:text-3xl">store</span>
                LOJA
            </li>
        </NavLink>
        <NavLink to='/album'>
            <li className="p-4 font-quantico flex flex-col items-center text-slate-300 hover:text-white md:text-xs lg:text-base">
                <span className="material-symbols-outlined text-slate-300 text-4xl hover:text-white lg:text-3xl">auto_stories</span>
                MEU ÁLBUM
            </li>
        </NavLink>
        <NavLink to=''>
            <li className="p-4  flex flex-col items-center text-slate-300 hover:text-white md:text-xs lg:text-base font-quantico">
                <span className="material-symbols-outlined text-slate-300 text-4xl hover:text-white lg:text-3xl">group</span> 
                AMIGOS
            </li>
        </NavLink>
      </ul>

      {/* Botão "Entrar" à direita */}
      <div className="hidden md:block">
        <button className="bg-[#F32626] text-white font-jost uppercase px-3 py-1 rounded-full hover:bg-[#F32626]-700 md:py-1/2 md:px-2 ">
         <span className="material-symbols-outlined text-3xl">person</span>
        </button>
      </div>

      {/* Ícone do Menu Hambúrguer para mobile, à direita */}
      <div className="md:hidden flex items-center space-x-4 text-white">
        {/* Botão "Entrar" para mobile */} 
        <button className="bg-[#F32626] text-white font-jost uppercase px-3 py-1 rounded-full hover:bg-[#F32626]-700 md:py-1/2 md:px-2">
          <span className="material-symbols-outlined text-2xl">person</span>
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
            ? 'fixed right-0 top-0 w-[60%] h-full border-r border-gray-900 bg-black ease-in-out duration-500 md:hidden'
            : 'fixed right-[-100%]'
        }
      >
        <ul className="p-4 uppercase">
        <NavLink to=''>
          <li className="p-5 border-b border-gray-600 flex flex-row items-center">
                <span className="material-symbols-outlined text-4xl mr-3">book_5</span> 
                GUIA
          </li>
        </NavLink>
        <NavLink to=''>
            <li className="p-5 border-b border-gray-600 flex flex-row items-center">
                <span className="material-symbols-outlined text-4xl mr-3">quiz</span>
                QUIZZES
            </li>
        </NavLink>
        <NavLink to='/loja'>
            <li className="p-5 border-b border-gray-600 flex flex-row items-center">
                <span className="material-symbols-outlined text-4xl mr-3" >store</span>
                LOJA
            </li>
        </NavLink>
        <NavLink to='/album'>
            <li className="p-5 border-b border-gray-600 flex flex-row items-center">
                <span className="material-symbols-outlined text-4xl mr-3">auto_stories</span>
                MEU ÁLBUM
            </li>
        </NavLink>
        <NavLink to=''>
            <li className="p-5 flex flex-row items-center">
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
