import React from "react";
import { AnchorElement } from "../Comps/AnchorElement";
import { SingleTag } from "./ExperienceSection";
import { Project } from "../types";
import { useScrollCheck } from "../Hooks/useScrollHook";
import { useTranslation } from "react-i18next";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import "./ProjectSection.scss";

type ProjectSectionProps = {
  entries: Array<Project>;
  sectionId: string;
  mobileHeader?: string;
};

export const ProjectSection = (props: ProjectSectionProps) => {
  const { entries, sectionId, mobileHeader } = props;
  const isScrolled = useScrollCheck(sectionId + 'scroll');

  return (
    <div id={sectionId + 'scroll'} className="projectSectionContainer">
      <header className={`mobileHeader ${isScrolled ? 'scrolled' : ''}`}>
        <h2>{mobileHeader}</h2>
      </header>
      {Object.values(entries).map((element, index) => {
        const Item = <ProjectItem key={`${element.title}_${index}`} {...element} />;

        if (element?.isAnchor) {
          return <AnchorElement key={`${sectionId}_${index}`} sectionId={sectionId}>{Item}</AnchorElement>;
        }

        return Item;
      })}
    </div>
  );
};

const ProjectItem = (props: Project) => {
  const { title, description, img, link, tags } = props;
  const { t } = useTranslation();

  return (
    <section
      onClick={() => window.open(link, "_blank")}
      className="projectContainer"
    >
      <div className="projectContainer__img">
        <img
          className="projectContainer__img--image"
          src={process.env.PUBLIC_URL + img}
          alt={t(title)}
        />
      </div>
      <main className="projectContainer__content">
        <header className="projectContainer__content--title">
          <h3>{t(title)}</h3>
          <ArrowOutwardIcon sx={{ fontSize: 20 }} />
        </header>
        <span style={{textAlign: 'justify'}}>{t(description)}</span>
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
