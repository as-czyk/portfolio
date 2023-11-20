import React, { useTransition } from "react";
import { Section } from "../App";
import { AnchorElement } from "../Comps/AnchorElement";
import { Experience } from "../types";
import { useScrollCheck } from "../Hooks/useScrollHook";
import { useTranslation } from "react-i18next";

import "./ExperienceSection.scss";

export type ExperienceSectionProps = {
  entries: Array<Experience>;
  sectionId: Section;
  linkComp?: React.ReactElement;
  mobileHeader?: string;
};

export const ExperienceSection = (props: ExperienceSectionProps) => {
  const { entries, sectionId, linkComp = "", mobileHeader } = props;

  const isScrolled = useScrollCheck(sectionId + 'scroll');

  return (
    <div id={sectionId + 'scroll'} className="experienceSectionContainer">
      <header className={`mobileHeader ${isScrolled ? 'scrolled' : ''}`}>
        <h2>{mobileHeader}</h2>
      </header>
      {entries.map((experience: Experience, index) => {
        const Item = (
          <ExperienceItem
            key={`${experience.title}_${index}`}
            {...experience}
          />
        );

        if (experience?.isAnchor) {
          return (
            <AnchorElement
              key={`${sectionId}_${index}`}
              sectionId={sectionId}
            >
              {Item}
            </AnchorElement>
          );
        }

        return Item;
      })}
      {linkComp}
    </div>
  );
};

export const ExperienceItem = (props: Experience) => {
  const { startYear, endYear, description, link, title, tags, company } = props;
  const { t } = useTranslation()

  return (
    <section className="experienceContainer">
      <header className="experienceContainer__time">
        {startYear} - {endYear ?? "present"}
      </header>
      <main className="experienceContainer__content">
        <h3>
          {t(title)} ・ {company}
        </h3>
        <span style={{textAlign: 'justify'}}>{t(description)}</span>
        <div className={"singleTagContainer"}>
          {tags?.map((tag: string, index) => {
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

export const SingleTag = (props: { name: string }) => {
  const { name } = props;
  return <div className="singleTagContainer__tag">{name}</div>;
};
