import { useTranslation } from "next-i18next";
import StyledWrapper from "./easyAccess.style";
import SvgIcon from "@/components/SvgIcon";

const EasyAccess = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div className="container">
        <h2>{t("easy-acc.h1")}</h2>
        <div className="quick-access-wrapper">
          <a href="#" className="quick-access-wrapper-product cloud">
            <span>
              <SvgIcon title="cloudComputingPlainIcon" viewBox="0 0 24 24" />
              {t("easy-acc.cld-opt")}
            </span>
            <SvgIcon title="contactArrowIcon" viewBox="0 0 24 24" />
          </a>
          <a href="#" className="quick-access-wrapper-product edge">
            <span>
              <SvgIcon title="edgeServicesPlainIcon" viewBox="0 0 25 24" />
              {t("easy-acc.edg-opt")}
            </span>
            <SvgIcon title="contactArrowIcon" viewBox="0 0 24 24" />
          </a>
          <a href="#" className="quick-access-wrapper-product oss">
            <span>
              <SvgIcon title="objectStoragePlainIcon" viewBox="0 0 25 24" />
              {t("easy-acc.oss-opt")}
            </span>
            <SvgIcon title="contactArrowIcon" viewBox="0 0 24 24" />
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default EasyAccess;
