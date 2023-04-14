import { useTranslation } from "next-i18next";
import StyledWrapper from "./aboutUs.style";

const AboutUs = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("about.super-h1")}</p>
      </div>
      <div>
        <h1>{t("about.h1")}</h1>
      </div>
      <div>
        <p>{t("about.sub-h1")}</p>
      </div>
    </StyledWrapper>
  );
};

export default AboutUs;
