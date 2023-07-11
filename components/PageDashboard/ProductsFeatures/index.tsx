import SvgIcon from "@/components/SvgIcon";
import TitleFrame from "@/components/TitleFrame";
import { Button, Col, Collapse, Row } from "antd";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import StyledWrapper from "./productsFeatures.style";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const { Panel } = Collapse;

const ProductsFeatures = () => {
  const { t } = useTranslation("dashboard");
  const { locale } = useRouter();

  return (
    <StyledWrapper>
      <div className="triangle-wrapper">
        <div className="triangle"></div>
        <div className="triangle-base">
          <SvgIcon title="dashboardUpArrowIcon" viewBox="0 0 20 21" />
          <div className="triangle-text">{t("products.super-section")}</div>
        </div>
      </div>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col
            className="w-100 "
            xl={{ span: 6 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <div className={locale === "fa" ? "animation-fa" : "animation"}>
              <Image
                src="/assets/animation.svg"
                width={30}
                height={48}
                alt=""
              />
            </div>
          </Col>
          <Col
            className="w-100 info"
            xl={{ span: 18 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <div className="info-intro">
              <p className="info-super">{t("products.super-h1")}</p>
              <div className="info-title">
                <TitleFrame>
                  <h2>{t("products.h1-cloud")}</h2>
                </TitleFrame>
              </div>
              <p className="info-desc">{t("products.info-desc")}</p>
              <div className="info-actions">
                <Button className="info-actions-create">
                  {t("products.info-actions-create")}
                </Button>
                <Button className="info-actions-details">
                  {t("products.info-actions-details")}
                  <SvgIcon title="moreAboutUsArrowIcon" viewBox="0 0 20 21" />
                </Button>
              </div>
              <div className="info-sub">
                <span>{t("products.info-sub")}</span>{" "}
                <Link href="/" className="products.info-sub-link">
                  {t("products.info-sub-link")}
                </Link>
              </div>
            </div>
            <div className="charts-wrapper">
              <div className="chart">
                <div className="chart-content">
                  <div className="chart-content-donut">
                    <SvgIcon title="donutChartIcon" viewBox="0 0 96 96" />
                  </div>
                  <div className="chart-content-info">
                    <div className="content-heading">
                      <span className="content-heading-colored">
                        {t("products.chart-donut-heading.0")}
                      </span>
                      /{t("products.chart-donut-heading.1")}
                    </div>
                    <div className="content-title">
                      {t("products.chart-donut-info")}
                    </div>
                  </div>
                </div>
                <div className="chart-sub">{t("products.chart-donut-sub")}</div>
              </div>
              <div className="chart">
                <div className="chart-content">
                  <div className="chart-content-bar">
                    <SvgIcon title="barChartIcon" viewBox="0 0 96 96" />
                  </div>
                  <div className="chart-content-info">
                    <p>{t("products.chart-donut-info")}</p>
                  </div>
                </div>
                <div className="chart-sub">{t("products.chart-bar-sub")}</div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="features-title">
          <span>{t("products.features-title")}</span>
          <Image
            src="/assets/starStruckEmoji.svg"
            width="383"
            height="343"
            alt="cloud-compute"
          />
        </div>
        <div className="container-row">
          <div className="save-collapses features">
            <Collapse
              bordered={false}
              defaultActiveKey={["0"]}
              expandIconPosition="end"
              accordion
            >
              <Panel
                header={t("products.panels.0-header")}
                key="1"
                className="panel"
              >
                <p className="panel-desc">{t("products.panels.0-desc")}</p>
              </Panel>
              <Panel
                header={t("products.panels.1-header")}
                key="2"
                className="panel"
              >
                <p className="panel-desc">{t("products.panels.1-desc")}</p>
              </Panel>
            </Collapse>
            <Collapse
              bordered={false}
              defaultActiveKey={["0"]}
              expandIconPosition="end"
              accordion
            >
              <Panel
                header={t("products.panels.2-header")}
                key="1"
                className="panel"
              >
                <p className="panel-desc">{t("products.panels.2-desc")}</p>
              </Panel>
              <Panel
                header={t("products.panels.3-header")}
                key="2"
                className="panel"
              >
                <p className="panel-desc">{t("products.panels.3-desc")}</p>
              </Panel>
            </Collapse>
            <Collapse
              bordered={false}
              defaultActiveKey={["0"]}
              expandIconPosition="end"
              accordion
            >
              <Panel
                header={t("products.panels.4-header")}
                key="1"
                className="panel"
              >
                <p className="panel-desc">{t("products.panels.4-desc")}</p>
              </Panel>
              <Panel
                header={t("products.panels.5-header")}
                key="2"
                className="panel"
              >
                <p className="panel-desc">{t("products.panels.5-desc")}</p>
              </Panel>
            </Collapse>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={locale === "fa" ? "image-wrapper-fa" : "image-wrapper"}
          >
            <Image
              src="/assets/server.png"
              width="383"
              height="343"
              alt="cloud-compute"
            />
          </motion.div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProductsFeatures;
