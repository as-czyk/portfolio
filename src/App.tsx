import React, { useEffect, useState } from "react";
import { AboutSection } from "./Sections/AboutSection";
import { ExperienceSection } from "./Sections/ExperienceSection";
import { ProjectSection } from "./Sections/ProjectSection";
import { Experience } from "./Content/Experience";
import { Academic } from "./Content/Academic";
import { Title } from "./Comps/Title";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton } from "@mui/material";
import { Project } from "./Content/Project";

import "./App.scss";

export enum Section {
  ABOUT = "About",
  EXPERIENCE = "Experience",
  ACADEMIC = "Academic",
  PROJECT = "Project",
}

export const App = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);

  useEffect(() => {
    const observer = new IntersectionObserver(interSectionCallback);

    Object.values(Section).map((section: string) => {
      observer.observe(document?.getElementById(section) as any);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const interSectionCallback = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting)
      setActiveSection(entries[0].target.id as Section);
  };

  return (
    <div className="mainContainer">
      <div className="stickyContainer">
        <div className="stickyContainer__content">
          <Title />
          <div className="stickyContainer__content--navLinks">
            {Object.values(Section).map((section, index) => {
              return (
                <a
                  key={section + index}
                  className={activeSection === section ? "activeNavLink" : ""}
                  onClick={(e) => clickHandler(e, section)}
                >
                  <div className={"navLinkContainer"}>
                    <div
                      className={
                        activeSection === section
                          ? "navLinkContainer__bar--active"
                          : "navLinkContainer__bar"
                      }
                    />
                    {section}
                  </div>
                </a>
              );
            })}
          </div>
          <div className="stickyContainer__content--iconLinks">
            <a href={"https://www.linkedin.com/in/aronscheffczyk/"}>
              <LinkedInIcon
                sx={{ fontSize: 35 }}
                className="iconButton"
              />
            </a>
            <a href={"https://github.com/as-czyk/"}>
              <GitHubIcon
                sx={{ fontSize: 35 }}
                className="iconButton"
              />
            </a>
            <a href={"https://www.youtube.com"}>
              <YouTubeIcon
                sx={{ fontSize: 35 }}
                className="iconButton"
              />
            </a>
          </div>
        </div>
      </div>
      <main className="mainContainer__contentArea">
        <AboutSection />
        <ExperienceSection
          entries={Experience}
          sectionId={Section.EXPERIENCE}
        />
        <ExperienceSection
          entries={Academic}
          sectionId={Section.ACADEMIC}
        />
        <ProjectSection
          entries={Project}
          sectionId={Section.PROJECT}
        />
      </main>
    </div>
  );
};
