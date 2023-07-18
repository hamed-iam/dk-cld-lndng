import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import StyledWrapper from "./solutions.style";
import RetailTab from "./RetailTab";
import FinancialServicesTab from "./FinancialServicesTab";
import MediaTab from "./MediaTab";
import EducationTab from "./EducationTab";
import HealthTab from "./HealthTab";
import AllSolutionsTab from "./AllSolutionsTab";
import TitleFrame from "@/components/TitleFrame";
import SvgIcon from "@/components/SvgIcon";
import { useRouter } from "next/router";

import Image from "next/image";
import { useTranslation } from "react-i18next";

type TabPosition = "left" | "right" | "top" | "bottom";

export default function DashboardSolutions() {
  const { t } = useTranslation("dashboard");
  const { locale } = useRouter();
  const [tabPosition, setTabPosition] = useState<TabPosition>(
    locale === "en" ? "left" : "right"
  );

  // ! need to find a better solution for this. preferably with css only
  useEffect(() => {
    if (window.innerWidth <= 400) {
      setTabPosition("top");
    }
  }, []);

  const tabData = [
    {
      label: t("solutions.tabs.retail.label"),
      key: "1",
      children: <RetailTab />,
    },
    {
      label: t("solutions.tabs.finance.label"),
      key: "2",
      children: <FinancialServicesTab />,
    },
    {
      label: t("solutions.tabs.media.label"),
      key: "3",
      children: <MediaTab />,
    },
    {
      label: t("solutions.tabs.education.label"),
      key: "4",
      children: <EducationTab />,
    },
    {
      label: t("solutions.tabs.health.label"),
      key: "5",
      children: <HealthTab />,
    },
    {
      label: t("solutions.tabs.others.label"),
      key: "6",
      children: <AllSolutionsTab />,
    },
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <div className="dashboard-solutions-header">
          <p className="dashboard-solutions-header-super">
            {t("solutions.super-h2")}
          </p>

          <div className="solution-title-container">
            <TitleFrame>
              <div className="solution-title-wrapper">
                <h2>
                  {t("solutions.h2")}
                  <span> {t("solutions.h2-colored")}</span>
                </h2>

                <Image
                  src="/assets/crane.png"
                  width={64}
                  height={64}
                  alt=""
                  className="inner-crane"
                />
              </div>
            </TitleFrame>
            <div className="solution-title-icons">
              <SvgIcon
                title="arrowDashboardSolutionsIcon"
                viewBox="0 0 153 68"
              />
              <Image
                src="/assets/crane.png"
                width={168}
                height={168}
                alt=""
                className="outer-crane"
              />
            </div>
          </div>
          <p className="dashboard-solutions-header-sub">
            {t("solutions.sub-start")} <span>{t("solutions.sub")}</span>{" "}
            {t("solutions.sub-end")}
          </p>
        </div>

        <div className="dashboard-solutions-tabs">
          <Tabs
            tabPosition={tabPosition}
            items={tabData.map((tab) => {
              return {
                label: tab.label,
                key: tab.key,
                children: tab.children,
              };
            })}
          />
        </div>
      </div>
    </StyledWrapper>
  );
}
