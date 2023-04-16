import { useTranslation } from "next-i18next";
import StyledWrapper from "./share.style";

const Share = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("share.super-h1")}</p>
      </div>
      <div>
        <h1>{t("share.h1")}</h1>
      </div>
      <div>
        <p>{t("share.desc")}</p>
      </div>
    </StyledWrapper>
  );
};

export default Share;
