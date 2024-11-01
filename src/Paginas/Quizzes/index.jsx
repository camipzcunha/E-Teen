import React, { useEffect, useState } from 'react';
import QuizCard from '../../Components/QuizCard';
import quizzesData from '../../Components/QuizCard/quizzesData.json';

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Simulando a chamada a uma API
    setQuizzes(quizzesData);
  }, []);

  const handleQuizClick = (quiz) => {
    // Aqui você pode redirecionar para uma página do quiz ou mostrar as perguntas em um modal
    console.log(`Iniciando o quiz: ${quiz.title}`);
    // Para fins de demonstração, você pode adicionar a lógica para abrir um modal com perguntas aqui.
  };

  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-10">Quizzes da Fórmula E</h1>
      {quizzes.map((quiz) => (
        <QuizCard
          key={quiz.id}
          title={quiz.title}
          description={quiz.description}
          onClick={() => handleQuizClick(quiz)}
        />
      ))}
    </div>
  );
};

export default QuizPage;
