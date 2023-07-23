import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductTabsStyledWrapper } from "./productsFeatures.style";
import ProductTab from "./ProductTab";

interface ProductTabsPropTypes {
  activeTab: number;
}

export default function ProductTabs({ activeTab }: ProductTabsPropTypes) {
  const { t } = useTranslation("dashboard");
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const config = [
    {
      key: 0,
      title: t("products.h1-cloud-c"),
      desc: t("products.sub-h1-c"),
      sub: t("products.info-sub"),
      detailsUrl: "cloud-computing",
    },
    {
      key: 1,
      title: t("products.h1-cloud-e"),
      desc: t("products.sub-h1-e"),
      sub: t("products.info-sub"),
      detailsUrl: "oss",
    },
    {
      key: 2,
      title: t("products.h1-cloud-o"),
      desc: t("products.sub-h1-o"),
      sub: t("products.info-sub"),
      detailsUrl: "edge-services",
    },
  ];

  return (
    <ProductTabsStyledWrapper>
      <div className="tabs">
        <div className="tab-body">
          {config
            .filter((tab) => tab.key === activeTab)
            .map((entry, index) => (
              <div key={index}>
                <ProductTab
                  title={entry.title}
                  desc={entry.desc}
                  sub={entry.sub}
                  detailsUrl={entry.detailsUrl}
                  activate={currentTab === entry.key}
                />
              </div>
            ))}
        </div>
      </div>
    </ProductTabsStyledWrapper>
  );
}
