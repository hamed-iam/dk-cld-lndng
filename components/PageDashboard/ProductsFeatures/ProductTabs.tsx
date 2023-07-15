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
      superTitle: t("products.super-h1"),
      title: t("products.h1-cloud-c"),
      desc: t("products.sub-h1-c"),
      sub: t("products.info-sub"),
      detailUrl: "",
    },
    {
      key: 1,
      superTitle: "Test",
      title: "Title",
      desc: t("products.sub-h1-e"),
      sub: t("products.info-sub"),
      detailUrl: "",
    },
    {
      key: 2,
      superTitle: "Test2",
      title: "Title",
      desc: t("products.sub-h1-o"),
      sub: t("products.info-sub"),
      detailUrl: "",
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
                  superTitle={entry.superTitle}
                  title={entry.title}
                  desc={entry.desc}
                  sub={entry.sub}
                  detailUrl={entry.detailUrl}
                  activate={currentTab === entry.key}
                />
              </div>
            ))}
        </div>
      </div>
    </ProductTabsStyledWrapper>
  );
}
