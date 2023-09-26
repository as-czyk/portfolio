import React from "react";

import { Section } from "../App";
import "./ExperienceSection.scss";

export type Experience = {
  startYear: number;
  endYear?: number;
  title: string;
  description: string;
  company: string;
  link: string;
  tags: Array<string>;
};

type ExperienceSectionProps = {
  entries: Array<Experience>;
  sectionId: Section;
};

export const ExperienceSection = (props: ExperienceSectionProps) => {
  const { entries, sectionId } = props;
  return (
    <div className="experienceSectionContainer">
      {entries.map((experience: Experience, index) => {
        if (index === 1) {
          return (
            <>
              <div
                id={sectionId}
                //style={{ display: "none" }}
              />
              <ExperienceItem
                key={`${experience.title}_${index}`}
                {...experience}
              />
            </>
          );
        }

        return (
          <ExperienceItem
            key={`${experience.title}_${index}`}
            {...experience}
          />
        );
      })}
    </div>
  );
};

export const ExperienceItem = (props: Experience) => {
  const { startYear, endYear, description, link, title, tags, company } = props;

  return (
    <div className="experienceContainer">
      <div className="experienceContainer__time">
        {startYear} - {endYear ?? "present"}
      </div>
      <div className="experienceContainer__content">
        <span>
          {title} {company}
        </span>
        <span>{description}</span>
        <div className={"singleTagContainer"}>
          {tags.map((tag: string, index) => {
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

const SingleTag = (props: { name: string }) => {
  const { name } = props;
  return <div className="singleTagContainer__tag">{name}</div>;
};
