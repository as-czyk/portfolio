import React, { useEffect, useState } from "react";
import { AboutSection } from "./Sections/AboutSection";
import { ExperienceSection } from "./Sections/ExperienceSection";
import { ProjectSection } from "./Sections/ProjectSection";
import { Experience } from "./Content/Experience";
import { Academic } from "./Content/Academic";
import { Title } from "./Comps/Title";

import "./App.scss";

export enum Section {
  ABOUT = "About",
  EXPERIENCE = "Experience",
  ACADEMIC = "Academic",
  PROJECT = "Project",
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
            {Object.values(Section).map((section) => {
              return (
                <a
                  className={activeSection === section ? "activeNavLink" : ""}
                  onClick={(e) => clickHandler(e, section)}
                >
                  {section}
                </a>
              );
            })}
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
