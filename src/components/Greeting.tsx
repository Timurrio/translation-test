import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const Greeting = () => {
  const { t } = useTranslation("translation");
  const [name, setName] = useState<string>(
    () => localStorage.getItem("name") || ""
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("name", newName);
  }

  return (
    <div className="text-center mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold py-5">
        {t("Hello, {{name}}!", { name: name || t("guest") })}
      </h1>
      <input
        type="text"
        placeholder={t("Enter your name")}
        value={name}
        onChange={handleInputChange}
        className="py-2 px-3 mt-3 rounded-2xl border border-gray-500 max-w-50"
      />
    </div>
  );
};

export default Greeting;
