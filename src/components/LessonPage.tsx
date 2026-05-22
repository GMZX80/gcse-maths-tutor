import type { Lesson } from "../content/lessonSchema";
import { QuestionDecoder } from "./QuestionDecoder";
import { QuickQuiz } from "./QuickQuiz";
import { SyllabusMap } from "./SyllabusMap";

type LessonPageProps = {
  lesson: Lesson;
};

export function LessonPage({ lesson }: LessonPageProps) {
  const reference = lesson.examBoardSpecReference;

  return (
    <>
      <section className="intro">
        <div className="intro-copy">
          <p className="eyebrow">Lesson route: {lesson.route.unitId}</p>
          <h1>{lesson.title}.</h1>
          <p className="lead">{lesson.subtitle}</p>
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

      <section className="lesson-band lesson-meta" id="lesson-start" aria-labelledby="lesson-heading">
        <div className="section-heading">
          <p className="eyebrow">
            {reference.examBoard} {reference.specification}
          </p>
          <h2 id="lesson-heading">{lesson.title}</h2>
        </div>
        <div className="meta-grid">
          <article>
            <h3>Spec reference</h3>
            <p>
              {reference.qualification} {reference.specification}: {reference.strand}
            </p>
            <p>{reference.paperContext}</p>
          </article>
          <article>
            <h3>Target age/stage</h3>
            <p>{lesson.targetAgeStage}</p>
          </article>
          <article>
            <h3>Prior knowledge</h3>
            <ul>
              {lesson.priorKnowledge.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="lesson-band split" aria-labelledby="objectives-heading">
        <div className="section-heading">
          <p className="eyebrow">Objectives</p>
          <h2 id="objectives-heading">What this lesson is for</h2>
        </div>
        <div className="lesson-copy">
          {lesson.explanation.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ol className="step-list">
          {lesson.learningObjectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ol>
      </section>

      <QuestionDecoder prompts={lesson.practiceQuestions} />
      <SyllabusMap />

      <section className="lesson-band worked-example" aria-labelledby="example-heading">
        <div className="section-heading">
          <p className="eyebrow">Worked examples</p>
          <h2 id="example-heading">Modelled reasoning</h2>
        </div>
        <div className="example-stack">
          {lesson.workedExamples.map((example) => (
            <article className="example-layout" key={example.title}>
              <div>
                <h3>{example.title}</h3>
                <p className="example-question">{example.question}</p>
                {example.method.map((step) => (
                  <p key={step}>{step}</p>
                ))}
              </div>
              <div className="method-box">
                <p>{example.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <QuickQuiz questions={lesson.quickChecks} />

      <section className="lesson-band" aria-labelledby="practice-heading">
        <div className="section-heading">
          <p className="eyebrow">Practice</p>
          <h2 id="practice-heading">Questions and marking notes</h2>
        </div>
        <div className="practice-grid">
          {lesson.practiceQuestions.map((question) => (
            <article className="practice-card" key={question.question}>
              <h3>{question.marks} marks</h3>
              <p className="quiz-question">{question.question}</p>
              <details>
                <summary>Show answer and marking notes</summary>
                <p>{question.answer}</p>
                <ul>
                  {question.markingNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-band two-column" aria-labelledby="misconceptions-heading">
        <div>
          <p className="eyebrow">Watch out</p>
          <h2 id="misconceptions-heading">Common misconceptions</h2>
          <ul className="plain-list">
            {lesson.commonMisconceptions.map((misconception) => (
              <li key={misconception}>{misconception}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Extension</p>
          <h2>{lesson.extensionChallenge.title}</h2>
          <p>{lesson.extensionChallenge.prompt}</p>
          <p className="support-note">{lesson.extensionChallenge.support}</p>
        </div>
      </section>

      <section className="next-lesson" aria-label="Next lesson">
        <p className="eyebrow">Next</p>
        <h2>{lesson.route.nextLessonId ? "The next lesson will start the Number strand." : "More lessons are planned."}</h2>
        <p>
          The framework is ready for new structured lessons to be added without rewriting the page
          layout.
        </p>
      </section>
    </>
  );
}
