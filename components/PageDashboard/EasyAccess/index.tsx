import { useTranslation } from "next-i18next";
import StyledWrapper from "./easyAccess.style";

const EasyAccess = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <h1>{t("easy-acc.h1")}</h1>
      </div>

      <div>
        <p>{t("easy-acc.cld-opt")}</p>
        <p>{t("easy-acc.edg-opt")}</p>
        <p>{t("easy-acc.oss-opt")}</p>
      </div>
    </StyledWrapper>  
  );
};

export default EasyAccess;
