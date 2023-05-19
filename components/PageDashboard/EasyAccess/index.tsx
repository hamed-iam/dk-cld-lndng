import { useTranslation } from "next-i18next";
import StyledWrapper from "./easyAccess.style";

const EasyAccess = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div className="container">
        <h2>{t("easy-acc.h1")}</h2>
        <div className="quick-access-wrapper">
          <a href="#" className="quick-access-wrapper-product cloud">
            {t("easy-acc.cld-opt")}
          </a>
          <a href="#" className="quick-access-wrapper-product edge">
            {t("easy-acc.edg-opt")}
          </a>
          <a href="#" className="quick-access-wrapper-product oss">
            {t("easy-acc.oss-opt")}
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default EasyAccess;
