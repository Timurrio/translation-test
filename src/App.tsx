import { useTranslation } from "react-i18next";
import Greeting from "./components/Greeting";
import Home from "./components/Home";

const App = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "uk" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center py-10">
      <button
        className="rounded-2xl bg-gray-600 p-2  text-white text-lg"
        onClick={toggleLanguage}
      >
        {t("switch")}
      </button>
      <Home />
      <Greeting />
    </main>
  );
};

export default App;
