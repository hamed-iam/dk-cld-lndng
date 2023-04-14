import { useTranslation } from "next-i18next";
import StyledWrapper from "./solutions.style";

const Solutions = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("solutions.super-h1")}</p>
      </div>
      <div>
        <h1>{t("solutions.h1")}</h1>
      </div>
      <div>
        <p>{t("solutions.sub-h1")}</p>
      </div>
    </StyledWrapper>
  );
};

export default Solutions;
