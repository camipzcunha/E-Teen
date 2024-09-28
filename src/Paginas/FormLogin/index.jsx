import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed
import ImgFundo from './login2.jpg';

function FormLogin() {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <section className="flex min-h-screen bg-black relative">
            {/* Background image for larger screens */}
            <div 
                className="hidden md:block w-full bg-cover " 
                style={{ backgroundImage: `url(${ImgFundo})`, opacity: 0.9 }}
            />
            <div className="flex items-center justify-center w-full p-4 md:p-8 relative z-10">
                <div className="w-full max-w-md bg-black bg-opacity-90 rounded-lg shadow-lg p-6 transition-all duration-300">
                    {/* Navigation Link to Homepage */}
                    <Link to="/" className="text-gray-400 mb-4 inline-block  hover:underline">
                        Voltar para a Home
                    </Link>
                    
                    <h2 className="text-white text-3xl font-semibold mb-6 border-b-4 border-gray-300 uppercase text-center font-quantico">
                        {isRegister ? 'Cadastro - E-TEEN' : 'Logar - E-TEEN'}
                    </h2>
                    
                    {/* Formulário de Login (Left Side) */}
                    <div className={`transition-opacity duration-300 ${isRegister ? 'opacity-0' : 'opacity-100'}`}>
                        {!isRegister && (
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Usuário</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        className="w-full p-3 border border-gray-300 rounded-full bg-transparent text-white outline-none" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Senha</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        className="w-full p-3 border border-gray-300 rounded-full bg-transparent text-white outline-none" 
                                    />
                                </div>
                                <div className="mb-4 text-white">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="remember" className="mr-2" />
                                        Lembrar da senha futuramente
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <Link to='/home'>
                                    <button type="submit" className="w-full bg-red-800 text-white rounded-full py-2 hover:bg-red-700"> Logar </button>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-300">
                                        Não tem uma conta?  
                                        <button type="button" onClick={toggleForm} className="text-white hover:underline ml-2"> Inscreva-se </button>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                    
                    {/* Formulário de Cadastro (Right Side) */}
                    <div className={`transition-opacity duration-300 ${isRegister ? 'opacity-100' : 'opacity-0'}`}>
                        {isRegister && (
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Coloque seu e-mail</label>
                                    <input 
                                        type="text" 
                                        name="newEmail" 
                                        className="w-full p-3 border border-gray-300 rounded-full bg-transparent text-white outline-none" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Crie um nome de usuário</label>
                                    <input 
                                        type="text" 
                                        name="newUsername" 
                                        className="w-full p-3 border border-gray-300 rounded-full bg-transparent text-white outline-none" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Crie uma senha</label>
                                    <input 
                                        type="password" 
                                        name="newPassword" 
                                        className="w-full p-3 border border-gray-300 rounded-full bg-transparent text-white outline-none" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Confirme a senha</label>
                                    <input 
                                        type="password" 
                                        name="confirmPassword" 
                                        className="w-full p-3 border border-gray-300 rounded-full bg-transparent text-white outline-none" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <Link to = '/Home'>
                                    <button type="submit" className="w-full bg-red-800 text-white rounded-full py-2 hover:bg-red-700">Inscreva-se</button>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-300">
                                        Já tem uma conta? 
                                        <button type="button" onClick={toggleForm} className="text-white hover:underline ml-2"> Logar</button>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            {/* Background image for mobile devices */}
            <div 
                className="md:hidden absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${ImgFundo})`, opacity: 0.3 }}
            />
        </section>
    );
}

export default FormLogin;
