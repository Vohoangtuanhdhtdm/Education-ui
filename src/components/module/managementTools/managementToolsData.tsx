import {
  BookMarked,
  Target,
  MessagesSquare,
  Ticket,
  PenSquare,
} from "lucide-react";
import type { ElementType } from "react";

export interface Tool {
  id: number;
  category: string;
  title: string;
  description: string;
  bgColor: string;
  icon: ElementType;
  link?: string; // Optional link for navigation
}

export const toolsData: Tool[] = [
  {
    id: 1,
    category: "Lesson Design",
    title: "Lesson Plan",
    description:
      "Design structured lesson plans tailored to your curriculum, ensuring alignment with educational goals.",
    bgColor: "bg-pink-100",
    icon: BookMarked,
    link: "/teacher/tools/createLesson",
  },
  {
    id: 2,
    category: "Assessment",
    title: "Learning Objective(s)",
    description:
      "Set clear, measurable objectives to guide instruction and evaluate student progress effectively.",
    bgColor: "bg-green-100",
    icon: Target,
  },
  {
    id: 3,
    category: "Engagement",
    title: "Discussion Prompts",
    description:
      "Generate thought-provoking prompts to foster engaging and meaningful classroom discussions.",
    bgColor: "bg-purple-100",
    icon: MessagesSquare,
  },
  {
    id: 4,
    category: "Assessment",
    title: "Exit Ticket",
    description:
      "Create concise end-of-lesson assessments to gauge student understanding and retention.",
    bgColor: "bg-blue-100",
    icon: Ticket,
  },
  {
    id: 5,
    category: "Goal Setting",
    title: "SMART Goal Writer",
    description:
      "Formulate specific, measurable, achievable, relevant, and time-bound goals for students.",
    bgColor: "bg-yellow-100",
    icon: PenSquare,
  },
];

export const categories = [
  "All",
  "Lesson Design",
  "Assessment",
  "Engagement",
  "Goal Setting",
];
