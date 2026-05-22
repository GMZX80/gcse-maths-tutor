import { QuestionDecoder } from "./components/QuestionDecoder";
import { QuickQuiz } from "./components/QuickQuiz";
import { SyllabusMap } from "./components/SyllabusMap";
import { lessonSteps } from "./content/syllabus";
import "./styles/app.css";

export default function App() {
  return (
    <main>
      <section className="intro">
        <div className="intro-copy">
          <p className="eyebrow">Introductory lesson</p>
          <h1>GCSE Maths is a toolkit, not a memory test.</h1>
          <p className="lead">
            This first OCR GCSE Maths lesson helps you understand what the course is asking for:
            clear methods, sensible choices, and confidence with unfamiliar questions.
          </p>
          <div className="intro-actions">
            <a className="primary-link" href="#lesson-start">
              Start the lesson
            </a>
            <a className="secondary-link" href="#map-heading">
              See the syllabus map
            </a>
          </div>
        </div>
        <div className="toolkit-visual" aria-label="A visual toolkit showing the main GCSE Maths skill types">
          <div className="orbit orbit-one">
            <span>Number</span>
          </div>
          <div className="orbit orbit-two">
            <span>Algebra</span>
          </div>
          <div className="orbit orbit-three">
            <span>Geometry</span>
          </div>
          <div className="toolkit-core">
            <strong>Problem</strong>
            <span>choose the right tool</span>
          </div>
        </div>
      </section>

      <section className="lesson-band split" id="lesson-start" aria-labelledby="first-heading">
        <div className="section-heading">
          <p className="eyebrow">Lesson 0</p>
          <h2 id="first-heading">How to approach GCSE Maths questions</h2>
        </div>
        <div className="lesson-copy">
          <p>
            A GCSE Maths question is often testing two things at once: the topic you know and the
            decision you make. The trick is to slow down at the start, spot what kind of question it
            is, then choose a method you can explain clearly.
          </p>
          <p>
            That matters for OCR because calculator and non-calculator papers both include problem
            solving. The same topic can appear in different forms, so this course will practise
            concepts, methods, and exam-style decisions together.
          </p>
        </div>
        <ol className="step-list">
          {lessonSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <QuestionDecoder />
      <SyllabusMap />

      <section className="lesson-band worked-example" aria-labelledby="example-heading">
        <div className="section-heading">
          <p className="eyebrow">Worked example</p>
          <h2 id="example-heading">A simple first question</h2>
        </div>
        <div className="example-layout">
          <div>
            <p className="example-question">
              Show that <strong>735</strong> is divisible by <strong>15</strong>.
            </p>
            <p>
              The phrase <strong>show that</strong> means the answer is already suggested. Your job
              is to write the reasoning clearly enough that someone else can follow it.
            </p>
          </div>
          <div className="method-box">
            <p>15 = 3 x 5</p>
            <p>735 ends in 5, so it is divisible by 5.</p>
            <p>7 + 3 + 5 = 15, and 15 is divisible by 3.</p>
            <p>So 735 is divisible by both 3 and 5, which means it is divisible by 15.</p>
          </div>
        </div>
      </section>

      <QuickQuiz />

      <section className="next-lesson" aria-label="Next lesson">
        <p className="eyebrow">Next</p>
        <h2>Lesson 1 will start the Number strand.</h2>
        <p>
          We will cover factors, multiples, primes, and divisibility, then connect them to fractions
          and exam-style problem solving.
        </p>
      </section>
    </main>
  );
}
