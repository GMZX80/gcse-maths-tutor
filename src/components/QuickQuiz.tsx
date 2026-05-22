import { useState } from "react";
import type { CheckQuestion } from "../content/lessonSchema";

type QuickQuizProps = {
  questions: CheckQuestion[];
};

export function QuickQuiz({ questions }: QuickQuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const score = questions.reduce(
    (total, question, index) => total + (answers[index] === question.answerIndex ? 1 : 0),
    0,
  );
  const completed = Object.keys(answers).length === questions.length;

  return (
    <section className="lesson-band" aria-labelledby="quiz-heading">
      <div className="section-heading">
        <p className="eyebrow">Check</p>
        <h2 id="quiz-heading">Quick confidence check</h2>
      </div>
      <div className="quiz-list">
        {questions.map((question, questionIndex) => {
          const chosen = answers[questionIndex];
          return (
            <div className="quiz-item" key={question.question}>
              <p className="quiz-question">{question.question}</p>
              <div className="option-grid" role="group" aria-label={question.question}>
                {question.options.map((option, optionIndex) => {
                  const isChosen = chosen === optionIndex;
                  const isCorrect = question.answerIndex === optionIndex;
                  const className = [
                    "option-button",
                    isChosen ? "is-chosen" : "",
                    chosen !== undefined && isCorrect ? "is-correct" : "",
                    isChosen && !isCorrect ? "is-wrong" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <button
                      className={className}
                      key={option}
                      type="button"
                      onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {chosen !== undefined ? <p className="feedback">{question.feedback}</p> : null}
            </div>
          );
        })}
      </div>
      <div className="quiz-summary">
        <strong>{completed ? `Score: ${score}/${questions.length}` : "Answer every question to get your score."}</strong>
        <button className="secondary" type="button" onClick={() => setAnswers({})}>
          Reset
        </button>
      </div>
    </section>
  );
}
