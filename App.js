import { useState } from "react";
import Quiz from "./Quiz";
import "./styles.css";

export default function App() {
  const [isQuestionOpen, toggleQuestionOpen] = useState(false);

  return (
    <div>
      <div className={isQuestionOpen ? "App-hidden" : "App"}>
        <div className="title">Welcome To EDSTEM Technologies!</div>
        <div className="button">
          <button type="button" onClick={() => toggleQuestionOpen(true)}>
            Start Quiz
          </button>
        </div>
      </div>
      {isQuestionOpen && <Quiz />}
    </div>
  );
}
