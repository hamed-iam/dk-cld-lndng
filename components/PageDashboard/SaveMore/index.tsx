import { useTranslation } from "next-i18next";
import StyledWrapper from "./saveMore.style";

const SaveMore = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("save.super-h1")}</p>
      </div>
      <div>
        <h1>{t("save.h1")}</h1>
      </div>
      <div>
        <p>{t("save.sub-h1")}</p>
      </div>
      <div>
        <p>{t("save.desc")}</p>
      </div>
    </StyledWrapper>
  );
};

export default SaveMore;
