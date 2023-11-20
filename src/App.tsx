import React, { useEffect, useState, useTransition } from "react";
import { AboutSection } from "./Sections/AboutSection";
import { ExperienceSection } from "./Sections/ExperienceSection";
import { ProjectSection } from "./Sections/ProjectSection";
import { Experience } from "./Content/Experience";
import { Academic } from "./Content/Academic";
import { Title, TopButton, SwitchComp } from "./Comps/";
import { Project } from "./Content/Project";
import { useTranslation } from "react-i18next";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./App.scss";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export enum Section {
  ABOUT = "About",
  EXPERIENCE = "Experience",
  PROJECT = "Projects",
  ACADEMIC = "Academic",
}

export const App = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);
  const { t } = useTranslation();

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
    const filteredEntries = entries.filter((entry) => entry?.isIntersecting);

    if (filteredEntries.length === 0) return;

    if (filteredEntries[0]?.isIntersecting)
      setActiveSection(entries[0].target.id as Section);
  };

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <main className="mainContainer">
      <TopButton />
      <div className="stickyContainer">
        <div className="stickyContainer__content">
          <Title />
          <nav className="stickyContainer__content--navLinks">
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
                    {t('common.nav.' + section)}
                  </div>
                </a>
              );
            })}
          </nav>
          <div className="stickyContainer__content--switches">
            <SwitchComp labelOn="🇩🇪" labelOff="🇬🇧" onToggle={(checked) => changeLanguage(checked ? 'de' : 'en')} />
            {/* <SwitchComp labelOn="🔦" labelOff="💡"/> */}
          </div>
          <nav className="stickyContainer__content--iconLinks">
            <a
              href={"https://www.linkedin.com/in/aronscheffczyk/"}
              target={"_blank"}
            >
              <LinkedInIcon
                sx={{ fontSize: "var(--icon-fontSize)" }}
                className="iconButton"
              />
            </a>
            <a
              href={"https://github.com/as-czyk/"}
              target={"_blank"}
            >
              <GitHubIcon
                sx={{ fontSize: "var(--icon-fontSize)" }}
                className="iconButton"
              />
            </a>
            <a
              href={"https://www.youtube.com"}
              target={"_blank"}
            >
              <YouTubeIcon
                sx={{ fontSize: "var(--icon-fontSize)" }}
                className="iconButton"
              />
            </a>
          </nav>
        </div>
      </div>
      <main className="mainContainer__contentArea">
        <AboutSection />
        <ExperienceSection
          entries={Experience}
          sectionId={Section.EXPERIENCE}
          linkComp={
            <div className="experienceSectionContainer__link">
              <a
                href={process.env.PUBLIC_URL + "/pdf/scheffczyk.pdf"}
                target={"_blank"}
              >
                View full Resume
              </a>
              <ArrowRightAltIcon
                className={"experienceSectionContainer__link--icon"}
              />
            </div>
          }
          mobileHeader={"Professional Experience"}
        />
        <ProjectSection
          entries={Project}
          sectionId={Section.PROJECT}
          mobileHeader={"Projects"}
        />
        <ExperienceSection
          entries={Academic}
          sectionId={Section.ACADEMIC}
          mobileHeader={"University degrees"}
        />
      </main>
    </main>
  );
};
