const QuizCard = ({ title, description, onClick }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 cursor-pointer" onClick={onClick}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default QuizCard;