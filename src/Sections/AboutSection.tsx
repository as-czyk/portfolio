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
        Hi there, it's Aron 👋 a self-taught coding maverick with an
        unquenchable thirst for adventure and all things tech. When I'm not in
        the code zone, I'm living life on the road, cheering for Eintracht
        Frankfurt, and dominating sports like tennis, golf, and running.
      </span>
      <span>
        My world revolves around tech, from cutting-edge gadgets to
        revolutionary breakthroughs. Plus, I'm a <b>university lecturer</b>,
        sharing my tech insights with the next wave of trailblazers.
      </span>
      <span>
        Welcome to my world - Explore my portfolio and let's ride the tech wave
        together! 🚀
      </span>
    </div>
  );
};
