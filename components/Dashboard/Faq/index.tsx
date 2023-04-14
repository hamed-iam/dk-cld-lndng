import { useTranslation } from "next-i18next";
import StyledWrapper from "./faq.style";

const Faq = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <h1>{t("faq.h1")}</h1>
      </div>

      <div>
        <p>{t("faq.desc")}</p>
      </div>
    </StyledWrapper>
  );
};

export default Faq;
