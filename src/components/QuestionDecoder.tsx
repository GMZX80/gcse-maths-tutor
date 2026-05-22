import { useMemo, useState } from "react";
import type { PracticeQuestion } from "../content/lessonSchema";

type QuestionDecoderProps = {
  prompts: PracticeQuestion[];
};

export function QuestionDecoder({ prompts }: QuestionDecoderProps) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const prompt = prompts[index];

  const progress = useMemo(() => `${index + 1} of ${prompts.length}`, [index, prompts.length]);

  function nextPrompt() {
    setIndex((value) => (value + 1) % prompts.length);
    setRevealed(false);
  }

  return (
    <section className="lesson-band decoder" aria-labelledby="decoder-heading">
      <div className="section-heading">
        <p className="eyebrow">Interactive</p>
        <h2 id="decoder-heading">Decode a practice question</h2>
      </div>
      <div className="decoder-layout">
        <div className="question-panel">
          <div className="question-meta">
            <span>Structured prompt</span>
            <span>{progress}</span>
          </div>
          <p>{prompt.question}</p>
          <div className="button-row">
            <button type="button" onClick={() => setRevealed(true)}>
              Reveal marking notes
            </button>
            <button className="secondary" type="button" onClick={nextPrompt}>
              Try another
            </button>
          </div>
        </div>

        <div className={`answer-panel ${revealed ? "is-revealed" : ""}`} aria-live="polite">
          {revealed ? (
            <dl>
              <div>
                <dt>Marks</dt>
                <dd>{prompt.marks}</dd>
              </div>
              <div>
                <dt>Answer</dt>
                <dd>{prompt.answer}</dd>
              </div>
              <div>
                <dt>Marking notes</dt>
                <dd>{prompt.markingNotes.join(" ")}</dd>
              </div>
            </dl>
          ) : (
            <p>Before revealing it, decide what the question is asking you to do and what earns each mark.</p>
          )}
        </div>
      </div>
    </section>
  );
}
