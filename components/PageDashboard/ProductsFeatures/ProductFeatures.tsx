import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductFeaturesStyledWrapper } from "./productsFeatures.style";
import { Collapse } from "antd";

const { Panel } = Collapse;

interface ProductFeaturesPropTypes {}

export default function ProductFeatures({}: ProductFeaturesPropTypes) {
  const { t } = useTranslation("dashboard");

  return (
    <ProductFeaturesStyledWrapper>
      <div className="feature">
        <div className="save-collapses features">
          <Collapse
            bordered={false}
            defaultActiveKey={["0"]}
            expandIconPosition="end"
            accordion
          >
            <Panel
              header={t("products.panels.0.header")}
              key="1"
              className="panel"
            >
              <p className="panel-desc">{t("products.panels.0.desc")}</p>
            </Panel>
            <Panel
              header={t("products.panels.1.header")}
              key="2"
              className="panel"
            >
              <p className="panel-desc">{t("products.panels.1.desc")}</p>
            </Panel>
          </Collapse>
          <Collapse
            bordered={false}
            defaultActiveKey={["0"]}
            expandIconPosition="end"
            accordion
          >
            <Panel
              header={t("products.panels.2.header")}
              key="1"
              className="panel"
            >
              <p className="panel-desc">{t("products.panels.2.desc")}</p>
            </Panel>
            <Panel
              header={t("products.panels.3.header")}
              key="2"
              className="panel"
            >
              <p className="panel-desc">{t("products.panels.3.desc")}</p>
            </Panel>
          </Collapse>
          <Collapse
            bordered={false}
            defaultActiveKey={["0"]}
            expandIconPosition="end"
            accordion
          >
            <Panel
              header={t("products.panels.4.header")}
              key="1"
              className="panel"
            >
              <p className="panel-desc">{t("products.panels.4.desc")}</p>
            </Panel>
            <Panel
              header={t("products.panels.5.header")}
              key="2"
              className="panel"
            >
              <p className="panel-desc">{t("products.panels.5.desc")}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </ProductFeaturesStyledWrapper>
  );
}
