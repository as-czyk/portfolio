import React from "react";
import { Section } from "../App";
import { useScrollCheck } from "../Hooks/useScrollHook";
import { useTranslation } from 'react-i18next';

import "./AboutSection.scss";

export const AboutSection = () => {
  const { t } = useTranslation();
  const isScrolled = useScrollCheck(Section.ABOUT);

  return (
    <>
      <div
        id={Section.ABOUT}
        className="aboutSectionContainer"
      >
        <header className={`mobileHeader ${isScrolled ? 'scrolled' : ''}`}>
          <h2>{t('About.header')}</h2>
        </header>
        <section className="sectionContent">
          {t('About.intro')}
        </section>
        <section className="sectionContent" dangerouslySetInnerHTML={{__html: t('About.tech')}} />
        <section className="sectionContent" dangerouslySetInnerHTML={{__html: t('About.university')}} />
        <section className="sectionContent" dangerouslySetInnerHTML={{__html: t('About.hobbies')}} />
      </div>
    </>
  );
};
