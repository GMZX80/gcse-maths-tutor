import type { Lesson } from "../lessonSchema";
import { introToGcseMaths } from "./introToGcseMaths";

export const lessons: Lesson[] = [introToGcseMaths];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
