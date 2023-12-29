import React, { useEffect, useState } from "react";
import Result from "./Results";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [data, setData] = useState(null);
  const [isSubmit, toggleSubmit] = useState(false);
  const [isResult, toggleResult] = useState(false);

  const questions = [
    {
      id: "1",
      question: "Is React is a single page application?",
      options: ["Yes", "No"],
      correctAns: "Yes"
    },
    {
      id: "2",
      question: "React uses Real DOM",
      options: ["Yes", "No"],
      correctAns: "No"
    },
    {
      id: "3",
      question: "JavaScript is dynamic language",
      options: ["Yes", "No"],
      correctAns: "Yes"
    }
  ];

  useEffect(() => {
    setData(questions[index]);
  }, [index, answer]);

  return (
    <div>
      <div className={isResult ? "Quiz-diable" : "Quiz"}>
        <div className="question-container">
          <div>{data?.question}</div>
          <div className="radio">
            {data?.options.map((ans, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  onChange={(e) => {
                    setAnswer(ans);
                  }}
                />
                <label
                  className={
                    isSubmit && answer === data?.correctAns
                      ? "green"
                      : isSubmit && answer !== data?.correctAns && "red"
                  }
                >
                  {ans}
                </label>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button
              type="button"
              onClick={() => {
                if (answer === data?.correctAns) {
                  setCorrectAnswers([...correctAnswers, answer]);
                }
                toggleSubmit(true);
              }}
            >
              Submit
            </button>
            <div
              className={
                !isSubmit && index !== questions?.length
                  ? "button-disabled"
                  : "button-container"
              }
            >
              <button
                type="button"
                onClick={() => {
                  if (index !== questions?.length) {
                    setIndex(index + 1);
                  } else {
                    toggleResult(true);
                    toggleSubmit(false);
                  }
                }}
                disabled={!isSubmit && index !== questions?.length}
              >
                {index === questions?.length ? "See Results" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isResult && (
        <Result
          questions={questions}
          setIndex={setIndex}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  );
};

export default Quiz;
