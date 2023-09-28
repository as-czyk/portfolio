import React from "react";
import { AnchorElement } from "../Comps/AnchorElement";
import { SingleTag } from "./ExperienceSection";

import "./ProjectSection.scss";

type ProjectSectionProps = {
  entries: Array<any>;
  sectionId: string;
};

export const ProjectSection = (props: ProjectSectionProps) => {
  const { entries, sectionId } = props;

  return (
    <div className="projectSectionContainer">
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

const ProjectItem = (props: any) => {
  const { title, description, img, link, tags } = props;

  return (
    <div className="projectContainer">
      <div className="projectContainer__img">Image</div>
      <div className="projectContainer__content">
        <span>{title}</span>
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
      </div>
    </div>
  );
};
