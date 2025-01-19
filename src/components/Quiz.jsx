import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import QuizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswersAndQuestions, setUserAnswersAndQuestions] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === ""
      ? userAnswersAndQuestions.length
      : userAnswersAndQuestions.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");
      setUserAnswersAndQuestions((prevUserAnswers) => [
        ...prevUserAnswers,
        selectedAnswer,
      ]);
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected =
              userAnswersAndQuestions[userAnswersAndQuestions.length - 1] ===
              answer;
            let cssClasses;
            if (answerState === "answered" && isSelected) {
              cssClasses = "selected";
            }
            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClasses = answerState;
            }
            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClasses}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
