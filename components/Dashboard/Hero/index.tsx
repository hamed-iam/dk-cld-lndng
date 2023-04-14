import { useTranslation } from "next-i18next";
import StyledWrapper from './hero.style'


const HeroCmp = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("hero.super-h1")}</p>
      </div>
      <div>
        <h1>{t("hero.h1")}</h1>
      </div>
      <div>
        <p>{t("hero.sub-h1")}</p>
      </div>
    </StyledWrapper>
  );
};

export default HeroCmp;
