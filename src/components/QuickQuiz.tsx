import { useState } from "react";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  feedback: string;
};

const questions: QuizQuestion[] = [
  {
    question: "Which first step is most useful when a GCSE Maths question looks wordy?",
    options: ["Guess the topic", "Read it once and start calculating", "Find the command word and given information"],
    answer: 2,
    feedback: "The command word tells you whether to calculate, show, prove, estimate, compare, or explain.",
  },
  {
    question: "OCR GCSE Maths questions can test topics on which paper?",
    options: ["Only the non-calculator paper", "Any paper", "Only Paper 1"],
    answer: 1,
    feedback: "OCR says topics may be assessed on any paper, so the learning path needs mixed practice.",
  },
  {
    question: "What does 'show that' usually mean?",
    options: ["Give only the final answer", "Write convincing steps that lead to the statement", "Draw a neat diagram"],
    answer: 1,
    feedback: "For 'show that', the marks are usually in the reasoning, not just the result.",
  },
];

export function QuickQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const score = questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
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
                  const isCorrect = question.answer === optionIndex;
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
        <strong>{completed ? `Score: ${score}/${questions.length}` : "Answer all three to get your score."}</strong>
        <button className="secondary" type="button" onClick={() => setAnswers({})}>
          Reset
        </button>
      </div>
    </section>
  );
}
