import React from "react";
import { AnchorElement } from "../Comps/AnchorElement";
import { SingleTag } from "./ExperienceSection";
import { Project } from "../types";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import "./ProjectSection.scss";

type ProjectSectionProps = {
  entries: Array<Project>;
  sectionId: string;
  mobileHeader?: string;
};

export const ProjectSection = (props: ProjectSectionProps) => {
  const { entries, sectionId, mobileHeader } = props;

  return (
    <div className="projectSectionContainer">
      <h2 className="mobileHeader">{mobileHeader}</h2>
      {Object.values(entries).map((element, index) => {
        const Item = <ProjectItem {...element} />;

        if (element?.isAnchor) {
          return <AnchorElement sectionId={sectionId}>{Item}</AnchorElement>;
        }

        return Item;
      })}
    </div>
  );
};

const ProjectItem = (props: Project) => {
  const { title, description, img, link, tags } = props;

  return (
    <section
      onClick={() => window.open(link, "_blank")}
      className="projectContainer"
    >
      <div className="projectContainer__img">
        <img
          className="projectContainer__img--image"
          src={process.env.PUBLIC_URL + img}
          alt={title}
        />
      </div>
      <main className="projectContainer__content">
        <header className="projectContainer__content--title">
          <h3>{title}</h3>
          <ArrowOutwardIcon sx={{ fontSize: 20 }} />
        </header>
        <span>{description}</span>
        <div className="singleTagContainer">
          {tags.map((tag: string, index: number) => {
            return (
              <SingleTag
                key={`${tag}_${index}`}
                name={tag}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};
