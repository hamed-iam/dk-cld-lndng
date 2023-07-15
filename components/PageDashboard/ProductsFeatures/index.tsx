import SvgIcon from "@/components/SvgIcon";
import { Col, Row } from "antd";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import StyledWrapper from "./productsFeatures.style";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductFeatures from "./ProductFeatures";

const tabImages = [
  {
    key: 0,
    name: "server.png",
  },
  {
    key: 1,
    name: "sdd.png",
  },
  {
    key: 2,
    name: "dns.png",
  },
];

const ProductsFeatures = () => {
  const { t } = useTranslation("dashboard");
  const { locale } = useRouter();
  const [activeTab, setActiveTab] = useState(0);

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
            <div
              className={locale === "fa" ? "product-tabs-fa" : "product-tabs"}
            >
              <div className="cloud-icon">
                <SvgIcon title="cloudCoputingOrbitIcon" viewBox="0 0 152 186" />
              </div>
              <div className="storage-icon">
                <SvgIcon title="cloudCoputingOrbitIcon" viewBox="0 0 152 186" />
              </div>
              <div className="edge-icon">
                <SvgIcon title="cloudCoputingOrbitIcon" viewBox="0 0 152 186" />
              </div>
              <div
                className={
                  "cloud-pos tab-button " +
                  (activeTab === 0 ? "active" : "inactive")
                }
                onClick={() => setActiveTab(0)}
              >
                <div className="tab-icon" />
                <span className="title">CLOUD COMPUTING</span>
              </div>
              <div
                className={
                  "storage-pos tab-button " +
                  (activeTab === 1 ? "active" : "inactive")
                }
                onClick={() => setActiveTab(1)}
              >
                <div className="tab-icon" />
                <span>OBJECT STORAGE</span>
              </div>
              <div
                className={
                  "edge-pos tab-button " +
                  (activeTab === 2 ? "active" : "inactive")
                }
                onClick={() => setActiveTab(2)}
              >
                <div className="tab-icon" />
                <span>EDGE SERVICES</span>
              </div>
            </div>
          </Col>
          <Col
            className="w-100"
            xl={{ span: 18 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <ProductTabs activeTab={activeTab} />
          </Col>
        </Row>
        <div className="features-wrapper">
          <div className="features-title">
            <span>{t("products.features-title")}</span>
            <Image
              src="/assets/starStruckEmoji.svg"
              width="383"
              height="343"
              alt="cloud-compute"
            />
          </div>
          <ProductFeatures />
        </div>
        <div className="product-image">
          {tabImages.map((entry, index) => (
            <div
              key={index}
              className={
                (locale === "fa" ? "image-wrapper-fa" : "image-wrapper") +
                (activeTab === entry.key
                  ? " image-active image-movement"
                  : " image-inactive")
              }
            >
              <Image
                key={index}
                src={"/assets/" + entry.name}
                width="383"
                height="343"
                alt="cloud-compute"
              />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProductsFeatures;
