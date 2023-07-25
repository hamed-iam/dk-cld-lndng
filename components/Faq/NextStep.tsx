import { Button, Col, Row } from "antd";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import SvgIcon from "../SvgIcon";

interface NextStepPropTypes {
  onPointerMove: (e: any) => void;
}

export default function NextStep({ onPointerMove }: NextStepPropTypes) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <div className="faq-next-step" onPointerMove={onPointerMove}>
      <Row justify="space-between">
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={18}
          xl={18}
          className="faq-next-step-title"
        >
          <div className="d-f align-c">
            <h2>{t("next-step.h2")}</h2>
            <SvgIcon title="sirenIcon" viewBox="0 0 40 45" />
          </div>
          <p>{t("next-step.sub")}</p>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div className="faq-actions">
            <Button
              type="primary"
              className="faq-actions-tryout"
              href={
                locale === "fa" ? "/fa/about#callback" : "/en/about#callback"
              }
            >
              {t("next-step.actions.start")}
            </Button>
            <Button
              type="default"
              className="faq-actions-callback"
              href={
                locale === "fa" ? "/fa/about#callback" : "/en/about#callback"
              }
            >
              {t("next-step.actions.contact")}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
