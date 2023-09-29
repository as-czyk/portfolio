import { ReactElement } from "react";

type Project = {
  link?: string;
  title: string;
  description: string;
  isAnchor?: boolean;
  tags: Array<string>;
  img: string;
};

export const Project: Array<Project> = [
  {
    title: "Digital Dcctor",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    link: "https://digitaldoctor.curalie.de/",
    img: "/img/digitalDoctor.png",
    tags: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "AWS Amplify",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    link: "https://github.com/as-czyk/aws-playground",
    img: "/img/amplify.jpeg",
    isAnchor: true,
    tags: ["AWS", "Aplify", "React", "Cloud"],
  },
  {
    title: "Porfolio Website",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    link: "",
    img: "/img/portfolioWebsite.png",
    isAnchor: true,
    tags: ["React", "Material UI", "GitHub Pages"],
  },
];
