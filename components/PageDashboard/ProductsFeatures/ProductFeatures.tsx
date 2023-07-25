import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductFeaturesStyledWrapper } from "./productsFeatures.style";
import { Collapse } from "antd";
const { Panel } = Collapse;

type Card = {
  header: string;
  desc: string;
};
interface ProductFeaturesPropTypes {
  activeTab: number;
}

export default function ProductFeatures({
  activeTab,
}: ProductFeaturesPropTypes) {
  const { t } = useTranslation("dashboard");
  const [currentPanel, setCurrentPanel] = useState("");

  const features = [
    [
      {
        header: t("products.panels-c.0.header"),
        desc: t("products.panels-c.0.desc"),
      },
      {
        header: t("products.panels-c.1.header"),
        desc: t("products.panels-c.1.desc"),
      },
      {
        header: t("products.panels-c.2.header"),
        desc: t("products.panels-c.2.desc"),
      },
      {
        header: t("products.panels-c.3.header"),
        desc: t("products.panels-c.3.desc"),
      },
    ],
    [
      {
        header: t("products.panels-o.0.header"),
        desc: t("products.panels-o.0.desc"),
      },
      {
        header: t("products.panels-o.1.header"),
        desc: t("products.panels-o.1.desc"),
      },
      {
        header: t("products.panels-o.2.header"),
        desc: t("products.panels-o.2.desc"),
      },
      {
        header: t("products.panels-o.3.header"),
        desc: t("products.panels-o.3.desc"),
      },
      {
        header: t("products.panels-o.4.header"),
        desc: t("products.panels-o.4.desc"),
      },
      {
        header: t("products.panels-o.5.header"),
        desc: t("products.panels-o.5.desc"),
      },
    ],
    [
      {
        header: t("products.panels-e.0.header"),
        desc: t("products.panels-e.0.desc"),
      },
      {
        header: t("products.panels-e.1.header"),
        desc: t("products.panels-e.1.desc"),
      },
      {
        header: t("products.panels-e.2.header"),
        desc: t("products.panels-e.2.desc"),
      },
      {
        header: t("products.panels-e.3.header"),
        desc: t("products.panels-e.3.desc"),
      },
      {
        header: t("products.panels-e.4.header"),
        desc: t("products.panels-e.4.desc"),
      },
      {
        header: t("products.panels-e.5.header"),
        desc: t("products.panels-e.5.desc"),
      },
    ],
  ];

  useEffect(() => {
    setCurrentPanel("");
  }, [activeTab]);

  return (
    <ProductFeaturesStyledWrapper>
      <div className="feature">
        <div className="save-collapses">
          <div className="feature-collapse">
            {features[activeTab].map((card, index) => {
              return (
                <Collapse
                  bordered={false}
                  defaultActiveKey={["0"]}
                  accordion
                  expandIconPosition="end"
                  key={index}
                  activeKey={currentPanel}
                  onChange={(action) => setCurrentPanel(action.toString())}
                >
                  <Panel header={card.header} key={index} className="panel">
                    <p className="panel-desc">{card.desc}</p>
                  </Panel>
                </Collapse>
              );
            })}
          </div>
        </div>
      </div>
    </ProductFeaturesStyledWrapper>
  );
}
