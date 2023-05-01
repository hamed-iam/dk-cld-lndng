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

type TabPosition = "left" | "right" | "top" | "bottom";

export default function DashboardSolutions() {
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
      label: `Retail`,
      key: "1",
      children: <RetailTab />,
    },
    {
      label: `Financial Services`,
      key: "2",
      children: <FinancialServicesTab />,
    },
    {
      label: `Media and Entertainment`,
      key: "3",
      children: <MediaTab />,
    },
    {
      label: `Education`,
      key: "4",
      children: <EducationTab />,
    },
    {
      label: `Health and Medical`,
      key: "5",
      children: <HealthTab />,
    },
    {
      label: `All Solutions`,
      key: "6",
      children: <AllSolutionsTab />,
    },
  ];

  return (
    <StyledWrapper>
      <div className="dashboard-solutions-header">
        <p className="dashboard-solutions-header-super">Our Solutions</p>

        <div className="solution-title-container">
          <TitleFrame>
            {/* {t("solutions.h1")} */}
            <div className="solution-title-wrapper">
              <h2>
                Answer Your Business Complexity with
                <span> Our Solution</span>
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
            <SvgIcon title="arrowDashboardSolutionsIcon" viewBox="0 0 153 68" />
            <Image
              src="/assets/crane.png"
              width={168}
              height={168}
              alt=""
              className="outer-crane"
            />
          </div>
        </div>
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
    </StyledWrapper>
  );
}
