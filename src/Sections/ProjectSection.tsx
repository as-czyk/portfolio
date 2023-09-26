import { Section } from "../App";
import React from "react";
import { AboutSection } from "./AboutSection";
import { AnchorElement } from "../Comps/AnchorElement";

export const ProjectSection = (props: any) => {
  return (
    <div className="projectSectionContainer">
      <div style={{ height: "20rem", border: "1px solid green" }}>
        Project One
      </div>
      <AnchorElement sectionId={Section.PROJECT}>
        <div style={{ height: "20rem", border: "1px solid green" }}>
          Project Two
        </div>
      </AnchorElement>
      <div style={{ height: "20rem", border: "1px solid green" }}>
        Project Three
      </div>
    </div>
  );
};
