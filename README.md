# GCSE Maths Tutor

Interactive GCSE Maths lessons for UK students aged around 14-16, with exam-board overlays for OCR, AQA, Pearson Edexcel, Eduqas, WJEC Wales, and CCEA.

Live site:

https://gmzx80.github.io/ocr-gcse-maths-tutor/

## Purpose

This project is a reusable syllabus-and-lesson framework, not just a single web page. Lessons are stored as structured TypeScript data and rendered through shared components so the content can grow into full GCSE Maths coverage and later move into Aplailasain.

## Lesson Structure

Each lesson uses a typed schema with:

- title
- exam board/spec reference
- exam-board overlays
- target age/stage
- learning objectives
- prior knowledge
- explanation
- worked examples
- quick checks
- practice questions
- answers/marking notes
- common misconceptions
- extension challenge

Current lesson data lives in:

```text
src/content/lessons/
```

The reusable schema lives in:

```text
src/content/lessonSchema.ts
```

Authoring guidance lives in:

```text
CONTENT_MODEL.md
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Generated with Cleon assistance.
