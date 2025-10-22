import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");

  return <h2 className="font-bold text-2xl">{t("home page")}</h2>;
};

export default Home;
