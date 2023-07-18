import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { SectionCTAStyledWrapper } from "./customers.style";

export default function SectionCTA() {
  const { t } = useTranslation("dashboard");
  return (
    <SectionCTAStyledWrapper>
      <div className="cta-container">
        <h4>
          {t("customers.cta.h4")}
          <span>{t("customers.cta.h4-span")}</span>
        </h4>
        <p>{t("customers.cta.desc")}</p>

        <div className="cta-actions">
          <Button className="cta-actions-account" type="primary">
            {t("customers.cta.action-account")}
          </Button>
          <Button className="cta-actions-more" type="default">
            {t("customers.cta.action-more")}
          </Button>
        </div>
      </div>
    </SectionCTAStyledWrapper>
  );
}
