import { useTranslation } from "next-i18next";
import StyledWrapper from "./security.style";

const Security = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("security.super-h1")}</p>
      </div>
      <div>
        <h1>{t("security.h1")}</h1>
      </div>
      <div>
        <p>{t("security.sub-h1")}</p>
      </div>
    </StyledWrapper>
  );
};

export default Security;
