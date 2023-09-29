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
    title: "Digital Doctor",
    description:
      "The digital doctor is a mobile first web application that tackles the new field of video consultation. Integrating digital analytics with matomo, the app provides a full flow to book a video consultation with different specialists. ",
    link: "https://digitaldoctor.curalie.de/",
    img: "/img/digitalDoctor.png",
    tags: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "AWS Amplify",
    description:
      "The github reposiotry contains implementations for the authentication of the aws amplify service. Registering a user via email and password as well as via third party providers, the implementation also contains the password reset functionality.",
    link: "https://github.com/as-czyk/aws-playground",
    img: "/img/amplify.jpeg",
    isAnchor: true,
    tags: ["AWS", "Aplify", "React", "Cloud"],
  },
  {
    title: "Porfolio Website",
    description:
      "The Website you're currenlty looking at. Developed with react, deployed with GitHub pages, made with love  ❤️",
    link: "",
    img: "/img/portfolioWebsite.png",
    isAnchor: true,
    tags: ["React", "Material UI", "GitHub Pages"],
  },
];
