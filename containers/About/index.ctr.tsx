import { useTranslation } from "next-i18next";
import StyledWrapper from "./aboutCtr.style";

const AboutCtr = ({}: any) => {
  const { t } = useTranslation("about");

  return (
    <StyledWrapper>
      <h1>{t("h1")}</h1>
    </StyledWrapper>
  );
};

export default AboutCtr;
