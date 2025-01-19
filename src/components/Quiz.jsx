import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import QuizComplete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

const Quiz = () => {
  const [userAnswersAndQuestions, setUserAnswersAndQuestions] = useState([]);

  const activeQuestionIndex = userAnswersAndQuestions.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswersAndQuestions((prevUserAnswers) => [
      ...prevUserAnswers,
      selectedAnswer,
    ]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={QuizComplete} alt="Quiz trophy" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        key={activeQuestionIndex}
        index={activeQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
