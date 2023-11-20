import React from "react";
import { useTranslation } from "react-i18next";

import "./Title.scss";

export const Title = () => {
  const { t } = useTranslation();
  return (
    <header className="titleContainer">
      <h1>Aron Scheffczyk ✌️ </h1>
      <h2>Senior Software Engineer</h2>
      <p>{t('common.quote')}</p>
    </header>
  );
};
