export type SpecReference = {
  examBoard: string;
  qualification: string;
  specification: string;
  strand: string;
  paperContext: string;
};

export type ExamBoardId = "aqa" | "pearson-edexcel" | "ocr" | "eduqas" | "wjec-wales" | "ccea";

export type ExamBoardMapping = {
  boardId: ExamBoardId;
  boardName: string;
  qualification: string;
  specification: string;
  region: string;
  routeLabel: string;
  specFocus: string;
  assessmentNotes: string[];
  studentNotes: string[];
};

export type WorkedExample = {
  title: string;
  question: string;
  method: string[];
  answer: string;
};

export type CheckQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
  feedback: string;
};

export type PracticeQuestion = {
  question: string;
  marks: number;
  answer: string;
  markingNotes: string[];
};

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  examBoardSpecReference: SpecReference;
  examBoardMappings: ExamBoardMapping[];
  targetAgeStage: string;
  learningObjectives: string[];
  priorKnowledge: string[];
  explanation: string[];
  workedExamples: WorkedExample[];
  quickChecks: CheckQuestion[];
  practiceQuestions: PracticeQuestion[];
  answersMarkingNotes: string[];
  commonMisconceptions: string[];
  extensionChallenge: {
    title: string;
    prompt: string;
    support: string;
  };
  route: {
    unitId: string;
    order: number;
    previousLessonId?: string;
    nextLessonId?: string;
  };
};
