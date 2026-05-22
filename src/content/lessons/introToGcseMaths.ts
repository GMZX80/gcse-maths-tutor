import type { Lesson } from "../lessonSchema";

export const introToGcseMaths: Lesson = {
  id: "lesson-000",
  slug: "intro-gcse-maths-toolkit",
  title: "GCSE Maths is a toolkit, not a memory test",
  subtitle:
    "Learn how to approach OCR GCSE Maths questions by spotting the command word, choosing a method, and showing clear working.",
  examBoardSpecReference: {
    examBoard: "OCR",
    qualification: "GCSE Mathematics",
    specification: "J560",
    strand: "Course introduction and problem-solving habits",
    paperContext: "Applies across Foundation and Higher tier calculator and non-calculator papers.",
  },
  targetAgeStage: "UK school students aged 14-16 preparing for GCSE Maths",
  learningObjectives: [
    "Understand that GCSE Maths questions test decisions as well as facts.",
    "Use command words such as work out, show that, estimate, and explain to choose a response style.",
    "Follow a repeatable five-step approach for unfamiliar questions.",
    "Recognise the main OCR GCSE Maths content areas and how this course will be organised.",
  ],
  priorKnowledge: [
    "Basic arithmetic with whole numbers.",
    "Experience answering short maths questions in school.",
    "No detailed OCR specification knowledge is needed yet.",
  ],
  explanation: [
    "A GCSE Maths question is often testing two things at once: the topic you know and the decision you make. The trick is to slow down at the start, spot what kind of question it is, then choose a method you can explain clearly.",
    "That matters for OCR because calculator and non-calculator papers both include problem solving. The same topic can appear in different forms, so this course practises concepts, methods, and exam-style decisions together.",
    "A good first routine is: read the question slowly, underline the command word, choose the maths tool, show clear working, then check whether the answer makes sense.",
  ],
  workedExamples: [
    {
      title: "A simple first question",
      question: "Show that 735 is divisible by 15.",
      method: [
        "The phrase show that means the answer is already suggested. Your job is to write the reasoning clearly enough that someone else can follow it.",
        "15 = 3 x 5.",
        "735 ends in 5, so it is divisible by 5.",
        "7 + 3 + 5 = 15, and 15 is divisible by 3.",
      ],
      answer: "735 is divisible by both 3 and 5, which means it is divisible by 15.",
    },
  ],
  quickChecks: [
    {
      question: "Which first step is most useful when a GCSE Maths question looks wordy?",
      options: ["Guess the topic", "Read it once and start calculating", "Find the command word and given information"],
      answerIndex: 2,
      feedback: "The command word tells you whether to calculate, show, prove, estimate, compare, or explain.",
    },
    {
      question: "OCR GCSE Maths questions can test topics on which paper?",
      options: ["Only the non-calculator paper", "Any paper", "Only Paper 1"],
      answerIndex: 1,
      feedback: "Topics may be assessed in different paper contexts, so mixed practice matters.",
    },
    {
      question: "What does show that usually mean?",
      options: ["Give only the final answer", "Write convincing steps that lead to the statement", "Draw a neat diagram"],
      answerIndex: 1,
      feedback: "For show that, the marks are usually in the reasoning, not just the result.",
    },
  ],
  practiceQuestions: [
    {
      question: "Show that 468 is divisible by 12.",
      marks: 2,
      answer: "468 is divisible by 12 because it is divisible by both 3 and 4.",
      markingNotes: [
        "1 mark for showing 4 + 6 + 8 = 18, so 468 is divisible by 3.",
        "1 mark for showing the last two digits, 68, are divisible by 4, so 468 is divisible by 4.",
      ],
    },
    {
      question: "Estimate 49.8 x 19.7, showing your rounding.",
      marks: 2,
      answer: "49.8 x 19.7 is approximately 50 x 20 = 1000.",
      markingNotes: [
        "1 mark for sensible rounding to 50 and 20.",
        "1 mark for multiplying the rounded values correctly.",
      ],
    },
  ],
  answersMarkingNotes: [
    "Reward clear mathematical reasoning over unexplained final answers.",
    "For show that questions, the result alone is not enough: students must justify why it is true.",
    "For estimates, accept nearby sensible rounding if the working is consistent.",
  ],
  commonMisconceptions: [
    "Starting calculations before identifying what the question is asking.",
    "Treating show that as if only the final answer matters.",
    "Forgetting to include units or context when the question is a word problem.",
    "Assuming calculator and non-calculator papers test completely separate topics.",
  ],
  extensionChallenge: {
    title: "Write your own exam-style prompt",
    prompt:
      "Write a two-mark question using one of these command words: work out, show that, estimate, explain. Then write the marking notes for it.",
    support:
      "A strong marking note says exactly what earns each mark, for example a method mark and an accuracy mark.",
  },
  route: {
    unitId: "getting-started",
    order: 0,
    nextLessonId: "number-factors-multiples",
  },
};
