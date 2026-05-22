export type SyllabusArea = {
  id: string;
  title: string;
  description: string;
  examples: string[];
  route: string;
  status: "available" | "planned";
  lessonIds: string[];
};

export const syllabusAreas: SyllabusArea[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "How GCSE Maths questions work, how to choose methods, and how to show reasoning.",
    examples: ["Command words", "Showing working", "Checking answers", "Exam habits"],
    route: "#/lesson/intro-gcse-maths-toolkit",
    status: "available",
    lessonIds: ["lesson-000"],
  },
  {
    id: "number",
    title: "Number",
    description: "Integers, factors, fractions, decimals, percentages, indices, surds, estimation.",
    examples: ["Factors and multiples", "Standard form", "Exact values", "Rounding"],
    route: "#/unit/number",
    status: "planned",
    lessonIds: [],
  },
  {
    id: "ratio",
    title: "Ratio and Proportion",
    description: "Ratio calculations, direct and inverse proportion, rates of change, growth and decay.",
    examples: ["Best buys", "Scale recipes", "Speed", "Percentage change"],
    route: "#/unit/ratio",
    status: "planned",
    lessonIds: [],
  },
  {
    id: "algebra",
    title: "Algebra",
    description: "Expressions, formulae, equations, inequalities, functions, graphs, and sequences.",
    examples: ["Expanding brackets", "Solving equations", "Straight lines", "Nth term"],
    route: "#/unit/algebra",
    status: "planned",
    lessonIds: [],
  },
  {
    id: "geometry",
    title: "Geometry and Measures",
    description: "Angles, polygons, circles, transformations, vectors, similarity, area, volume.",
    examples: ["Angle facts", "Constructions", "Pythagoras", "Surface area"],
    route: "#/unit/geometry",
    status: "planned",
    lessonIds: [],
  },
  {
    id: "probability",
    title: "Probability",
    description: "Chance, experiments, combined events, and probability diagrams.",
    examples: ["Probability scales", "Tree diagrams", "Venn diagrams", "Expected frequency"],
    route: "#/unit/probability",
    status: "planned",
    lessonIds: [],
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "Sampling, charts, averages, spread, and interpreting data.",
    examples: ["Bar charts", "Scatter graphs", "Mean and median", "Box plots"],
    route: "#/unit/statistics",
    status: "planned",
    lessonIds: [],
  },
];
