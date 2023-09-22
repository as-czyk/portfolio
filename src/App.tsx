import React, {useEffect, useState} from 'react';
import { AboutSection } from "./Sections/AboutSection";

import './App.scss';
import {ExperienceSection} from "./Sections/ExperienceSection";
import {ProjectSection} from "./Sections/ProjectSection";
import {Experience} from "./Content/Experience";
import {Academic} from "./Content/Academic";

export enum Section {
    ABOUT = 'aboutSection',
    EXPERIENCE = 'experienceSection',
    ACADEMIC = 'academicSection',
    PROJECT = 'projectSection'
}

export const App = () => {

    const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT)

    const clickHandler = (event: any, section: Section) => {
        event.preventDefault();
        const element = document.getElementById(section)
        if(element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
            setActiveSection(section)
        }
    }


    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            console.log(entries);
        })

        observer.observe(document?.getElementById(Section.ABOUT) as any)
        observer.observe(document?.getElementById(Section.EXPERIENCE) as any)
        observer.observe(document?.getElementById(Section.ACADEMIC) as any)
        observer.observe(document?.getElementById(Section.PROJECT) as any)

        return () => {

        };
    }, []);





  return (
      <div className="mainContainer">
          <div className="stickyContainer">
              <div className="stickyContainer__content">
                  <h2>Aron Scheffczyk</h2>
                  <h3>Aktueller Job Title</h3>
                  <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</h5>
                  <div className="stickyContainer__content--navLinks">
                      <a className={'navLink'} onClick={(e) => clickHandler(e, Section.ABOUT)}>Link to About</a>
                      <a onClick={(e) => clickHandler(e, Section.EXPERIENCE)}>Link to Experience</a>
                      <a onClick={(e) => clickHandler(e, Section.ACADEMIC)}>Link to Academic</a>
                      <a onClick={(e) => clickHandler(e, Section.PROJECT)}>Link to Projects</a>
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
              <ExperienceSection entries={Experience} sectionId={Section.EXPERIENCE}  />
              <ExperienceSection entries={Academic} sectionId={Section.ACADEMIC}  />
              <ProjectSection />
          </div>
      </div>
  );
}