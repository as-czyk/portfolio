import { Project as ProjectType } from "../types";
export const Project: Array<ProjectType> = [
  {
    title: "Projects.dd.title",
    description: "Projects.dd.description",
    link: "https://digitaldoctor.curalie.de/",
    img: "/img/digitalDoctor.png",
    tags: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "Projects.aa.title",
    description: "Projects.aa.description",
    link: "https://github.com/as-czyk/aws-playground",
    img: "/img/amplify.jpeg",
    isAnchor: true,
    tags: ["AWS", "Aplify", "React", "Cloud"],
  },
  {
    title: "Projects.pw.title",
    description: "Projects.pw.description",
    link: "",
    img: "/img/portfolioWebsite.png",
    isAnchor: true,
    tags: ["React", "Material UI", "GitHub Pages"],
  },
];
