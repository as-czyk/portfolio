import React from "react";
import { Section } from "../App";

import "./AboutSection.scss";

export const AboutSection = () => {
  return (
    <div
      id={Section.ABOUT}
      className="aboutSectionContainer"
    >
      <section>
        Hi there, it's Aron 👋 a self-taught coding maverick with an
        unquenchable thirst for adventure and all things tech.
      </section>
      <section>
        My world revolves around tech, from cutting-edge gadgets to
        revolutionary breakthroughs. These days my focus centers around the{" "}
        <b>JavaScript Ecosystem</b>.
      </section>
      <section>
        In the context of medical software, I use TypeScript and React to create
        responsive web applications for{" "}
        <b onClick={() => window.open("https://www.curalie.de", "_blank")}>
          Curalie
        </b>{" "}
        . Plus, I'm a <b>university lecturer</b>, sharing my tech insights with
        the next wave of trailblazers.
      </section>
      <section>
        When I'm not in the code zone, I'm <b>living life on the road</b>,
        cheering for Eintracht Frankfurt, and doing sports like tennis, golf,
        and running. Welcome to my world - have fun exploring my portfolio 🚀
      </section>
    </div>
  );
};
