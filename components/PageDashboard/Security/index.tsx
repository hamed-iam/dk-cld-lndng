import SvgIcon from "@/components/SvgIcon";
import { Col, Row } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import StyledWrapper from "./security.style";

const Security = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col
            className="w-100 "
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <div className="title-wrapper">
              <div className="title-wrapper-super">
                {t("security.super-h1")}
              </div>
              <div className="title-wrapper-heading">
                <h2>{t("security.h1.0")}</h2>
                <h3>
                  {t("security.h1.1")}{" "}
                  <span className="highlight-wrapper">
                    {t("security.h1.2")}
                  </span>
                </h3>
              </div>
              <div className="title-wrapper-sub">
                <span>{t("security.sub-h1")}</span>{" "}
                <span>
                  <Link href="/" className="page-links-link">
                    {t("security.link")}
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col
            className="w-100 content"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Row gutter={[16, 16]} className="w-100">
              <Col
                className="w-100 data"
                xl={{ span: 12 }}
                lg={{ span: 24 }}
                md={{ span: 24 }}
                sm={{ span: 24 }}
              >
                <div className="data-title">
                  <SvgIcon title="rectangleIcon" viewBox="0 0 5 25" />
                  <span className="data-title-h1">
                    {t("security.data.0.title")}
                  </span>
                </div>
                <div className="data-sub">{t("security.data.0.sub")}</div>
              </Col>
              <Col
                className="w-100 data"
                xl={{ span: 12 }}
                lg={{ span: 24 }}
                md={{ span: 24 }}
                sm={{ span: 24 }}
              >
                <div className="data-title">
                  <SvgIcon title="rectangleIcon" viewBox="0 0 5 25" />
                  <span className="data-title-h1">
                    {t("security.data.1.title")}
                  </span>
                </div>
                <div className="data-sub">{t("security.data.1.sub")}</div>
              </Col>
              <Col
                className="w-100 data"
                xl={{ span: 12 }}
                lg={{ span: 24 }}
                md={{ span: 24 }}
                sm={{ span: 24 }}
              >
                <div className="data-title">
                  <SvgIcon title="rectangleIcon" viewBox="0 0 5 25" />
                  <span className="data-title-h1">
                    {t("security.data.2.title")}
                  </span>
                </div>
                <div className="data-sub">{t("security.data.2.sub")}</div>
              </Col>

              <Col
                className="w-100 data"
                xl={{ span: 12 }}
                lg={{ span: 24 }}
                md={{ span: 24 }}
                sm={{ span: 24 }}
              >
                <div className="data-title">
                  <SvgIcon title="rectangleIcon" viewBox="0 0 5 25" />
                  <span className="data-title-h1">
                    {t("security.data.3.title")}
                  </span>
                </div>
                <div className="data-sub">{t("security.data.3.sub")}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </StyledWrapper>
  );
};

export default Security;
