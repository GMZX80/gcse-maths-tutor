# Content Model

This project treats lessons as structured learning data. The React app should render lesson objects; lesson text should not be embedded directly in page components.

## Lesson File Location

Each lesson should live in `src/content/lessons/` and export one `Lesson` object.

Add new lessons to `src/content/lessons/index.ts` so routing, maps, and future search/indexing can discover them cleanly.

## Required Lesson Shape

Every lesson must follow `src/content/lessonSchema.ts` and include:

- `title`: concise student-facing lesson title.
- `examBoardSpecReference`: general specification mapping and paper context.
- `examBoardMappings`: board-specific overlays for OCR, AQA, Pearson Edexcel, Eduqas, WJEC Wales, and CCEA where relevant.
- `targetAgeStage`: intended age/stage, usually UK students aged 14-16 preparing for GCSE Maths.
- `learningObjectives`: what students should be able to do by the end.
- `priorKnowledge`: what students should already know.
- `explanation`: plain-English teaching paragraphs.
- `workedExamples`: modelled questions with method steps and final answer.
- `quickChecks`: short interactive multiple-choice checks.
- `practiceQuestions`: exam-style questions with marks, answers, and marking notes.
- `answersMarkingNotes`: lesson-level guidance on what earns marks.
- `commonMisconceptions`: mistakes to warn students about.
- `extensionChallenge`: one stretch task with support.

## Writing Style

- Write for UK school students aged around 14-16.
- Use direct, calm language. Avoid sounding like a textbook glossary.
- Keep explanations concrete: show the decision, not just the calculation.
- Prefer GCSE-style command phrasing: `work out`, `show that`, `estimate`, `explain`, `prove`, `compare`.
- Teach the shared GCSE concept once, then use exam-board overlays for specification references, paper structure notes, and board-style practice.
- Make marking notes explicit enough that they could become a teacher-facing or self-marking layer later.
- Keep each lesson focused. Add another lesson rather than overloading one page.

## Syllabus Routing

The syllabus map lives in `src/content/syllabus.ts`.

Each unit should have:

- a stable `id`
- a student-facing `title`
- a short `description`
- representative `examples`
- a `route`
- a `status` of `available` or `planned`
- linked `lessonIds`

Do not add many placeholder lessons just to fill the map. Add structured lessons when their content is ready.

## Future Aplailasain Migration

The content model should stay portable. Keep durable lesson content in typed data files, and keep React components focused on rendering and interaction. This separation should make it easier to move the lesson framework into Aplailasain later.
