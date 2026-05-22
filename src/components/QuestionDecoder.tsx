import { useMemo, useState } from "react";

type Prompt = {
  text: string;
  command: string;
  tool: string;
  hint: string;
};

const prompts: Prompt[] = [
  {
    text: "A train travels 84 miles in 1 hour 45 minutes. Work out its average speed in miles per hour.",
    command: "Work out",
    tool: "Rate calculation",
    hint: "Convert 1 hour 45 minutes into 1.75 hours, then use speed = distance / time.",
  },
  {
    text: "Show that 735 is divisible by 15.",
    command: "Show that",
    tool: "Divisibility and factors",
    hint: "To be divisible by 15, a number must be divisible by 3 and by 5.",
  },
  {
    text: "Estimate 49.8 x 19.7, showing your rounding.",
    command: "Estimate",
    tool: "Rounding and mental calculation",
    hint: "Round to numbers that are easy to multiply, such as 50 x 20.",
  },
  {
    text: "Explain why 3(n + 4) is not the same as 3n + 4.",
    command: "Explain why",
    tool: "Algebraic reasoning",
    hint: "The 3 multiplies everything inside the bracket, not just the n.",
  },
];

export function QuestionDecoder() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const prompt = prompts[index];

  const progress = useMemo(() => `${index + 1} of ${prompts.length}`, [index]);

  function nextPrompt() {
    setIndex((value) => (value + 1) % prompts.length);
    setRevealed(false);
  }

  return (
    <section className="lesson-band decoder" aria-labelledby="decoder-heading">
      <div className="section-heading">
        <p className="eyebrow">Interactive</p>
        <h2 id="decoder-heading">Decode an exam question</h2>
      </div>
      <div className="decoder-layout">
        <div className="question-panel">
          <div className="question-meta">
            <span>OCR-style prompt</span>
            <span>{progress}</span>
          </div>
          <p>{prompt.text}</p>
          <div className="button-row">
            <button type="button" onClick={() => setRevealed(true)}>
              Reveal thinking
            </button>
            <button className="secondary" type="button" onClick={nextPrompt}>
              Try another
            </button>
          </div>
        </div>

        <div className={`answer-panel ${revealed ? "is-revealed" : ""}`} aria-live="polite">
          {revealed ? (
            <>
              <dl>
                <div>
                  <dt>Command word</dt>
                  <dd>{prompt.command}</dd>
                </div>
                <div>
                  <dt>Maths tool</dt>
                  <dd>{prompt.tool}</dd>
                </div>
                <div>
                  <dt>First move</dt>
                  <dd>{prompt.hint}</dd>
                </div>
              </dl>
            </>
          ) : (
            <p>Before revealing it, decide what the question is asking you to do and which topic it belongs to.</p>
          )}
        </div>
      </div>
    </section>
  );
}
