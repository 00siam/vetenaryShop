import React, { useState } from "react";
import Nav from "../NabBar/Nav";
import "./quizGame.css";

const QuizGame = () => {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, answer: "New York City", isCorrect: false },
        { id: 1, answer: "Boston", isCorrect: false },
        { id: 2, answer: "Santa Fe", isCorrect: false },
        { id: 3, answer: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, answer: "1787", isCorrect: true },
        { id: 1, answer: "1776", isCorrect: false },
        { id: 2, answer: "1774", isCorrect: false },
        { id: 3, answer: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, answer: "John Adams", isCorrect: true },
        { id: 1, answer: "Paul Revere", isCorrect: false },
        { id: 2, answer: "Thomas Jefferson", isCorrect: false },
        { id: 3, answer: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, answer: "California", isCorrect: false },
        { id: 1, answer: "Alaska", isCorrect: true },
        { id: 2, answer: "Texas", isCorrect: false },
        { id: 3, answer: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, answer: "Canada", isCorrect: false },
        { id: 1, answer: "Russia", isCorrect: true },
        { id: 2, answer: "Cuba", isCorrect: true },
        { id: 3, answer: "Mexico", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {

    // Increment the score
    if (isCorrect) {
      setScore( score + 1 );
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <>
      <Nav />

      {/* heading */}
      <div className="container">
        <h2 style={{ color: "orange", marginTop: 80 }}> Quiz Game</h2>
      </div>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (

        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            {/* Dynamic  */}
            { <p> Question: { currentQuestion+1 } out of {questions.length} </p> }
           
          </h2>

           {/* Question show  */}
          <h3 className="question-text">{ questions[currentQuestion].text }</h3>

          {/* List of possible answers  */}
          <ul>
            { questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={ ()=>optionClicked(option.isCorrect) }
                >
                  { option.answer }
                </li>
              );
            }) }
          </ul>
        </div>
      )}
    </>
  );
};

export default QuizGame;
