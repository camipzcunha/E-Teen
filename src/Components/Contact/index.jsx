import React from 'react';

const Contato = () => {
    return (
        <section className='max-width[1940px] bg-black p-12'>
          <div className="max-w-screen-lg mx-auto p-8 ">
            <div className="grid grid-cols-1 md:grid-cols-12 shadow-slate-600">
                <div className="bg-red-800 md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">Contato</p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold font-quantico tracking-tight">
                        Entre em <span className="text-black">Contato</span>
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>

                    <ContactInfo
                        icon={HouseIcon}
                        text="FIAP PAULISTA - São Paulo"
                    />
                    <ContactInfo
                        icon={PhoneIcon}
                        text="+93 749 99 65 50"
                    />
                    <ContactInfo
                        icon={ClockIcon}
                        text="24/7"
                    />
                </div>
                <form className="md:col-span-8 p-10">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Primeiro nome
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Por favor, preecha este campo.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Sobrenome
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Endereço de e-mail
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email" type="email" placeholder="********@*****.**" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                                sua mensagem
                            </label>
                            <textarea
                                rows="10"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                        </div>
                        <div className="flex justify-between w-full px-3">
                            <div className="md:flex md:items-center">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm font-jost">Envie as novidades!</span>
                                </label>
                            </div>
                            <button
                                className="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-quantico font-bold py-2 px-6 rounded"
                                type="submit">
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </section>
    );
};

// ContactInfo Component
const ContactInfo = ({ icon: Icon, text }) => (
    <div className="flex items-center mt-5">
        <Icon className="h-6 mr-2 text-red-600" />
        <span className="text-sm">{text}</span>
    </div>
);

// SVG icons (You can replace these with actual SVG components)
const HouseIcon = () => (
    <svg className="h-6" fill="currentColor" viewBox="0 0 489.536 489.536">
        {/* SVG Path Here */}
    </svg>
);

const PhoneIcon = () => (
    <i className=''></i>
);

const ClockIcon = () => (
    <svg className="h-6" fill="currentColor" viewBox="0 0 300.988 300.988">
        {/* SVG Path Here */}
    </svg>
);

export default Contato;
