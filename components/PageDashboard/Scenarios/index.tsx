import { useTranslation } from "next-i18next";
import StyledWrapper from "./scenarios.style";

const Scenarios = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <h1>{t("scenarios.h1")}</h1>
      </div>
    </StyledWrapper>
  );
};

export default Scenarios;
