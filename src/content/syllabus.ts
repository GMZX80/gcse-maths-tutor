export type SyllabusArea = {
  id: string;
  title: string;
  description: string;
  examples: string[];
};

export const syllabusAreas: SyllabusArea[] = [
  {
    id: "number",
    title: "Number",
    description: "Integers, factors, fractions, decimals, percentages, indices, surds, estimation.",
    examples: ["Factors and multiples", "Standard form", "Exact values", "Rounding"],
  },
  {
    id: "ratio",
    title: "Ratio and Proportion",
    description: "Ratio calculations, direct and inverse proportion, rates of change, growth and decay.",
    examples: ["Best buys", "Scale recipes", "Speed", "Percentage change"],
  },
  {
    id: "algebra",
    title: "Algebra",
    description: "Expressions, formulae, equations, inequalities, functions, graphs, and sequences.",
    examples: ["Expanding brackets", "Solving equations", "Straight lines", "Nth term"],
  },
  {
    id: "geometry",
    title: "Geometry and Measures",
    description: "Angles, polygons, circles, transformations, vectors, similarity, area, volume.",
    examples: ["Angle facts", "Constructions", "Pythagoras", "Surface area"],
  },
  {
    id: "probability",
    title: "Probability",
    description: "Chance, experiments, combined events, and probability diagrams.",
    examples: ["Probability scales", "Tree diagrams", "Venn diagrams", "Expected frequency"],
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "Sampling, charts, averages, spread, and interpreting data.",
    examples: ["Bar charts", "Scatter graphs", "Mean and median", "Box plots"],
  },
];

export const lessonSteps = [
  "Read the question slowly.",
  "Underline the command word.",
  "Choose the maths tool.",
  "Show clear working.",
  "Check whether the answer makes sense.",
];
