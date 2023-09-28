type Project = {
  link?: string;
  title: string;
  description: string;
  isAnchor?: boolean;
  tags: Array<string>;
  img: any;
};

export const Project: Array<Project> = [
  {
    title: "Digital Dcctor",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    link: "",
    img: "",
    tags: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "AWS Amplify",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    link: "",
    img: "",
    isAnchor: true,
    tags: ["AWS", "Aplify", "React"],
  },
];
