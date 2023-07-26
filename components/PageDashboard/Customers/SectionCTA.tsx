import { Button } from "antd";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { SectionCTAStyledWrapper } from "./customers.style";

export default function SectionCTA() {
  const { t } = useTranslation("dashboard");
  const { locale } = useRouter();

  return (
    <SectionCTAStyledWrapper>
      <div className="cta-container">
        <h4>
          {t("customers.cta.h4")}
          <span>{t("customers.cta.h4-span")}</span>
        </h4>
        <p>{t("customers.cta.desc")}</p>

        <div className="cta-actions">
          <Button
            className="cta-actions-account"
            type="primary"
            href={locale === "fa" ? "/fa/about#callback" : "/en/about#callback"}
          >
            {t("customers.cta.action-account")}
          </Button>
          <Button
            className="cta-actions-more"
            type="default"
            href={locale === "fa" ? "/fa/about" : "/en/about"}
          >
            {t("customers.cta.action-more")}
          </Button>
        </div>
      </div>
    </SectionCTAStyledWrapper>
  );
}
