import React from "react";

import { useTranslation } from "react-i18next";
import Greeting from "./components/Greeting";
import Home from "./components/Home";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "uk" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="App">
      <main>
        <button onClick={toggleLanguage}>{t("switch")}</button>
        <Home />
        <Greeting />
      </main>
    </div>
  );
};

export default App;
