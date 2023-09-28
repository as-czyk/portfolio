import React from "react";
import { Section } from "../App";

import "./AboutSection.scss";

export const AboutSection = () => {
  return (
    <div
      id={Section.ABOUT}
      className="aboutSectionContainer"
    >
      <span>
        Hi, it's Aron, Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore
      </span>
      <span>
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet
      </span>
      <span>
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet.
      </span>
    </div>
  );
};
