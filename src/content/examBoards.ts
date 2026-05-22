import type { ExamBoardId, ExamBoardMapping } from "./lessonSchema";

export const examBoardOrder: ExamBoardId[] = [
  "ocr",
  "aqa",
  "pearson-edexcel",
  "eduqas",
  "wjec-wales",
  "ccea",
];

export const introductoryExamBoardMappings: ExamBoardMapping[] = [
  {
    boardId: "ocr",
    boardName: "OCR",
    qualification: "GCSE Mathematics",
    specification: "J560",
    region: "England",
    routeLabel: "OCR J560",
    specFocus: "Problem-solving habits apply across Foundation and Higher tiers.",
    assessmentNotes: [
      "The course has Foundation and Higher tier assessment routes.",
      "Students should expect reasoning, communication, and problem-solving across calculator and non-calculator contexts.",
    ],
    studentNotes: [
      "If your school says OCR, look for J560 on your specification or past paper.",
      "Use the general lesson first, then choose OCR-style practice when available.",
    ],
  },
  {
    boardId: "aqa",
    boardName: "AQA",
    qualification: "GCSE Mathematics",
    specification: "8300",
    region: "England",
    routeLabel: "AQA 8300",
    specFocus: "The same lesson maps to AQA's core strands: number, algebra, ratio, geometry, probability, and statistics.",
    assessmentNotes: [
      "AQA GCSE Mathematics uses Foundation and Higher tiers.",
      "The introduction should emphasise command words, method marks, and clear communication before board-specific practice is selected.",
    ],
    studentNotes: [
      "If your school says AQA, look for specification 8300.",
      "Use the general lesson first, then choose AQA-style practice when available.",
    ],
  },
  {
    boardId: "pearson-edexcel",
    boardName: "Pearson Edexcel",
    qualification: "GCSE Mathematics",
    specification: "1MA1",
    region: "England",
    routeLabel: "Pearson Edexcel 1MA1",
    specFocus: "Concept teaching can stay shared, with Edexcel-style practice added as a board variant.",
    assessmentNotes: [
      "Pearson Edexcel GCSE Mathematics uses Foundation and Higher tiers.",
      "Board-specific overlays should capture paper style and mark-scheme wording rather than duplicating the concept lesson.",
    ],
    studentNotes: [
      "If your school says Edexcel, Pearson, or Pearson Edexcel, look for 1MA1.",
      "The maths is the same; the exam-board tab helps you practise in the right style.",
    ],
  },
  {
    boardId: "eduqas",
    boardName: "Eduqas",
    qualification: "GCSE Mathematics",
    specification: "GCSE Mathematics",
    region: "England",
    routeLabel: "Eduqas GCSE Mathematics",
    specFocus: "Use the shared GCSE lesson, then surface Eduqas-specific paper structure and question style.",
    assessmentNotes: [
      "Eduqas is the WJEC brand used for qualifications offered in England.",
      "The board overlay should keep England/Eduqas details separate from WJEC Wales details.",
    ],
    studentNotes: [
      "If your school says Eduqas, do not assume every WJEC Wales detail applies to you.",
      "Use the Eduqas tab for paper structure and board-specific practice.",
    ],
  },
  {
    boardId: "wjec-wales",
    boardName: "WJEC Wales",
    qualification: "GCSE Mathematics",
    specification: "GCSE Mathematics",
    region: "Wales",
    routeLabel: "WJEC GCSE Mathematics",
    specFocus: "Keep Wales-specific GCSE Mathematics and Mathematics-Numeracy context visible as an overlay.",
    assessmentNotes: [
      "WJEC Wales has distinct Welsh qualification context and should not be collapsed into Eduqas.",
      "Future lessons should flag when a topic is also relevant to Mathematics-Numeracy style contexts.",
    ],
    studentNotes: [
      "If you are in Wales, your course may be WJEC rather than Eduqas.",
      "Some skills overlap strongly with England GCSE Maths, but the qualification context can differ.",
    ],
  },
  {
    boardId: "ccea",
    boardName: "CCEA",
    qualification: "GCSE Mathematics",
    specification: "GCSE Mathematics from 2017",
    region: "Northern Ireland",
    routeLabel: "CCEA GCSE Mathematics",
    specFocus: "Use the shared concept lesson, then add Northern Ireland/CCEA unit and tier context.",
    assessmentNotes: [
      "CCEA GCSE Mathematics has Foundation and Higher tiers and unit-based assessment routes.",
      "Future practice sets should reflect CCEA wording and unit structure where it differs from England boards.",
    ],
    studentNotes: [
      "If you are in Northern Ireland, your school may use CCEA.",
      "The concept explanation still helps, but use CCEA-specific practice when available.",
    ],
  },
];
