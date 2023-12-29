import React, { useState } from "react";
import Quiz from "./Quiz";
import "./Result.css";

const Results = ({ setIndex, questions, correctAnswers }) => {
  const [isPlayAgain, togglePlayAgain] = useState(false);
  return (
    <div>
      <div className={isPlayAgain ? "Result-hidden" : "Result"}>
        <div className="Result-container">
          <div>
            <div className="data-container">
              <div>{"Total number of questions" + " - "}</div>
              <div>{questions?.length}</div>
            </div>
            <div className="data-container">
              <div>{"Total correct answers" + " - "}</div>
              <div>{correctAnswers?.length}</div>
            </div>
          </div>
          <div className="button">
            <button
              type="button"
              onClick={() => {
                setIndex(0);
                togglePlayAgain(true);
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
      {isPlayAgain && <Quiz />}
    </div>
  );
};

export default Results;
