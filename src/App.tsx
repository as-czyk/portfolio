import React, { useEffect, useState } from "react";
import { AboutSection } from "./Sections/AboutSection";
import { ExperienceSection } from "./Sections/ExperienceSection";
import { ProjectSection } from "./Sections/ProjectSection";
import { Experience } from "./Content/Experience";
import { Academic } from "./Content/Academic";

import "./App.scss";
import { Title } from "./comps/Title";

export enum Section {
  ABOUT = "aboutSection",
  EXPERIENCE = "experienceSection",
  ACADEMIC = "academicSection",
  PROJECT = "projectSection",
}

export const App = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);

  const clickHandler = (event: any, section: Section) => {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting)
        setActiveSection(entries[0].target.id as Section);
    });

    Object.values(Section).map((section: string) => {
      observer.observe(document?.getElementById(section) as any);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mainContainer">
      <div className="stickyContainer">
        <div className="stickyContainer__content">
          <Title />
          <div className="stickyContainer__content--navLinks">
            <a
              className={activeSection === Section.ABOUT ? "activeNavLink" : ""}
              onClick={(e) => clickHandler(e, Section.ABOUT)}
            >
              About
            </a>
            <a
              className={
                activeSection === Section.EXPERIENCE ? "activeNavLink" : ""
              }
              onClick={(e) => clickHandler(e, Section.EXPERIENCE)}
            >
              Experience
            </a>
            <a
              className={
                activeSection === Section.ACADEMIC ? "activeNavLink" : ""
              }
              onClick={(e) => clickHandler(e, Section.ACADEMIC)}
            >
              Academic
            </a>
            <a
              className={
                activeSection === Section.PROJECT ? "activeNavLink" : ""
              }
              onClick={(e) => clickHandler(e, Section.PROJECT)}
            >
              Projects
            </a>
          </div>
          <div className="stickyContainer__content--iconLinks">
            <span>LinkedIn</span>
            <span>GitHub</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className="mainContainer__contentArea">
        <AboutSection />
        <ExperienceSection
          entries={Experience}
          sectionId={Section.EXPERIENCE}
        />
        <ExperienceSection
          entries={Academic}
          sectionId={Section.ACADEMIC}
        />
        <ProjectSection />
      </div>
    </div>
  );
};
