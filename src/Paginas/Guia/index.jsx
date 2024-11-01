import React, { useState } from "react";
import overviewImage from "../../assets/overview.jpg";
import teamsImage from "../../assets/teams.jpg";
import driversImage from "../../assets/drivers.jpg";
import technologyImage from "../../assets/technology.jpg";
import Header from "../../Components/HeaderLogin";
import Footer from "../../Components/Footer"

export default function FormulaEGuide() {
  const [section, setSection] = useState("overview");

  const sections = {
    overview: {
      title: "O que é Fórmula E?",
      content: `
        A Fórmula E é uma categoria de automobilismo exclusivamente elétrica, criada em 2014 pela Federação Internacional de Automobilismo (FIA) para promover a mobilidade sustentável. Inspirada em categorias tradicionais, como a Fórmula 1, essa modalidade visa demonstrar a eficácia e o desempenho dos veículos elétricos em condições extremas. Ao optar por corridas em circuitos urbanos, a Fórmula E se diferencia e também facilita o acesso do público ao espetáculo, aproximando a tecnologia dos centros urbanos e incentivando o uso de veículos elétricos.

        As corridas acontecem nas principais cidades do mundo, como Londres, Berlim e São Paulo, proporcionando cenários icônicos e ampliando a conscientização ambiental nas áreas urbanas. Com um foco claro em sustentabilidade, a categoria incorpora tecnologias avançadas para reduzir as emissões de carbono, além de buscar eficiência energética, mostrando o impacto positivo que a inovação automotiva pode ter no futuro do transporte. A Fórmula E combina corridas emocionantes com uma mensagem clara de que o futuro da mobilidade é elétrico e sustentável.
      `,
      image: overviewImage,
    },
    teams: {
      title: "Equipes da Fórmula E",
      content: `
        A Fórmula E conta com algumas das maiores montadoras e fabricantes de automóveis do mundo, como Mercedes, Audi, Jaguar, Nissan e BMW. Essas empresas se uniram para competir em um ambiente que privilegia a inovação e a sustentabilidade, desenvolvendo tecnologias que podem ser aplicadas a veículos elétricos de consumo. Com o desenvolvimento de motores e sistemas de propulsão próprios, cada equipe busca alcançar o equilíbrio ideal entre potência e eficiência, fatores essenciais para vencer corridas.

        Outro ponto interessante na Fórmula E é a restrição de orçamento imposta às equipes, o que permite uma competição mais equilibrada e acessível para todas as participantes, inclusive para aquelas que não pertencem a grandes fabricantes. Esse equilíbrio torna a competição acirrada, onde o foco está na habilidade dos engenheiros e na estratégia dos pilotos. Muitas inovações testadas nas corridas acabam sendo incorporadas aos veículos elétricos de passeio, trazendo benefícios diretos ao consumidor final.
      `,
      image: teamsImage,
    },
    drivers: {
      title: "Principais Pilotos",
      content: `
        A Fórmula E reúne pilotos de grande talento e experiência, vindos de várias categorias de automobilismo, incluindo ex-pilotos de Fórmula 1. Jean-Éric Vergne, campeão da categoria, e Lucas di Grassi, um dos mais consistentes, são dois exemplos de grandes nomes da Fórmula E. A categoria também oferece oportunidade para novos pilotos mostrarem suas habilidades em um ambiente que valoriza a eficiência energética e o controle técnico.

        A diversidade de pilotos na Fórmula E cria um campo de competição com diferentes estilos de pilotagem e estratégias. Cada corrida exige que os pilotos administrem cuidadosamente a energia de seus carros e decidam quando usar o "Attack Mode" para obter um aumento temporário de potência. Com o alto nível de habilidade necessário, os pilotos da Fórmula E se tornam exemplos de resiliência e inovação para o futuro do automobilismo.
      `,
      image: driversImage,
    },
    technology: {
      title: "Tecnologia e Sustentabilidade",
      content: `
        A Fórmula E é considerada uma das categorias de automobilismo mais avançadas em termos de tecnologia limpa e inovação sustentável. Um dos principais avanços é o "Attack Mode", que permite que os pilotos obtenham um aumento temporário de potência ao passarem por uma zona específica na pista. Esse elemento estratégico traz uma camada extra de emoção e inovação, mantendo o foco na eficiência energética e nas tecnologias limpas.

        Outra característica única da Fórmula E é a realização das corridas em circuitos urbanos, o que reduz a necessidade de construção de novas pistas e aproxima a corrida das pessoas. Com o uso de pneus duráveis que funcionam em diversas condições, a categoria minimiza o desperdício e reforça seu compromisso com a sustentabilidade. Essas práticas mostram como a Fórmula E é essencial para o desenvolvimento de um futuro mais limpo e eficiente para a indústria automotiva.
      `,
      image: technologyImage,
    },
  };


  return (
    <>
    <Header />
    <div className="w-4/5 mx-auto my-10 p-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center text-[var(--main-color)] mb-12">
        Guia da Fórmula E
      </h1>

      {/* Imagem e informações da seção atual */}
      <div className="info text-center mb-16">
        <img
          src={sections[section].image}
          alt={sections[section].title}
          className="w-full max-w-2xl mx-auto mb-10 rounded-xl"
        />
        <h2 className="text-4xl text-[#0078d7] font-bold mb-8">{sections[section].title}</h2>
        <p className="text-2xl leading-relaxed text-gray-700">{sections[section].content}</p>
      </div>

      {/* Botões de navegação */}
      <div className="buttons flex justify-center gap-8 mt-16">
        <button
          className="botao bg-[#e62143] text-white font-semibold px-8 py-4 text-xl rounded-lg shadow-md hover:bg-[#f0435f] transition-all"
          onClick={() => setSection("overview")}
        >
          Visão Geral
        </button>
        <button
          className="botao bg-[#e62143] text-white font-semibold px-8 py-4 text-xl rounded-lg shadow-md hover:bg-[#f0435f] transition-all"
          onClick={() => setSection("teams")}
        >
          Equipes
        </button>
        <button
          className="botao bg-[#e62143] text-white font-semibold px-8 py-4 text-xl rounded-lg shadow-md hover:bg-[#f0435f] transition-all"
          onClick={() => setSection("drivers")}
        >
          Pilotos
        </button>
        <button
          className="botao bg-[#e62143] text-white font-semibold px-8 py-4 text-xl rounded-lg shadow-md hover:bg-[#f0435f] transition-all"
          onClick={() => setSection("technology")}
        >
          Tecnologia
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
}
