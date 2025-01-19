import React, { useState } from "react";
import QUESTIONS from "../questions.js";
const Quiz = () => {
  const [userAnswersAndQusetions, setUserAnswersAndQusetions] = useState([]);

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswersAndQusetions((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };
  const activeQusetionIndex = userAnswersAndQusetions.length;
  const displayQuestion = QUESTIONS[activeQusetionIndex].text;
  const answers = QUESTIONS[activeQusetionIndex].answers.map((answer) => {
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
