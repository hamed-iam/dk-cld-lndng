import { useTranslation } from "next-i18next";

const HeroCmp = () => {
  const { t } = useTranslation("dashboard");

  return (
    <div>
      <div>{t("hero.super-h1")}</div>
      <div>{t("hero.h1")}</div>
      <div>{t("hero.sub-h1")}</div>
    </div>
  );
};

export default HeroCmp;
