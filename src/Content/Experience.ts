import { Experience as ExperienceType } from "../types";

export const Experience: Array<ExperienceType> = [
  {
    startYear: 2020,
    title: "Experience.ml.title",
    company: "Medulife",
    description: "Experience.ml.description",
    tags: ["React", "TypeScript", "JavaScript", "SCSS", "Java"],
  },
  {
    startYear: 2017,
    endYear: 2020,
    title: "Experience.ibm.title",
    company: "IBM",
    description: "Experience.ibm.description",
    tags: ["BPM", "ODM", "Automated Testing", "NodeJS", "Iconic", "Scrum"],
  },
  {
    startYear: 2016,
    endYear: 2017,
    title: "Experience.mm.title",
    company: "Miles & More",
    description: "Experience.mm.description",
    tags: [
      "eCommerce",
      "Digital Analytics",
      "eTracker",
      "Content Management",
      "Makreting",
    ],
    isAnchor: true,
  },
];
