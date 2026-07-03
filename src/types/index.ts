export type DifficultyType = "beginner" | "intermediate" | "advanced";

export interface LocalizedString {
  bn: string;
  en: string;
}

export interface CodeExplanation {
  line: number;
  text: LocalizedString;
}

export interface CodeBlockData {
  code: string;
  language: string;
  fileName: string;
  explanations?: CodeExplanation[];
}

export interface AIMentorNote {
  whyExists: LocalizedString;
  whyWorks: LocalizedString;
  professionalThinking: LocalizedString;
  mistakes: LocalizedString;
  debugging: LocalizedString;
  performance: LocalizedString;
}

export interface ChapterSection {
  id: string;
  title: LocalizedString;
  content: LocalizedString; // Rich markdown or HTML content
  codeBlock?: CodeBlockData;
  aiMentorNotes?: AIMentorNote;
}

export interface QuizQuestion {
  id: string;
  question: LocalizedString;
  options: LocalizedString[];
  correctAnswerIndex: number;
  explanation: LocalizedString;
}

export interface Assignment {
  title: LocalizedString;
  description: LocalizedString;
  starterCode?: string;
  solution: {
    code: string;
    explanation: LocalizedString;
  };
}

export interface InterviewQuestion {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface Chapter {
  id: string; // e.g., "chapter-0"
  number: number;
  title: LocalizedString;
  description: LocalizedString;
  difficulty: DifficultyType;
  readingTime: number; // in minutes
  objectives: LocalizedString[];
  sections: ChapterSection[];
  quizzes: QuizQuestion[];
  practice: LocalizedString[];
  assignment: Assignment;
  interviewQuestions: InterviewQuestion[];
}

export interface UserProgress {
  completedChapters: string[]; // array of chapter IDs
  currentStreak: number;
  lastActiveDate?: string;
  bookmarks: string[]; // array of section IDs or chapter IDs
}
