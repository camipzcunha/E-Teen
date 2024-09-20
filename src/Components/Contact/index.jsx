import React from "react";

const Contact = () => {
  return (
    <section className="bg-azul100 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12">
        {/** Coluna do formulário */}
        <div className="bg-blue-300 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-white text-2xl uppercase mb-6 font-bold">
            Entre em contato
          </h2>
          <form>
            <div className="flex flex-col gap-4 mb-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-left">
                Feedback
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-left">
                Perguntas
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-left">
                Suporte
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-left">
                Ajuda
              </button>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Mande sua mensagem
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-bold shadow-lg w-full"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        {/** Imagem do carro */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 flex justify-center">
          <img
            src="car_image.png"
            alt="Carro de corrida"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
