import React, { useState } from "react";
import QUESTIONS from "../questions.js";
import QuizComplete from "../assets/quiz-complete.png";
const Quiz = () => {
  const [userAnswersAndQusetions, setUserAnswersAndQusetions] = useState([]);
  const activeQusetionIndex = userAnswersAndQusetions.length;

  const quizIsComplete = activeQusetionIndex === QUESTIONS.length;
  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswersAndQusetions((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  if (quizIsComplete) {
    return (
      <div id="summary">
        <h2>Quiz completed</h2>
        <img src={QuizComplete} alt="Quiz trophy" />
      </div>
    );
  }

  const displayQuestion = QUESTIONS[activeQusetionIndex].text;
  const shuffledAnswers = [...QUESTIONS[activeQusetionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  const answers = shuffledAnswers.map((answer) => {
    return (
      <li key={answer} className="answer">
        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
      </li>
    );
  });

  return (
    <div id="quiz">
      <div id="question">
        <h2>{displayQuestion}</h2>
        <ul id="answers">{answers}</ul>
      </div>
    </div>
  );
};

export default Quiz;
