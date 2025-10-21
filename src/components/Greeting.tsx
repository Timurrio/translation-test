import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Greeting: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>(
    () => localStorage.getItem("name") || ""
  );

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>{t("greeting", { name: name || t("guest") })}</h1>
      <input
        type="text"
        placeholder={t("enterName")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginTop: "12px",
        }}
      />
    </div>
  );
};

export default Greeting;
